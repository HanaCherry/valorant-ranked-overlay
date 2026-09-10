/**
 * Étoiles Valorant — orbites autour du badge de rang.
 */
window.RankStars = (() => {
  const PRESETS = {
    Iron: { color: "#6b6b6b", density: 14, speed: 0.5, size: 1.05, rings: 1 },
    Bronze: { color: "#c47a4a", density: 18, speed: 0.65, size: 1.2, rings: 1 },
    Silver: { color: "#c5d0dc", density: 22, speed: 0.8, size: 1.25, rings: 2 },
    Gold: { color: "#ffd76a", density: 26, speed: 0.95, size: 1.35, rings: 2 },
    Platinum: { color: "#4fd2c8", density: 30, speed: 1.05, size: 1.4, rings: 2 },
    Diamond: { color: "#c797ff", density: 34, speed: 1.15, size: 1.5, rings: 2 },
    Ascendant: { color: "#84e07a", density: 38, speed: 1.25, size: 1.55, rings: 3 },
    Immortal: { color: "#ff6862", density: 44, speed: 1.35, size: 1.65, rings: 3 },
    Radiant: { color: "#fff1a8", density: 52, speed: 1.5, size: 1.8, rings: 3 },
    Unranked: { color: "#9aa3b5", density: 12, speed: 0.45, size: 1.0, rings: 1 },
  };

  function create(canvas, division) {
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    let stars = [];
    let preset = PRESETS[division] || PRESETS.Unranked;
    let raf = 0;
    let burst = 0;
    let running = true;
    let t = 0;

    function spawn(n) {
      for (let i = 0; i < n; i++) {
        stars.push({
          ang: Math.random() * Math.PI * 2,
          dist: 30 + Math.random() * 38,
          base: 30 + Math.random() * 38,
          spin: (0.006 + Math.random() * 0.016) * (Math.random() < 0.5 ? 1 : -1) * preset.speed,
          size: (0.5 + Math.random() * 1.2) * preset.size,
          tw: Math.random() * Math.PI * 2,
          tws: 0.05 + Math.random() * 0.1,
          alpha: 0.4 + Math.random() * 0.6,
          kind: Math.random() < 0.35 ? "cross" : "dot",
        });
      }
    }

    function setDivision(div) {
      preset = PRESETS[div] || PRESETS.Unranked;
      stars = [];
      spawn(preset.density);
    }

    function killBurst() {
      burst = 1;
      spawn(12);
    }

    function rankUpBurst() {
      burst = 1.6;
      spawn(22);
    }

    function sparkle(x, y, size, color, a, kind) {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = Math.max(0, Math.min(1, a));
      ctx.strokeStyle = color;
      ctx.fillStyle = "#fff";
      ctx.shadowColor = color;
      ctx.shadowBlur = 10 * size;
      if (kind === "cross") {
        ctx.lineWidth = Math.max(0.8, size * 0.55);
        ctx.beginPath();
        ctx.moveTo(-size * 3.2, 0);
        ctx.lineTo(size * 3.2, 0);
        ctx.moveTo(0, -size * 3.2);
        ctx.lineTo(0, size * 3.2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.55, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function lightRibbon(offset, width, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = preset.color;
      ctx.shadowColor = preset.color;
      ctx.shadowBlur = 8;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(cx - 76, cy + offset + 12);
      ctx.bezierCurveTo(cx - 48, cy - 28 + offset, cx - 18, cy + 28 + offset, cx + 8, cy + offset);
      ctx.bezierCurveTo(cx + 38, cy - 30 + offset, cx + 54, cy + 24 + offset, cx + 78, cy - 4 + offset);
      ctx.stroke();
      ctx.restore();
    }

    function frame() {
      if (!running) return;
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      // Fine luminous waves inspired by the reference artwork, tinted by rank.
      lightRibbon(Math.sin(t * 0.7) * 4, 1.5, 0.18);
      lightRibbon(Math.cos(t * 0.55) * 6 + 8, 0.8, 0.3);

      const rings = preset.rings || 1;
      for (let i = 0; i < rings; i++) {
        const r = 36 + i * 14 + Math.sin(t * 0.8 + i) * 2 + burst * 6;
        ctx.beginPath();
        ctx.strokeStyle = hexA(preset.color, 0.12 + burst * 0.12);
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 7]);
        ctx.lineDashOffset = t * (8 + i * 4);
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      for (const s of stars) {
        s.ang += s.spin * (1 + burst * 0.7);
        s.tw += s.tws;
        s.dist = s.base + Math.sin(s.tw) * 4 + burst * 10;
        const x = cx + Math.cos(s.ang) * s.dist;
        const y = cy + Math.sin(s.ang) * s.dist * 0.92;
        const a = s.alpha * (0.45 + 0.55 * Math.abs(Math.sin(s.tw))) * (0.75 + burst * 0.4);
        sparkle(x, y, s.size, preset.color, a, s.kind);
      }

      if (stars.length > preset.density + 24) stars = stars.slice(-preset.density - 10);
      burst *= 0.9;
      if (burst < 0.02) burst = 0;
      raf = requestAnimationFrame(frame);
    }

    setDivision(division || "Unranked");
    frame();
    return { setDivision, killBurst, rankUpBurst, destroy() { running = false; cancelAnimationFrame(raf); } };
  }

  function hexA(hex, a) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  return { create, PRESETS };
})();
