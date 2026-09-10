(() => {
  const API = location.origin && location.origin !== "null" ? location.origin : "http://127.0.0.1:8769";
  async function tick() {
    const [stateRes, agentsRes] = await Promise.all([
      fetch(API + "/api/state", { cache: "no-store" }),
      fetch(API + "/api/agents", { cache: "no-store" }),
    ]);
    const s = await stateRes.json();
    const agents = (await agentsRes.json()).agents || [];
    const name = s.agent || "Jett";
    const a = agents.find((x) => String(x.name).toLowerCase() === String(name).toLowerCase()) || {};
    document.getElementById("agent").textContent = name;
    document.getElementById("role").textContent = (a.role || "AGENT").toUpperCase();
    document.getElementById("kd").textContent = s.kd ?? "—";
    document.getElementById("hs").textContent = (s.hs ?? 0) + "%";
    document.getElementById("acs").textContent = s.acs ?? "—";
    const img = document.getElementById("portrait");
    const src = s.agentPortrait || a.portrait || "";
    if (src) {
      img.src = src;
      img.hidden = false;
    }
    if (a.color) {
      const hex = String(a.color).replace(/^#/, "").slice(0, 6);
      document.documentElement.style.setProperty("--accent", "#" + hex);
    }
  }
  tick().catch(() => {});
  setInterval(() => tick().catch(() => {}), 2000);
})();
