/**
 * Lecture publique des stats Valorant via Henrik Dev API.
 * Clé optionnelle dans data/credentials.json (jamais commitée).
 */
"use strict";

let apiKey = "";

function setApiKey(key) {
  apiKey = String(key || "").trim();
}

function headers() {
  const h = { Accept: "application/json" };
  if (apiKey) h.Authorization = apiKey;
  return h;
}

async function getJson(url) {
  const r = await fetch(url, { headers: headers() });
  const text = await r.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  if (!r.ok) {
    const msg = data?.errors?.[0]?.message || data?.message || `HTTP ${r.status}`;
    const err = new Error(msg);
    err.status = r.status;
    throw err;
  }
  return data;
}

function parseRiotId(raw) {
  const s = String(raw || "").trim();
  const i = s.lastIndexOf("#");
  if (i <= 0) return { name: s, tag: "" };
  return { name: s.slice(0, i).trim(), tag: s.slice(i + 1).trim() };
}

function mapMmr(payload) {
  const d = payload?.data || payload || {};
  const current = d.current_data || d;
  const patched = current.currenttierpatched || current.current_rank || current.currenttier_patched || "";
  const rr = current.ranking_in_tier ?? current.ranking_in_tier ?? current.rr ?? 0;
  const elo = current.elo ?? current.currentelo ?? null;
  const images = current.images || {};
  return {
    rank: patched || "Unranked",
    rr: Number(rr) || 0,
    elo: elo == null ? null : Number(elo),
    rankImage: images.large || images.small || "",
    peakRank: d.highest_rank?.patched_tier || d.highest_rank?.tier || "",
  };
}

async function fetchPlayer(region, name, tag) {
  const reg = encodeURIComponent(region || "eu");
  const n = encodeURIComponent(name);
  const t = encodeURIComponent(tag);
  const mmr = await getJson(`https://api.henrikdev.xyz/valorant/v2/mmr/${reg}/${n}/${t}`);
  let stats = { kd: 0, hs: 0, winRate: 0, acs: 0, kills: 0, deaths: 0, wins: 0, matches: 0, level: 0 };
  try {
    const acc = await getJson(`https://api.henrikdev.xyz/valorant/v1/account/${n}/${t}`);
    stats.level = Number(acc?.data?.account_level) || 0;
  } catch {}
  try {
    const lifetime = await getJson(
      `https://api.henrikdev.xyz/valorant/v1/lifetime/matches/${reg}/${n}/${t}?mode=competitive&size=20`
    );
    const list = lifetime?.data || [];
    stats.matches = list.length;
    let k = 0,
      d = 0,
      w = 0,
      hsHits = 0,
      shots = 0,
      score = 0;
    for (const m of list) {
      const st = m.stats || m;
      k += Number(st.kills) || 0;
      d += Number(st.deaths) || 0;
      score += Number(st.score) || 0;
      if (m.teams) {
        const won = m.teams.red > m.teams.blue ? "Red" : "Blue";
        if (String(m.stats?.team || st.team) === won) w += 1;
      }
      const sh = st.shots || {};
      hsHits += Number(sh.head) || 0;
      shots += (Number(sh.head) || 0) + (Number(sh.body) || 0) + (Number(sh.leg) || 0);
    }
    stats.kills = k;
    stats.deaths = d;
    stats.wins = w;
    stats.kd = d ? +(k / d).toFixed(2) : k;
    stats.winRate = stats.matches ? Math.round((w / stats.matches) * 100) : 0;
    stats.hs = shots ? Math.round((hsHits / shots) * 100) : 0;
    stats.acs = stats.matches ? Math.round(score / stats.matches) : 0;
  } catch {}
  const rank = mapMmr(mmr);
  return {
    riotId: `${name}#${tag}`,
    name,
    tag,
    region,
    ...rank,
    ...stats,
    source: "henrik",
    updatedAt: Date.now(),
  };
}

async function fetchAgents() {
  const r = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
  const j = await r.json();
  return (j.data || []).map((a) => ({
    uuid: a.uuid,
    name: a.displayName,
    role: a.role?.displayName || "",
    portrait: a.fullPortrait || a.displayIcon,
    icon: a.displayIcon,
    color: (a.backgroundGradientColors && a.backgroundGradientColors[0]) || "ff4655",
  }));
}

module.exports = { setApiKey, parseRiotId, fetchPlayer, fetchAgents, mapMmr };
