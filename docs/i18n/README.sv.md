# Valorant Ranked Overlay · GalaxyBunny Studio

Lokal overlay för OBS och Streamlabs — rank, RR, agent, squad och nivå.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=sv)

## En ranked-studio för Valorant

Lokal panel, fem transparenta OBS-overlays, galaxy-teman, valfri spårning av offentligt Riot ID och valfri Henrik API för squad.

## Funktioner

- **Rank & RR** — Iron 1 → Radiant, manuellt eller från offentlig profil (Riot ID Namn#Tag).
- **Fem OBS-overlays** — ranked, compact, agent, squad, level — transparent bakgrund.
- **Live-session** — Kills och räknare från panelen.
- **Agent & squad** — Agent-overlay; ranker och stats för 5 lagkamrater.
- **Rank-effekter** — Anpassningsbar lyster (avstängningsbar).
- **Privat by design** — Servern lyssnar bara på 127.0.0.1.
- **Valfri Henrik** — Nyckel endast i data/credentials.json.

## Starta i 4 steg

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

## Lokal data

Inställningar ligger i data/. Publicera inte data/ eller autentiseringsuppgifter.

---

VALORANT och rank-tillgångar tillhör Riot Games. Oberoende, inofficiellt projekt. MIT-licens.
