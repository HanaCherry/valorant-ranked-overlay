# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay tempatan untuk OBS dan Streamlabs — rank, RR, ejen, squad dan level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ms)

## Studio ranked untuk Valorant

Papan pemuka tempatan, lima overlay OBS lutsinar, tema galaxy, penjejakan Riot ID awam pilihan, dan API Henrik pilihan untuk squad.

## Ciri

- **Rank & RR** — Iron 1 → Radiant, manual atau dari profil awam (Riot ID Nama#Tag).
- **Lima overlay OBS** — ranked, compact, agent, squad, level — latar lutsinar.
- **Sesi langsung** — Kill dan kaunter dari panel.
- **Ejen & squad** — Overlay ejen; rank dan stats 5 rakan sepasukan.
- **Kesan rank** — Cahaya adaptif (boleh dimatikan).
- **Peribadi by design** — Pelayan hanya mendengar 127.0.0.1.
- **Henrik pilihan** — Kunci hanya dalam data/credentials.json.

## Mula dalam 4 langkah

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

## Data tempatan

Tetapan berada dalam data/. Jangan terbitkan data/ atau kelayakan.

---

VALORANT dan aset rank milik Riot Games. Projek bebas, tidak rasmi. Lesen MIT.
