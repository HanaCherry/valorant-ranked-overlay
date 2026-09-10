(() => {
  const API = location.origin && location.origin !== "null" ? location.origin : "http://127.0.0.1:8769";
  async function tick() {
    const s = await (await fetch(API + "/api/state", { cache: "no-store" })).json();
    document.getElementById("level").textContent = String(s.level || 1);
    document.getElementById("name").textContent = (s.name || s.riotId || "PLAYER").toUpperCase();
    const img = document.getElementById("border");
    if (s.levelBorder) img.src = API + "/" + String(s.levelBorder).replace(/^\//, "");
    const ov = s.overlay || {};
    const badge = document.querySelector(".badge"); if (badge) { badge.style.setProperty("--level-halo", ov.levelHaloColor || "#b178ff"); badge.classList.remove("level-effect-pulse","level-effect-spin","level-effect-sparkle","level-effect-static"); badge.classList.add("level-effect-" + (ov.levelEffect || "pulse")); }
    document.querySelector(".badge")?.classList.toggle("level-border-off", ov.levelShowBorder === false);
    document.querySelector(".badge")?.classList.toggle("level-outer-off", ov.levelShowOuter === false);
    document.querySelector(".badge")?.classList.toggle("level-circle-off", ov.levelShowCircle === false);
    document.querySelector(".badge")?.classList.toggle("level-background-off", ov.levelShowBackground === false);
    document.getElementById("border").classList.toggle("level-preview-hidden", ov.levelShowBorder === false);
    document.getElementById("level").classList.toggle("level-preview-hidden", ov.levelShowNumber === false);
    document.querySelector(".level-stars")?.classList.toggle("level-preview-hidden", ov.levelShowStars === false);
    document.getElementById("name").classList.toggle("level-preview-hidden", ov.levelShowName === false);
    document.querySelector(".level-label")?.classList.toggle("level-preview-hidden", ov.levelShowName === false);
  }
  tick().catch(() => {});
  setInterval(() => tick().catch(() => {}), 2000);
})();
