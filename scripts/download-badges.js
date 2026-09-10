/**
 * Télécharge les badges de rang et de niveau officiels depuis valorant-api.com.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ranksDir = path.join(ROOT, "public", "ranks");
const levelsDir = path.join(ROOT, "public", "levels");

function slug(name) {
  return String(name).toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
}

async function save(url, dest) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} → ${r.status}`);
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
  console.log("ok", path.relative(ROOT, dest));
}

(async () => {
  fs.mkdirSync(ranksDir, { recursive: true });
  fs.mkdirSync(levelsDir, { recursive: true });
  const tiers = await (await fetch("https://valorant-api.com/v1/competitivetiers")).json();
  const last = tiers.data[tiers.data.length - 1];
  const ranks = {};
  for (const t of last.tiers) {
    if (!t.largeIcon) continue;
    const pretty = t.tierName
      .split(" ")
      .map((w) => w[0] + w.slice(1).toLowerCase())
      .join(" ");
    const file = slug(t.tierName) + ".png";
    await save(t.largeIcon, path.join(ranksDir, file));
    ranks[pretty] = { file, color: "#" + String(t.color).slice(0, 6), tier: t.tier };
  }
  const borders = await (await fetch("https://valorant-api.com/v1/levelborders")).json();
  const levels = [];
  for (const b of borders.data) {
    const n = b.startingLevel;
    if (b.smallPlayerCardAppearance) await save(b.smallPlayerCardAppearance, path.join(levelsDir, "border-" + n + ".png"));
    if (b.levelNumberAppearance) await save(b.levelNumberAppearance, path.join(levelsDir, "number-" + n + ".png"));
    levels.push({ startingLevel: n, displayName: b.displayName, border: "levels/border-" + n + ".png" });
  }
  fs.writeFileSync(
    path.join(ROOT, "public", "assets-index.json"),
    JSON.stringify({ episode: last.assetObjectName, uuid: last.uuid, ranks, levels }, null, 2)
  );
  console.log("terminé", Object.keys(ranks).length, "rangs,", levels.length, "bordures");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
