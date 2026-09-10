# Valorant Ranked Overlay · GalaxyBunny Studio

Paikallinen overlay OBS:lle ja Streamlabsille — rank, RR, agentti, squad ja taso.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=fi)

## Ranked-studio Valorantille

Paikallinen hallintapaneeli, viisi läpinäkyvää OBS-overlayta, galaxy-teemat, valinnainen julkisen Riot ID:n seuranta ja valinnainen Henrik API squadille.

## Ominaisuudet

- **Rank & RR** — Iron 1 → Radiant, manuaalisesti tai julkisesta profiilista (Riot ID Nimi#Tag).
- **Viisi OBS-overlayta** — ranked, compact, agent, squad, level — läpinäkyvä tausta.
- **Live-sessio** — Killit ja laskurit paneelista.
- **Agentti & squad** — Agentti-overlay; 5 tiimiläisen rankit ja statistiikat.
- **Rank-efektit** — Mukautuva hehku (poistettavissa).
- **Yksityinen by design** — Palvelin kuuntelee vain 127.0.0.1.
- **Valinnainen Henrik** — Avain vain tiedostossa data/credentials.json.

## Aloitus 4 vaiheessa

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

## Paikalliset tiedot

Asetukset ovat kansiossa data/. Älä julkaise data/-kansiota tai tunnuksia.

---

VALORANT ja rank-assetit kuuluvat Riot Gamesille. Itsenäinen, epävirallinen projekti. MIT-lisenssi.
