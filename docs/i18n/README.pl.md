# Valorant Ranked Overlay · GalaxyBunny Studio

Lokalny overlay do OBS i Streamlabs — ranga, RR, agent, squad i poziom.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=pl)

## Studio ranked dla Valorant

Lokalny panel, pięć przezroczystych overlayów OBS, motywy galaxy, opcjonalne śledzenie publicznego Riot ID oraz opcjonalne API Henrik dla squada.

## Funkcje

- **Ranga i RR** — Iron 1 → Radiant, ręcznie lub z publicznego profilu (Riot ID Nazwa#Tag).
- **Pięć overlayów OBS** — ranked, compact, agent, squad, level — przezroczyste tło.
- **Sesja na żywo** — Kille i liczniki z panelu.
- **Agent i squad** — Overlay agenta; rangi i statystyki 5 sojuszników.
- **Efekty rangi** — Adaptacyjna poświata (wyłączalna).
- **Prywatne z założenia** — Serwer nasłuchuje tylko na 127.0.0.1.
- **Opcjonalny Henrik** — Klucz tylko w data/credentials.json.

## Start w 4 krokach

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

## Dane lokalne

Ustawienia są w data/. Nie publikuj data/ ani danych uwierzytelniających.

---

VALORANT i assety rang należą do Riot Games. Niezależny, nieoficjalny projekt. Licencja MIT.
