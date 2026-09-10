# Valorant Ranked Overlay · GalaxyBunny Studio

Lokal overlay for OBS og Streamlabs — rank, RR, agent, squad og nivå.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=no)

## Et ranked-studio for Valorant

Lokalt panel, fem transparente OBS-overlays, galaxy-temaer, valgfri sporing av offentlig Riot ID og valgfri Henrik API for squad.

## Funksjoner

- **Rank og RR** — Iron 1 → Radiant, manuelt eller fra offentlig profil (Riot ID Navn#Tag).
- **Fem OBS-overlays** — ranked, compact, agent, squad, level — transparent bakgrunn.
- **Live-økt** — Kills og tellere fra panelet.
- **Agent og squad** — Agent-overlay; ranks og stats for 5 lagkamerater.
- **Rank-effekter** — Tilpasset glød (kan slås av).
- **Privat by design** — Serveren lytter bare på 127.0.0.1.
- **Valgfri Henrik** — Nøkkel kun i data/credentials.json.

## Start i 4 steg

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

Innstillinger ligger i data/. Ikke publiser data/ eller påloggingsinfo.

---

VALORANT og rank-assets tilhører Riot Games. Uavhengig, uoffisielt prosjekt. MIT-lisens.
