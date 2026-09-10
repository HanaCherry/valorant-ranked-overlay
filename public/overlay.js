(() => {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = location.origin && location.origin !== "null" ? location.origin : "http://127.0.0.1:8769";
  const pollMs = Math.max(1200, Number(params.get("poll") || 1500));
  const $ = (id) => document.getElementById(id);
  let lastIconKey = "";
  let lastMatchKills = 0;
  let starsBanner = null;
  let starsFull = null;
  let lastDivision = "";
  let seenEvents = new Set();
  let firstLoad = true;

  function fmt(n) {
    n = Number(n) || 0;
    return String(Math.round(n * 100) / 100);
  }

  async function resolveIcon(logo) {
    const candidates = logo.candidates || [];
    for (const rel of candidates) {
      const url = API + "/" + rel.replace(/^\//, "");
      try {
        const r = await fetch(url, { cache: "no-store" });
        if (r.ok) return { html: `<img src="${url}" alt="${logo.rank}" draggable="false" />`, color: logo.color };
      } catch {}
    }
    return { html: logo.html, color: logo.color };
  }

  function ensureStars(division) {
    if (!window.RankStars) return;
    if (!starsBanner && $("stars")) starsBanner = window.RankStars.create($("stars"), division);
    if (!starsFull && $("starsFull")) starsFull = window.RankStars.create($("starsFull"), division);
    if (division !== lastDivision) {
      lastDivision = division;
      starsBanner && starsBanner.setDivision(division);
      starsFull && starsFull.setDivision(division);
    }
  }

  function applyAppearance(ov) {
    const wrap = $("wrap");
    if (!wrap) return;
    wrap.classList.remove("top-right", "top-left", "bottom-left", "bottom-right");
    wrap.classList.add(ov.position || "bottom-right");
    document.documentElement.style.setProperty("--scale", ov.scale || 1);
    document.documentElement.style.setProperty("--opacity", ov.opacity == null ? 1 : ov.opacity);
    const layout = params.get("layout") || ov.layout || "banner";
    document.body.classList.remove("layout-banner", "layout-full", "layout-compact");
    document.body.classList.add("layout-" + (layout === "full" ? "full" : layout === "compact" ? "compact" : "banner"));
  }

  async function tick() {
    const r = await fetch(API + "/api/state", { cache: "no-store" });
    const s = await r.json();
    const ov = s.overlay || {};
    applyAppearance(ov);
    const visibility = {
      logoBanner: ov.showLogo !== false, logo: ov.showLogo !== false,
      rankBanner: ov.showRankName !== false, rankLabel: ov.showRankName !== false,
      progBanner: ov.showProgress !== false, bar: ov.showProgress !== false,
      liveKills: ov.showLiveKills !== false, liveDeaths: ov.showLiveDeaths !== false,
      toasts: ov.showToasts !== false,
    };
    for (const [id, visible] of Object.entries(visibility)) { if ($(id)) $(id).style.display = visible ? "" : "none"; }
    const parsed = s.parsed || (window.RANK_LOGOS ? window.RANK_LOGOS.parse(s.rank) : { rank: s.rank, division: "Unranked" });
    const logo = window.RANK_LOGOS ? window.RANK_LOGOS.get(s.rank) : { html: "", color: "#ff4655", candidates: [] };
    document.documentElement.style.setProperty("--rank", logo.color);
    ensureStars(parsed.division);
    document.body.classList.toggle("effects-off", ov.rankEffects === false);
    document.querySelectorAll(".badge-stage").forEach(el => el.dataset.rankFx = parsed.division.toLowerCase());
    const key = parsed.rank + (s.rankImage || "");
    if (key !== lastIconKey) {
      lastIconKey = key;
      const icon = s.rankImage
        ? { html: `<img src="${s.rankImage}" alt="${parsed.rank}" />`, color: logo.color }
        : await resolveIcon(logo);
      if ($("logoBanner")) $("logoBanner").innerHTML = icon.html;
      if ($("logo")) $("logo").innerHTML = icon.html;
    }
    const rrLabel = `${s.rr || 0} RR`;
    if ($("rankBanner")) $("rankBanner").textContent = parsed.rank;
    if ($("rankLabel")) $("rankLabel").textContent = parsed.rank;
    if ($("subBanner")) $("subBanner").textContent = `${rrLabel} · Competitive`;
    if ($("mode")) $("mode").textContent = "Valorant · Competitive";
    const pct = Math.max(0, Math.min(100, Number(s.progress) || Number(s.rr) || 0));
    if ($("barBanner")) $("barBanner").style.width = pct + "%";
    if ($("bar")) $("bar").style.width = pct + "%";
    if ($("pctBanner")) $("pctBanner").textContent = rrLabel;
    if ($("progressText")) $("progressText").textContent = rrLabel;
    const sess = s.session || {};
    if ($("liveKills")) $("liveKills").textContent = sess.kills || 0;
    if ($("liveDeaths")) $("liveDeaths").textContent = sess.deaths || 0;
    if ($("liveStreak")) $("liveStreak").textContent = sess.streak || 0;
    if ($("name")) $("name").textContent = s.name || s.riotId || "—";
    if ($("sKd")) $("sKd").textContent = fmt(s.kd);
    if ($("sHs")) $("sHs").textContent = (s.hs || 0) + "%";
    if ($("sWinRate")) $("sWinRate").textContent = (s.winRate || 0) + "%";
    if ($("sAcs")) $("sAcs").textContent = s.acs || 0;
    if ($("source")) $("source").textContent = s.source === "browser" ? "TRACKER · 8 MIN" : s.source === "henrik" ? "API" : "MANUEL";
    if (sess.kills > lastMatchKills && starsBanner) starsBanner.killBurst();
    lastMatchKills = sess.kills || 0;
    if (ov.showToasts && Array.isArray(s.events)) {
      for (const ev of s.events.slice(0, 3)) {
        if (seenEvents.has(ev.id) || firstLoad) continue;
        seenEvents.add(ev.id);
        const t = document.createElement("div");
        t.className = "toast";
        t.textContent = ev.text;
        $("toasts") && $("toasts").appendChild(t);
        setTimeout(() => t.remove(), 2800);
      }
    }
    firstLoad = false;
  }

  tick().catch(() => {});
  setInterval(() => tick().catch(() => {}), pollMs);
})();
