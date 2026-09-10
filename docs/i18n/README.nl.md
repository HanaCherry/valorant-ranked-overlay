# Valorant Ranked Overlay · GalaxyBunny Studio

Lokale overlay voor OBS en Streamlabs — rank, RR, agent, squad en level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=nl)

## Een ranked-studio voor Valorant

Lokaal dashboard, vijf transparante OBS-overlays, galaxy-thema’s, optionele tracking van een openbaar Riot ID en optionele Henrik API voor de squad.

## Functies

- **Rank & RR** — Iron 1 → Radiant, handmatig of via een openbaar profiel (Riot ID Naam#Tag).
- **Vijf OBS-overlays** — ranked, compact, agent, squad, level — transparante achtergrond.
- **Live-sessie** — Kills en tellers via het paneel.
- **Agent & squad** — Agent-overlay; ranks en stats van 5 teammates.
- **Rank-effecten** — Adaptieve gloed (uit te schakelen).
- **Privé by design** — Server luistert alleen op 127.0.0.1.
- **Optionele Henrik** — Sleutel alleen in data/credentials.json.

## Start in 4 stappen

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

## Lokale data

Instellingen staan in data/. Publiceer data/ of credentials niet.

---

VALORANT en rank-assets zijn van Riot Games. Onafhankelijk, niet-officieel project. MIT-licentie.
