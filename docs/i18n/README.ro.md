# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay local pentru OBS și Streamlabs — rank, RR, agent, squad și nivel.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ro)

## Un studio ranked pentru Valorant

Panou local, cinci overlay-uri OBS transparente, teme galaxy, urmărire opțională a Riot ID public și API Henrik opțional pentru squad.

## Funcții

- **Rank și RR** — Iron 1 → Radiant, manual sau din profil public (Riot ID Nume#Tag).
- **Cinci overlay-uri OBS** — ranked, compact, agent, squad, level — fundal transparent.
- **Sesiune live** — Kill-uri și contoare din panou.
- **Agent și squad** — Overlay agent; rank-uri și stats pentru 5 colegi.
- **Efecte de rank** — Strălucire adaptivă (dezactivabilă).
- **Privat by design** — Serverul ascultă doar pe 127.0.0.1.
- **Henrik opțional** — Cheia doar în data/credentials.json.

## Pornire în 4 pași

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

## Date locale

Setările sunt în data/. Nu publica data/ sau acreditările.

---

VALORANT și asset-urile de rank aparțin Riot Games. Proiect independent, neoficial. Licență MIT.
