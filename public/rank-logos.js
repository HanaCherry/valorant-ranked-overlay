/**
 * Badges ranked Valorant — PNG officiels (valorant-api.com, dernier épisode).
 */
window.RANK_LOGOS = (() => {
  const COLORS = {
    Iron: "#828282",
    Bronze: "#7c5522",
    Silver: "#d1d1d1",
    Gold: "#eec56a",
    Platinum: "#00c7c0",
    Diamond: "#763baf",
    Ascendant: "#31a46f",
    Immortal: "#ff5551",
    Radiant: "#ffedaa",
    Unranked: "#8899aa",
  };

  const RANK_FILE = {
    Unranked: "unranked.png",
    "Iron 1": "iron1.png",
    "Iron 2": "iron2.png",
    "Iron 3": "iron3.png",
    "Bronze 1": "bronze1.png",
    "Bronze 2": "bronze2.png",
    "Bronze 3": "bronze3.png",
    "Silver 1": "silver1.png",
    "Silver 2": "silver2.png",
    "Silver 3": "silver3.png",
    "Gold 1": "gold1.png",
    "Gold 2": "gold2.png",
    "Gold 3": "gold3.png",
    "Platinum 1": "platinum1.png",
    "Platinum 2": "platinum2.png",
    "Platinum 3": "platinum3.png",
    "Diamond 1": "diamond1.png",
    "Diamond 2": "diamond2.png",
    "Diamond 3": "diamond3.png",
    "Ascendant 1": "ascendant1.png",
    "Ascendant 2": "ascendant2.png",
    "Ascendant 3": "ascendant3.png",
    "Immortal 1": "immortal1.png",
    "Immortal 2": "immortal2.png",
    "Immortal 3": "immortal3.png",
    Radiant: "radiant.png",
  };

  function parse(rank) {
    const s = String(rank || "Unranked").trim();
    if (/radiant/i.test(s)) return { division: "Radiant", tier: null, rank: "Radiant" };
    if (/unranked/i.test(s)) return { division: "Unranked", tier: null, rank: "Unranked" };
    const m = s.match(/^(Iron|Bronze|Silver|Gold|Platinum|Diamond|Ascendant|Immortal)\s*([123])?/i);
    if (!m) return { division: "Unranked", tier: null, rank: s };
    const division = m[1][0].toUpperCase() + m[1].slice(1).toLowerCase();
    const tier = m[2] ? Number(m[2]) : 1;
    return { division, tier, rank: `${division} ${tier}` };
  }

  function svg(parsed) {
    const c = COLORS[parsed.division] || COLORS.Unranked;
    const label = parsed.tier ? String(parsed.tier) : parsed.division === "Radiant" ? "R" : "–";
    return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="${c}" stroke="#fff" stroke-width="1.5"/>
      <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="18" font-family="Segoe UI" font-weight="800">${label}</text>
    </svg>`;
  }

  function get(rank) {
    const parsed = parse(rank);
    const color = COLORS[parsed.division] || COLORS.Unranked;
    const file = RANK_FILE[parsed.rank] || RANK_FILE.Unranked;
    return {
      ...parsed,
      color,
      html: svg(parsed),
      candidates: [`ranks/${file}`],
    };
  }

  return { parse, get, COLORS, RANK_FILE };
})();
