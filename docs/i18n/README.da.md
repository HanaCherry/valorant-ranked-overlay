# Valorant Ranked Overlay · GalaxyBunny Studio

Lokal overlay til OBS og Streamlabs — rank, RR, agent, squad og level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=da)

## Et ranked-studie til Valorant

Lokalt panel, fem gennemsigtige OBS-overlays, galaxy-temaer, valgfri sporing af offentligt Riot ID og valgfri Henrik API til squad.

## Funktioner

- **Rank & RR** — Iron 1 → Radiant, manuelt eller fra offentlig profil (Riot ID Navn#Tag).
- **Fem OBS-overlays** — ranked, compact, agent, squad, level — gennemsigtig baggrund.
- **Live-session** — Kills og tællere fra panelet.
- **Agent & squad** — Agent-overlay; ranks og stats for 5 holdkammerater.
- **Rank-effekter** — Tilpasselig glød (kan slås fra).
- **Privat by design** — Serveren lytter kun på 127.0.0.1.
- **Valgfri Henrik** — Nøgle kun i data/credentials.json.

## Start i 4 trin

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

Indstillinger ligger i data/. Offentliggør ikke data/ eller legitimationsoplysninger.

---

VALORANT og rank-assets tilhører Riot Games. Uafhængigt, uofficielt projekt. MIT-licens.
