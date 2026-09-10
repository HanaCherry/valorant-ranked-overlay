# Valorant Ranked Overlay · GalaxyBunny Studio

Helyi overlay OBS-hez és Streamlabs-hoz — rang, RR, ügynök, squad és szint.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=hu)

## Ranked stúdió Valoranthoz

Helyi panel, öt átlátszó OBS overlay, galaxy témák, opcionális nyilvános Riot ID követés és opcionális Henrik API a squadhoz.

## Funkciók

- **Rang és RR** — Iron 1 → Radiant, kézzel vagy nyilvános profilból (Riot ID Név#Címke).
- **Öt OBS overlay** — ranked, compact, agent, squad, level — átlátszó háttér.
- **Élő munkamenet** — Killek és számlálók a panelről.
- **Ügynök és squad** — Ügynök overlay; 5 csapattárs rangja és statjai.
- **Rang effektek** — Adaptív fény (kikapcsolható).
- **Alapból privát** — A szerver csak a 127.0.0.1-en figyel.
- **Opcionális Henrik** — Kulcs csak a data/credentials.json-ban.

## Indítás 4 lépésben

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

## Helyi adatok

A beállítások a data/ mappában vannak. Ne tedd közzé a data/-t vagy a hitelesítőket.

---

A VALORANT és a rang assetek a Riot Games tulajdonai. Független, nem hivatalos projekt. MIT licenc.
