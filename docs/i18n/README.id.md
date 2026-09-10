# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay lokal untuk OBS dan Streamlabs — rank, RR, agen, squad, dan level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=id)

## Studio ranked untuk Valorant

Dasbor lokal, lima overlay OBS transparan, tema galaxy, pelacakan Riot ID publik opsional, dan API Henrik opsional untuk squad.

## Fitur

- **Rank & RR** — Iron 1 → Radiant, manual atau dari profil publik (Riot ID Nama#Tag).
- **Lima overlay OBS** — ranked, compact, agent, squad, level — latar transparan.
- **Sesi langsung** — Kill dan penghitung dari panel.
- **Agen & squad** — Overlay agen; rank dan stats 5 rekan.
- **Efek rank** — Cahaya adaptif (bisa dimatikan).
- **Privat by design** — Server hanya mendengarkan 127.0.0.1.
- **Henrik opsional** — Kunci hanya di data/credentials.json.

## Mulai dalam 4 langkah

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

## Data lokal

Pengaturan ada di data/. Jangan publikasikan data/ atau kredensial.

---

VALORANT dan aset rank milik Riot Games. Proyek independen, tidak resmi. Lisensi MIT.
