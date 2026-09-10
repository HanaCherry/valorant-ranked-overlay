# Valorant Ranked Overlay · GalaxyBunny Studio

Lokal na overlay para sa OBS at Streamlabs — rank, RR, agent, squad, at level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=tl)

## Isang ranked studio para sa Valorant

Lokal na dashboard, limang transparent na OBS overlay, galaxy themes, opsyonal na public Riot ID tracking, at opsyonal na Henrik API para sa squad.

## Mga feature

- **Rank at RR** — Iron 1 → Radiant, manual o mula sa public profile (Riot ID Pangalan#Tag).
- **Limang OBS overlay** — ranked, compact, agent, squad, level — transparent background.
- **Live session** — Kills at counters mula sa panel.
- **Agent at squad** — Agent overlay; ranks at stats ng 5 teammates.
- **Rank effects** — Adaptive glow (maaaring i-off).
- **Private by design** — Nakikinig lang ang server sa 127.0.0.1.
- **Opsyonal na Henrik** — Key lang sa data/credentials.json.

## Simulan sa 4 na hakbang

Node.js 18 or newer. On Windows, LANCER.bat is enough after install.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Open http://127.0.0.1:8769/control.html. Manual mode works immediately.

## OBS / Streamlabs

1. Start the app and leave it running while you stream.
2. Copy the overlay URL from the panel.
3. Add a Browser source.
4. Paste the URL. Transparent background by default.

Sizes: ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260.

## Lokal na data

Nasa data/ ang settings. Huwag i-publish ang data/ o credentials.

---

Ang VALORANT at rank assets ay pag-aari ng Riot Games. Independent, hindi opisyal na proyekto. MIT license.
