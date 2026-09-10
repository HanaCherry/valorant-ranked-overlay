/**
 * Valorant Ranked Overlay — GalaxyBunny Studio
 * 4 overlays OBS : ranked, compact, agent, squad
 */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const tracker = require("./tracker-live");
const browserTracker = require("./tracker-browser");

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const DATA = process.env.RANKED_DATA_DIR ? path.resolve(process.env.RANKED_DATA_DIR) : path.join(ROOT, "data");
const DEFAULT_CONFIG_PATH = path.join(ROOT, "config.json");
const CONFIG_PATH = path.join(DATA, "config.json");
const STATE_PATH = path.join(DATA, "state.json");
const CREDENTIALS_PATH = path.join(DATA, "credentials.json");

const RANK_LADDER = [
  "Iron 1", "Iron 2", "Iron 3",
  "Bronze 1", "Bronze 2", "Bronze 3",
  "Silver 1", "Silver 2", "Silver 3",
  "Gold 1", "Gold 2", "Gold 3",
  "Platinum 1", "Platinum 2", "Platinum 3",
  "Diamond 1", "Diamond 2", "Diamond 3",
  "Ascendant 1", "Ascendant 2", "Ascendant 3",
  "Immortal 1", "Immortal 2", "Immortal 3",
  "Radiant",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(obj, null, 2), "utf8");
}

function loadCredentials() {
  const c = readJson(CREDENTIALS_PATH, {});
  tracker.setApiKey(c.apiKey || process.env.HENRIK_API_KEY || "");
}

function saveApiKey(key) {
  const prev = readJson(CREDENTIALS_PATH, {});
  prev.apiKey = String(key || "").trim();
  writeJson(CREDENTIALS_PATH, prev);
  tracker.setApiKey(prev.apiKey);
}

function loadConfig() {
  const defaults = readJson(DEFAULT_CONFIG_PATH, {});
  const local = readJson(CONFIG_PATH, {});
  const cfg = { ...defaults, ...local, overlay: { ...defaults.overlay, ...local.overlay } };
  cfg.overlay = Object.assign(
    {
      layout: "banner",
      transparent: true,
      showLogo: true,
      showStars: true,
      showRankName: true,
      showModeLabel: true,
      showProgress: true,
      showLiveKills: true,
      showLiveDeaths: true,
      showLiveStreak: true,
      showStats: false,
      showProfileName: false,
      showToasts: true,
      celebrateRankUp: true,
      position: "bottom-right",
      opacity: 1,
      scale: 1,
    },
    cfg.overlay || {}
  );
  if (!cfg.port) cfg.port = 8769;
  return cfg;
}

function saveConfig(cfg) {
  writeJson(CONFIG_PATH, cfg);
}

function defaultState() {
  return {
    rank: "Gold 2",
    rr: 45,
    name: "Player",
    riotId: "",
    level: 120,
    agent: "Jett",
    agentPortrait: "",
    kd: 1.12,
    hs: 24,
    winRate: 51,
    acs: 215,
    kills: 0,
    deaths: 0,
    wins: 0,
    matches: 0,
    peakRank: "Platinum 1",
    session: { kills: 0, deaths: 0, streak: 0, assists: 0 },
    squad: [
      { name: "Toi", riotId: "", rank: "Gold 2", rr: 45, kd: 1.12, hs: 24, role: "Duelist", you: true },
      { name: "Mate 2", riotId: "", rank: "Gold 1", rr: 20, kd: 0.98, hs: 18, role: "Initiator" },
      { name: "Mate 3", riotId: "", rank: "Silver 3", rr: 80, kd: 1.05, hs: 21, role: "Controller" },
      { name: "Mate 4", riotId: "", rank: "Platinum 1", rr: 10, kd: 1.31, hs: 28, role: "Sentinel" },
      { name: "Mate 5", riotId: "", rank: "Gold 3", rr: 70, kd: 0.89, hs: 16, role: "Duelist" },
    ],
    events: [],
    source: "manual",
    updatedAt: Date.now(),
  };
}

function loadState() {
  return { ...defaultState(), ...readJson(STATE_PATH, {}) };
}

function saveState(state) {
  writeJson(STATE_PATH, state);
}

const monitor = browserTracker.createMonitor({ readConfig: loadConfig, readState: loadState, writeState: saveState,
  readCredentials: () => readJson(CREDENTIALS_PATH, {}) });

function parseRank(rankStr) {
  const s = String(rankStr || "Unranked").trim();
  if (/radiant/i.test(s)) return { division: "Radiant", tier: null, rank: "Radiant" };
  if (/unranked/i.test(s)) return { division: "Unranked", tier: null, rank: "Unranked" };
  const m = s.match(/^(Iron|Bronze|Silver|Gold|Platinum|Diamond|Ascendant|Immortal)\s*([123])?/i);
  if (!m) return { division: s, tier: null, rank: s };
  const division = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
  const tier = m[2] ? Number(m[2]) : 1;
  return { division, tier, rank: `${division} ${tier}` };
}

function rankProgress(rr) {
  const n = Math.max(0, Math.min(100, Number(rr) || 0));
  return n;
}

const LEVEL_STARTS = [1, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480];

function levelBorder(level) {
  const n = Math.max(1, Number(level) || 1);
  let start = 1;
  for (const s of LEVEL_STARTS) if (n >= s) start = s;
  return `levels/border-${start}.png`;
}

function pushEvent(state, type, text) {
  state.events = state.events || [];
  state.events.unshift({ id: Date.now() + Math.random(), type, text, at: Date.now() });
  state.events = state.events.slice(0, 40);
}

let agentsCache = { at: 0, list: [] };

async function agents() {
  if (Date.now() - agentsCache.at < 6 * 3600 * 1000 && agentsCache.list.length) return agentsCache.list;
  try {
    agentsCache = { at: Date.now(), list: await tracker.fetchAgents() };
  } catch {
    if (!agentsCache.list.length) {
      agentsCache.list = ["Jett", "Phoenix", "Reyna", "Raze", "Yoru", "Neon", "Iso", "Waylay", "Sova", "Skye", "Breach", "KAY/O", "Fade", "Gekko", "Tejo", "Omen", "Brimstone", "Viper", "Astra", "Harbor", "Clove", "Sage", "Cypher", "Killjoy", "Chamber", "Deadlock", "Vyse"].map((name) => ({
        name,
        portrait: "",
        icon: "",
        role: "",
        color: "ff4655",
      }));
    }
  }
  return agentsCache.list;
}

function send(res, code, body, type = "application/json; charset=utf-8") {
  const data = Buffer.isBuffer(body) ? body : typeof body === "string" ? Buffer.from(body) : Buffer.from(JSON.stringify(body));
  res.writeHead(code, {
    "Content-Type": type,
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store",
  });
  res.end(data);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("JSON invalide"));
      }
    });
    req.on("error", reject);
  });
}

function serveStatic(req, res, url) {
  let rel = decodeURIComponent(url.pathname);
  if (rel === "/") rel = "/control.html";
  const file = path.normalize(path.join(PUBLIC, rel));
  if (!file.startsWith(PUBLIC)) return send(res, 403, { error: "forbidden" });
  fs.readFile(file, (err, buf) => {
    if (err) return send(res, 404, { error: "not found" });
    send(res, 200, buf, MIME[path.extname(file)] || "application/octet-stream");
  });
}

async function handleApi(req, res, url) {
  const cfg = loadConfig();
  const state = loadState();

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    return res.end();
  }

  if (url.pathname === "/api/state" && req.method === "GET") {
    const parsed = parseRank(state.rank);
    return send(res, 200, {
      ...state,
      tracking: { ...monitor.status, mode: cfg.trackerMode, intervalSeconds: 480 },
      parsed,
      progress: rankProgress(state.rr),
      nextRank: RANK_LADDER[RANK_LADDER.indexOf(parsed.rank) + 1] || parsed.rank,
      levelBorder: levelBorder(state.level),
      overlay: cfg.overlay,
      riotName: cfg.riotName,
      riotTag: cfg.riotTag,
      region: cfg.region,
      ranks: RANK_LADDER,
    });
  }

  if (url.pathname === "/api/server" && req.method === "GET") {
    return send(res, 200, { ok: true, host: "localhost", port: cfg.port, bind: "local", node: process.version,
      uptimeSeconds: Math.round(process.uptime()), dataDirectory: path.basename(DATA), public: false,
      urls: { control: `http://localhost:${cfg.port}/control.html`, ranked: `http://localhost:${cfg.port}/overlay.html`, level: `http://localhost:${cfg.port}/overlay-level.html` } });
  }

  if (url.pathname === "/api/config" && req.method === "GET") {
    return send(res, 200, { ...cfg, hasApiKey: Boolean(readJson(CREDENTIALS_PATH, {}).apiKey), hasParseApiKey: Boolean(readJson(CREDENTIALS_PATH, {}).parseApiKey) });
  }

  if (url.pathname === "/api/agents" && req.method === "GET") {
    return send(res, 200, { agents: await agents() });
  }

  if (url.pathname === "/api/config" && req.method === "POST") {
    const body = await readBody(req);
    const next = { ...cfg, ...body, overlay: { ...cfg.overlay, ...(body.overlay || {}) } };
    if ("apiKey" in body) {
      saveApiKey(body.apiKey);
      delete next.apiKey;
    }
    if ("parseApiKey" in body) {
      const credentials = readJson(CREDENTIALS_PATH, {});
      credentials.parseApiKey = String(body.parseApiKey || "").trim();
      writeJson(CREDENTIALS_PATH, credentials);
      delete next.parseApiKey;
    }
    saveConfig(next);
    monitor.arm();
    return send(res, 200, { ok: true });
  }

  if (url.pathname === "/api/state" && req.method === "POST") {
    const body = await readBody(req);
    const prevRank = state.rank;
    Object.assign(state, body);
    if (body.session) state.session = { ...loadState().session, ...body.session };
    if (body.rank && body.rank !== prevRank) pushEvent(state, "rank", `Rang : ${body.rank}`);
    state.updatedAt = Date.now();
    saveState(state);
    return send(res, 200, { ok: true, state });
  }

  if (url.pathname === "/api/session" && req.method === "POST") {
    const body = await readBody(req);
    const s = state.session || { kills: 0, deaths: 0, streak: 0, assists: 0 };
    if (body.delta === "kill") {
      s.kills += 1;
      s.streak += 1;
      pushEvent(state, "kill", "Kill");
    } else if (body.delta === "death") {
      s.deaths += 1;
      s.streak = 0;
      pushEvent(state, "death", "Mort");
    } else if (body.delta === "assist") {
      s.assists = (s.assists || 0) + 1;
    } else if (body.delta === "reset") {
      s.kills = 0;
      s.deaths = 0;
      s.streak = 0;
      s.assists = 0;
    }
    if (typeof body.kills === "number") s.kills = body.kills;
    if (typeof body.deaths === "number") s.deaths = body.deaths;
    state.session = s;
    state.updatedAt = Date.now();
    saveState(state);
    return send(res, 200, { ok: true, session: s });
  }

  if (url.pathname === "/api/track" && req.method === "POST") {
    const body = await readBody(req);
    let { name, tag, region } = body;
    if (body.riotId) {
      const p = tracker.parseRiotId(body.riotId);
      name = p.name;
      tag = p.tag;
    }
    name = name || cfg.riotName;
    tag = tag || cfg.riotTag;
    region = region || cfg.region || "eu";
    if (body.mode === "trackerOverlay" && body.overlayUrl && (!name || !tag)) { name = "Tracker"; tag = "Overlay"; }
    if (!name || !tag) return send(res, 400, { error: "Riot ID requis (Nom#Tag)" });
    if (body.mode === "manual") {
      saveConfig({ ...cfg, riotName: name, riotTag: tag, region, trackerMode: "manual" });
      return send(res, 200, { ok: true, profile: loadState(), manual: true });
    }
    if (monitor.status.busy) return send(res, 409, { error: "Une lecture est déjà en cours." });
    if (["browser", "trackerOverlay", "tracker", "valocheck", "valking", "blitz"].includes(body.mode) || (!body.mode && cfg.trackerMode === "browser")) {
      saveConfig({ ...cfg, riotName: name, riotTag: tag, region, trackerMode: ["tracker", "trackerOverlay", "valocheck", "valking", "blitz"].includes(body.mode) ? "browser" : body.mode === "parse" ? "parse" : "browser", trackerProvider: ["tracker", "trackerOverlay", "valocheck", "valking", "blitz"].includes(body.mode) ? body.mode : (cfg.trackerProvider || "valocheck"), trackerOverlayUrl: String(body.overlayUrl || cfg.trackerOverlayUrl || "").trim(), pollSeconds: 480,
        trackerPlatform: body.platform || cfg.trackerPlatform || "pc",
        trackerPlaylist: body.playlist || cfg.trackerPlaylist || "competitive",
        trackerSeason: body.season || cfg.trackerSeason || "" });
      try { return send(res, 200, { ok: true, profile: await monitor.run() }); }
      catch (e) { return send(res, 502, { error: e.message }); }
    }
    try {
      const profile = await tracker.fetchPlayer(region, name, tag);
      Object.assign(state, profile);
      if (state.squad && state.squad[0]) {
        state.squad[0] = {
          ...state.squad[0],
          name: profile.name,
          riotId: profile.riotId,
          rank: profile.rank,
          rr: profile.rr,
          kd: profile.kd,
          hs: profile.hs,
          you: true,
        };
      }
      state.source = "henrik";
      cfg.riotName = name;
      cfg.riotTag = tag;
      cfg.region = region;
      saveConfig(cfg);
      saveState(state);
      return send(res, 200, { ok: true, profile });
    } catch (e) {
      return send(res, 502, { error: e.message || String(e) });
    }
  }

  if (url.pathname === "/api/squad" && req.method === "POST") {
    const body = await readBody(req);
    const region = body.region || cfg.region || "eu";
    const ids = Array.isArray(body.ids) ? body.ids : [];
    const squad = [];
    for (let i = 0; i < 5; i++) {
      const raw = String(ids[i] || "").trim();
      if (!raw) {
        squad.push(state.squad?.[i] || { name: `Mate ${i + 1}`, rank: "Unranked", rr: 0, kd: 0, hs: 0 });
        continue;
      }
      const p = tracker.parseRiotId(raw);
      if (!p.tag) {
        squad.push({ name: p.name, riotId: raw, rank: "Unranked", rr: 0, kd: 0, hs: 0 });
        continue;
      }
      try {
        const profile = await tracker.fetchPlayer(region, p.name, p.tag);
        squad.push({
          name: profile.name,
          riotId: profile.riotId,
          rank: profile.rank,
          rr: profile.rr,
          kd: profile.kd,
          hs: profile.hs,
          you: i === 0,
        });
      } catch (e) {
        squad.push({ name: p.name, riotId: raw, rank: "Erreur", rr: 0, kd: 0, hs: 0, error: e.message });
      }
    }
    state.squad = squad;
    if (squad[0] && squad[0].rank && squad[0].rank !== "Erreur") {
      state.rank = squad[0].rank;
      state.rr = squad[0].rr;
      state.name = squad[0].name;
      state.kd = squad[0].kd;
      state.hs = squad[0].hs;
    }
    saveState(state);
    return send(res, 200, { ok: true, squad });
  }

  send(res, 404, { error: "not found" });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://127.0.0.1`);
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res, url);
    return serveStatic(req, res, url);
  } catch (e) {
    send(res, 500, { error: e.message || String(e) });
  }
});

fs.mkdirSync(DATA, { recursive: true });
if (!fs.existsSync(CONFIG_PATH)) saveConfig(loadConfig());
if (!fs.existsSync(STATE_PATH)) saveState(defaultState());
loadCredentials();
monitor.arm();

const PORT = loadConfig().port || 8769;
server.on("error", (err) => { if (err.code === "EADDRINUSE") { console.log(`Valorant Ranked Overlay déjà lancé sur le port ${PORT}`); process.exit(0); } throw err; });
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Valorant Ranked Overlay — GalaxyBunny Studio`);
  console.log(`  Controle : http://127.0.0.1:${PORT}/control.html`);
  console.log(`  Ranked   : http://127.0.0.1:${PORT}/overlay.html`);
  console.log(`  Compact  : http://127.0.0.1:${PORT}/overlay-compact.html`);
  console.log(`  Agent    : http://127.0.0.1:${PORT}/overlay-agent.html`);
  console.log(`  Squad    : http://127.0.0.1:${PORT}/overlay-squad.html`);
});
