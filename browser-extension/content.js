(() => {
  "use strict";
  const API = "http://localhost:8769/api/extension";
  let last = "";
  function number(value) { const m = String(value || "").replace(",", ".").match(/-?\d+(?:\.\d+)?/); return m ? Number(m[0]) : null; }
  function read() {
    const text = document.body?.innerText || "";
    const rank = text.match(/(?:RATING|CURRENT RANK|COMPETITIVE RANK)\s+((?:IRON|BRONZE|SILVER|GOLD|PLATINUM|DIAMOND|ASCENDANT|IMMORTAL)\s+[123]|RADIANT|UNRANKED)/i)?.[1];
    const winRate = text.match(/WIN\s*%\s*([\d.,]+)/i)?.[1];
    const kd = text.match(/K\/D\s*([\d.,]+)/i)?.[1];
    const hs = text.match(/(?:HEADSHOT|HS)\s*%?\s*([\d.,]+)/i)?.[1];
    const values = { rank, winRate: number(winRate), kd: number(kd), hs: number(hs), profileUrl: location.href };
    return values;
  }
  async function sync() {
    const values = read();
    if (!values.rank && values.kd === null && values.winRate === null) return;
    const key = JSON.stringify(values);
    if (key === last) return;
    last = key;
    try { await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) }); } catch {}
  }
  setTimeout(sync, 2500);
  setInterval(sync, 480000);
})();
