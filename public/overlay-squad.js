(() => {
  const API = location.origin && location.origin !== "null" ? location.origin : "http://127.0.0.1:8769";
  async function tick() {
    const s = await (await fetch(API + "/api/state", { cache: "no-store" })).json();
    document.body.classList.toggle("effects-off", s.overlay?.rankEffects === false);
    const esc = v => String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
    const squad = s.squad || [];
    const root = document.getElementById("rows");
    const html = squad
      .slice(0, 5)
      .map((p, i) => {
        const logo = window.RANK_LOGOS ? window.RANK_LOGOS.get(p.rank) : { html: "", color: "#fff", candidates: [] };
        const src = logo.candidates && logo.candidates[0] ? logo.candidates[0] : "";
        const badge = src ? `<img src="${API}/${src}" data-rank-fx="${window.RANK_LOGOS.parse(p.rank).division.toLowerCase()}" alt="${esc(p.rank)}" />` : logo.html;
        return `<div class="row ${p.you ? "you" : ""}">
          <span class="idx">${i + 1}</span>
          <span class="name">${esc(p.name || "—")}</span>
          <span class="badge" style="color:${logo.color}">${badge}</span>
          <span class="rank" style="color:${logo.color}">${esc(p.rank || "—")} · ${Number(p.rr) || 0}RR</span>
          <span class="stat">${esc(p.kd ?? "—")} KD · ${esc(p.hs ?? 0)}% HS</span>
        </div>`;
      })
      .join("");
    if (root.innerHTML !== html) root.innerHTML = html;
  }
  tick().catch(() => {});
  setInterval(() => tick().catch(() => {}), 2000);
})();
