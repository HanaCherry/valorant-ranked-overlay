const test = require("node:test");
const assert = require("node:assert/strict");
const { parseRiotId, mapMmr } = require("../tracker-live");
const { spawn } = require("node:child_process");
const path = require("node:path");
const os = require("node:os");
const fs = require("node:fs");
const http = require("node:http");

test("parseRiotId", () => {
  assert.deepEqual(parseRiotId("Player#TAG"), { name: "Player", tag: "TAG" });
  assert.equal(parseRiotId("solo").tag, "");
});

test("mapMmr", () => {
  const m = mapMmr({ data: { current_data: { currenttierpatched: "Gold 2", ranking_in_tier: 45 } } });
  assert.equal(m.rank, "Gold 2");
  assert.equal(m.rr, 45);
});

test("server serves overlays", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "val-ov-"));
  const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "config.json"), "utf8"));
  cfg.port = 18769;
  fs.writeFileSync(path.join(dir, "config.json"), JSON.stringify(cfg));
  const child = spawn(process.execPath, [path.join(__dirname, "..", "server.js")], {
    env: { ...process.env, RANKED_DATA_DIR: dir },
    cwd: path.join(__dirname, ".."),
  });
  await new Promise((r) => setTimeout(r, 600));
  const get = (p) =>
    new Promise((resolve, reject) => {
      http.get({ hostname: "127.0.0.1", port: 18769, path: p }, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString("utf8") }));
      }).on("error", reject);
    });
  try {
    const a = await get("/overlay.html");
    const b = await get("/overlay-compact.html");
    const c = await get("/overlay-agent.html");
    const d = await get("/overlay-squad.html");
    const e = await get("/overlay-level.html");
    const png = await get("/ranks/gold2.png");
    const s = await get("/api/state");
    assert.equal(a.status, 200);
    assert.equal(b.status, 200);
    assert.equal(c.status, 200);
    assert.equal(d.status, 200);
    assert.equal(e.status, 200);
    assert.equal(png.status, 200);
    const j = JSON.parse(s.body);
    assert.ok(j.squad.length === 5);
    assert.ok(j.rank);
  } finally {
    child.kill();
  }
});
