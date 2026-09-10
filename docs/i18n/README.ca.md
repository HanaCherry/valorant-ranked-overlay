# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay local per a OBS i Streamlabs — rang, RR, agent, squad i nivell.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ca)

## Un estudi ranked per a Valorant

Tauler local, cinc overlays OBS transparents, temes galaxy, seguiment opcional de Riot ID públic i API Henrik opcional per a la squad.

## Funcions

- **Rang i RR** — Iron 1 → Radiant, manual o des d’un perfil públic (Riot ID Nom#Etiqueta).
- **Cinc overlays OBS** — ranked, compact, agent, squad, level — fons transparent.
- **Sessió en directe** — Kills i comptadors des del panell.
- **Agent i squad** — Overlay d’agent; rangs i stats de 5 companys.
- **Efectes de rang** — Brillantor adaptativa (desactivable).
- **Privat per disseny** — El servidor només escolta a 127.0.0.1.
- **Henrik opcional** — Clau només a data/credentials.json.

## Inici en 4 passos

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

## Dades locals

La configuració és a data/. No publiquis data/ ni credencials.

---

VALORANT i els assets de rang pertanyen a Riot Games. Projecte independent, no oficial. Llicència MIT.
