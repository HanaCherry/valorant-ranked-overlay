"use strict";

const INTERVAL = 8 * 60 * 1000;
const PARSE_PROFILE_ENDPOINT = "https://api.parse.bot/scraper/6517942a-644e-4cbc-9349-6e6d5ddaa622/get_player_profile";
const profileUrl = (name, tag, options = {}) => {
  const n = encodeURIComponent(name), t = encodeURIComponent(tag);
  if (options.provider === "trackerOverlay") return String(options.overlayUrl || "").trim();
  if (options.provider === "tracker") return `https://tracker.gg/valorant/profile/riot/${encodeURIComponent(`${name}#${tag}`)}/overview`;
  if (options.provider === "valking") return `https://valking.gg/en/player/${n}/${t}`;
  if (options.provider === "blitz") return `https://blitz.gg/valorant/profile/${encodeURIComponent(`${name}#${tag}`)}`;
  return `https://valocheck.com/player/${n}/${t}/`;
};

// Only accept explicitly labelled current rank and RR. Never guess from peak rank.
function parseProfile(text) {
  const s = String(text || "").replace(/\r/g, "");
  if (/verify you are human|just a moment|access denied|checking your browser/i.test(s)) throw new Error("Le site demande une vérification ou bloque le navigateur. Réessaie plus tard.");
  if (/API HENRIK.*(?:panne|down)|rate[_ -]?limited|trop de requêtes/i.test(s)) throw new Error("La source publique est temporairement limitée. Les dernières données sont conservées.");
  if (/this profile is private|private profile|profile not found|ce profil est privé/i.test(s)) throw new Error("Profil privé ou introuvable. Rends le profil public pour activer le suivi.");
  const rank = s.match(/(?:Current Rank|Competitive Rank|Rating|Rang actuel|Rang compétitif)\s*[:\n]?\s*((?:Iron|Bronze|Silver|Gold|Platinum|Diamond|Ascendant|Immortal)\s*(?:III|II|I|[123])|Radiant|Unranked|Fer|Bronze|Argent|Or|Platine|Diamant|Ascendant|Immortel|Radieux)\b/i);
  const rr = s.match(/\b([\d,]+)\s*RR\b/i) || s.match(/(?:Rank Rating|Ranked Rating)\s*[:\n]?\s*([\d,]+)/i);
  if (!rank || (!rr && !/Unranked/i.test(rank[1]))) throw new Error("Rang actuel ou RR non lisibles sur Tracker. Les dernières données sont conservées.");
  const localized = { Fer: "Iron", Argent: "Silver", Or: "Gold", Platine: "Platinum", Diamant: "Diamond", Immortel: "Immortal", Radieux: "Radiant" };
  const normalized = rank[1].replace(/III$/i, "3").replace(/II$/i, "2").replace(/I$/i, "1").replace(/^[A-Za-zÀ-ÿ]+/, x => localized[x] || x);
  const out = { rank: normalized, rr: rr ? Number(rr[1].replace(/,/g, "")) : 0 };
  const labels = { kd: "K/D(?: Ratio)?", hs: "Headshot %|Headshots %|HS%", winRate: "Win %|Win Rate", acs: "ACS|Average Combat Score", kills: "Kills", deaths: "Deaths", wins: "Wins", matches: "Matches Played", level: "Account Level" };
  for (const [key, label] of Object.entries(labels)) {
    const match = s.match(new RegExp(`(?:^|\\n)\\s*(?:${label})\\s*[:\\n]?\\s*([\\d,]+(?:\\.\\d+)?)%?(?=\\s|$)`, "i"));
    if (match) out[key] = Number(match[1].replace(/,/g, ""));
  }
  return out;
}

async function fetchPlayer(region, name, tag, options = {}) {
  let chromium;
  try { chromium = require("playwright-core").chromium; }
  catch { throw new Error("Le lecteur manque : relance LANCER.bat pour l’installer."); }
  let browser;
  for (const channel of ["msedge", "chrome"]) {
    try { browser = await chromium.launch({ channel, headless: true }); break; } catch {}
  }
  if (!browser) throw new Error("Installe Microsoft Edge ou Google Chrome pour lire Tracker.");
  try {
    const page = await browser.newPage({ locale: "en-US", viewport: { width: 1440, height: 1000 } });
    const target = profileUrl(name, tag, options);
    if (options.provider === "trackerOverlay" && !/^https:\/\/tracker\.gg\/overlays\/overlay\/[a-z0-9-]+/i.test(target)) throw new Error("URL Overlay Tracker.gg absente ou invalide.");
    const response = await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
    if (response && response.status() >= 400) {
      if (response.status() === 401) throw new Error("Blitz demande une autorisation pour ce profil. Choisis ValoCheck ou Valking, puis rends le profil public.");
      throw new Error(`La source refuse la lecture (HTTP ${response.status()}). Dernières données conservées.`);
    }
    await page.waitForFunction(() => /\bRR\b|Rank Rating|private profile|profile not found|verify you are human|just a moment/i.test(document.body?.innerText || ""), null, { timeout: 20000 }).catch(() => {});
    const result = parseProfile(await page.locator("body").innerText());
    return { ...result, name, tag, riotId: `${name}#${tag}`, region, source: "browser", rankImage: "", profileUrl: target, updatedAt: Date.now() };
  } finally { await browser.close(); }
}

function flattenValues(value, out = {}) {
  if (!value || typeof value !== "object") return out;
  for (const [key, val] of Object.entries(value)) {
    if (val && typeof val === "object") flattenValues(val, out);
    else if (typeof val === "number" || typeof val === "string") out[key.toLowerCase()] = val;
  }
  return out;
}

async function fetchParseProfile(apiKey, region, name, tag) {
  if (!String(apiKey || "").trim()) throw new Error("Clé Parse API requise pour ce mode.");
  const url = `${PARSE_PROFILE_ENDPOINT}?player_id=${encodeURIComponent(`${name}#${tag}`)}`;
  const response = await fetch(url, { headers: { Accept: "application/json", "X-API-Key": String(apiKey).trim() } });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.message || payload?.error || `Parse API HTTP ${response.status}`);
  const values = flattenValues(payload);
  const rankRaw = values.currentrank || values.current_rank || values.rank || values.rankedrating || values.rating;
  const rrRaw = values.rr || values.rankrating || values.rankedratingvalue || values.value;
  const rank = String(rankRaw || "Unranked").replace(/\b(III|II|I)\b/i, x => ({ I: "1", II: "2", III: "3" }[x.toUpperCase()]));
  return { name, tag, riotId: `${name}#${tag}`, region, rank, rr: Number(rrRaw) || 0,
    kd: Number(values.kdratio || values.kd || 0) || 0, hs: Number(values.headshotpct || values.headshots || 0) || 0,
    winRate: Number(values.matcheswinpct || values.winrate || 0) || 0, acs: Number(values.averagescore || values.acs || 0) || 0,
    level: Number(values.accountlevel || 0) || 0, source: "parse", rankImage: "", profileUrl: url, updatedAt: Date.now() };
}

function createMonitor({ readConfig, readState, writeState, readCredentials = () => ({}), fetchProfile = fetchPlayer, now = Date.now, schedule = setTimeout, cancel = clearTimeout }) {
  let busy = false, timer, stopped = false;
  const status = { busy: false, lastAttempt: null, lastSuccess: null, nextRun: null, error: "" };
  function arm() {
    cancel(timer);
    const cfg = readConfig();
    status.nextRun = !stopped && ["browser", "parse"].includes(cfg.trackerMode) && cfg.riotName && cfg.riotTag ? now() + INTERVAL : null;
    if (status.nextRun) timer = schedule(() => run().catch(() => {}), INTERVAL);
  }
  async function run() {
    if (busy) throw new Error("Une lecture est déjà en cours.");
    const cfg = readConfig();
    if (cfg.trackerMode !== "browser" || !cfg.riotName || !cfg.riotTag) { arm(); return null; }
    busy = status.busy = true;
    cancel(timer); status.nextRun = null; status.lastAttempt = now(); status.error = "";
    try {
      const profile = cfg.trackerMode === "parse"
        ? await fetchParseProfile(readCredentials().parseApiKey, cfg.region, cfg.riotName, cfg.riotTag)
        : await fetchProfile(cfg.region, cfg.riotName, cfg.riotTag, {
        platform: cfg.trackerPlatform || "pc",
        playlist: cfg.trackerPlaylist || "competitive",
        season: cfg.trackerSeason || "",
        provider: cfg.trackerProvider || "valocheck", overlayUrl: cfg.trackerOverlayUrl || "",
      });
      const current = readConfig();
      if (current.trackerMode !== "browser" || current.riotName !== cfg.riotName || current.riotTag !== cfg.riotTag) return null;
      const state = readState(); // Preserve session edits made during browser loading.
      const changed = state.riotId !== profile.riotId;
      if (changed) for (const key of ["kd", "hs", "winRate", "acs", "kills", "deaths", "wins", "matches", "level", "peakRank"]) state[key] = null;
      Object.assign(state, profile);
      if (state.squad?.[0]) state.squad[0] = { ...state.squad[0], name: profile.name, riotId: profile.riotId, rank: profile.rank, rr: profile.rr, kd: state.kd, hs: state.hs, you: true };
      writeState(state); status.lastSuccess = now();
      return profile;
    } catch (e) { status.error = e.message; throw e; }
    finally { busy = status.busy = false; arm(); }
  }
  return { run, arm, status, stop() { stopped = true; cancel(timer); status.nextRun = null; } };
}
module.exports = { fetchPlayer, fetchParseProfile, parseProfile, profileUrl, createMonitor, INTERVAL };
