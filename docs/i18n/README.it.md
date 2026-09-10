# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay locale per OBS e Streamlabs: rank, RR, agente, squad e livello. Stessa famiglia di Fortnite e Apex.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=it)

## Uno studio ranked per Valorant

Dashboard locale, cinque overlay OBS trasparenti, temi galaxy, tracking opzionale del Riot ID pubblico e API Henrik opzionale per la squad.

## Funzioni

- **Rank e RR** — Iron 1 → Radiant, manuale o da profilo pubblico (Riot ID Nome#Tag).
- **Cinque overlay OBS** — Ranked, compact, agente, squad, livello — sfondo trasparente.
- **Sessione live** — Kill e contatori dal pannello.
- **Agente e squad** — Overlay agente; rank e stats di 5 compagni.
- **Effetti di rank** — Bagliori adattivi (disattivabili).
- **Privato by design** — Il server ascolta solo su 127.0.0.1.
- **Henrik opzionale** — Chiave solo in data/credentials.json (ignorato da Git).

## Avvio in 4 passi

Node.js 18 o superiore. Su Windows, LANCER.bat basta dopo l’installazione.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Apri http://127.0.0.1:8769/control.html. La modalità manuale funziona subito.

## OBS / Streamlabs

1. Avvia l’app e lasciala aperta durante lo stream.
2. Copia l’URL dell’overlay dal pannello.
3. Aggiungi una sorgente Browser.
4. Incolla l’URL. Sfondo trasparente di default.

Dimensioni: ranked 700×220 · compact 420×140 · agente 760×210 · squad 440×260 · livello 250×260.

## Dati locali

Le impostazioni restano in data/. Non pubblicare data/ né credenziali.

---

VALORANT e gli asset di rank appartengono a Riot Games. Progetto indipendente, non ufficiale. Licenza MIT.
