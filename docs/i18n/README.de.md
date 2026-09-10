# Valorant Ranked Overlay · GalaxyBunny Studio

Lokales Overlay für OBS und Streamlabs: Rang, RR, Agent, Squad und Level. Gleiche Familie wie Fortnite und Apex.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=de)

## Ein Ranked-Studio für Valorant

Lokales Dashboard, fünf transparente OBS-Overlays, Galaxy-Themes, optionales öffentliches Riot-ID-Tracking und optionale Henrik-API für die Squad.

## Funktionen

- **Rang & RR** — Iron 1 → Radiant, manuell oder über ein öffentliches Profil (Riot-ID Name#Tag).
- **Fünf OBS-Overlays** — Ranked, kompakt, Agent, Squad, Level — transparenter Hintergrund.
- **Live-Session** — Kills und Zähler im Panel.
- **Agent & Squad** — Agent-Overlay; Ränge und Stats von 5 Teamkollegen.
- **Rang-Effekte** — Rangadaptive Leuchteffekte (abschaltbar).
- **Privat by Design** — Server lauscht nur auf 127.0.0.1.
- **Optional Henrik** — API-Schlüssel nur in data/credentials.json (von Git ignoriert).

## In 4 Schritten startklar

Node.js 18 oder neuer. Unter Windows reicht LANCER.bat nach der Installation.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Öffne http://127.0.0.1:8769/control.html. Der manuelle Modus funktioniert sofort.

## OBS / Streamlabs

1. App starten und während des Streams geöffnet lassen.
2. Overlay-URL im Panel kopieren.
3. Browserquelle hinzufügen.
4. URL einfügen. Hintergrund standardmäßig transparent.

Größen: Ranked 700×220 · kompakt 420×140 · Agent 760×210 · Squad 440×260 · Level 250×260.

## Lokale Daten

Einstellungen liegen in data/. Veröffentliche weder data/ noch Zugangsdaten.

---

VALORANT und Rang-Assets gehören Riot Games. Unabhängiges, inoffizielles Projekt. MIT-Lizenz.
