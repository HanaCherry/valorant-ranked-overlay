# Valorant Ranked Overlay · GalaxyBunny Studio

Lokální overlay pro OBS a Streamlabs — rank, RR, agent, squad a level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=cs)

## Ranked studio pro Valorant

Lokální panel, pět průhledných OBS overlayů, galaxy témata, volitelné sledování veřejného Riot ID a volitelné Henrik API pro squad.

## Funkce

- **Rank a RR** — Iron 1 → Radiant, ručně nebo z veřejného profilu (Riot ID Jméno#Tag).
- **Pět OBS overlayů** — ranked, compact, agent, squad, level — průhledné pozadí.
- **Živá relace** — Kily a počítadla z panelu.
- **Agent a squad** — Overlay agenta; ranky a statistiky 5 spoluhráčů.
- **Efekty ranku** — Adaptivní záře (vypnutelná).
- **Soukromé by design** — Server naslouchá jen na 127.0.0.1.
- **Volitelný Henrik** — Klíč jen v data/credentials.json.

## Start ve 4 krocích

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

## Lokální data

Nastavení jsou v data/. Nezveřejňujte data/ ani přihlašovací údaje.

---

VALORANT a assety ranků patří Riot Games. Nezávislý, neoficiální projekt. Licence MIT.
