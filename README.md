<p align="center">
  <img src="public/brand/studio-logo.png" alt="GalaxyBunny Studio" width="120">
</p>

<h1 align="center">Valorant Ranked Overlay</h1>
<p align="center"><strong>GalaxyBunny Studio</strong> · valorant-ranked-overlay</p>

<p align="center">
  Overlay local pour <strong>OBS</strong> et <strong>Streamlabs</strong> — rang, RR, agent, squad et niveau.<br>
  Même famille que les overlays Fortnite et Apex : tableau de bord local + sources navigateur transparentes.
</p>

<p align="center">
  <a href="index.html"><img src="https://img.shields.io/badge/site-multilingue-8670ef?style=for-the-badge" alt="Site"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/licence-MIT-c9bcff?style=for-the-badge" alt="MIT"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge" alt="Node.js 18+"></a>
</p>

<p align="center">
  <a href="README.md">Français</a> ·
  <a href="README.en.md">English</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=es">Español</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=pt">Português</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=de">Deutsch</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=it">Italiano</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ja">日本語</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ko">한국어</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=zh">简体中文</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=zh-TW">繁體中文</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ar">العربية</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ru">Русский</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=hi">हिन्दी</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=tr">Türkçe</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=pl">Polski</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=nl">Nederlands</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=id">Bahasa Indonesia</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=vi">Tiếng Việt</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=th">ไทย</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=uk">Українська</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=sv">Svenska</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=cs">Čeština</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ro">Română</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=el">Ελληνικά</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=hu">Magyar</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=fi">Suomi</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=da">Dansk</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=no">Norsk</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=he">עברית</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ca">Català</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=ms">Bahasa Melayu</a> ·
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/?lang=tl">Filipino</a>
</p>

<p align="center">
  <a href="https://hanacherry.github.io/valorant-ranked-overlay/">Site de présentation</a>
</p>

<p align="center">
  <img src="docs/screenshots/control-galaxy.png" alt="GalaxyBunny Studio — tableau de bord Valorant" width="900">
</p>

## Un studio ranked pour Valorant

Ce dépôt propose un **studio d’overlay** pour streamers Valorant : tableau de bord local, cinq overlays OBS transparents, styles galactiques, suivi optionnel d’un Riot ID public et API Henrik facultative pour la squad.

## Aperçu

<p align="center">
  <img src="docs/screenshots/control-galaxy.png" alt="Tableau de bord GalaxyBunny Studio" width="900">
</p>

<p align="center">
  <img src="docs/screenshots/ranked-galaxy.png" alt="Overlay ranked Galaxy" width="420">
  &nbsp;
  <img src="docs/screenshots/level-galaxy-styled.png" alt="Badge de niveau Galaxy" width="220">
</p>

## Fonctions

- **Rang & RR** — Iron 1 → Radiant, à la main ou depuis un profil public (Riot ID `Nom#Tag`)
- **Cinq overlays OBS / Streamlabs** — ranked, compact, agent, squad, niveau — fond transparent
- **Session live** — kills et compteurs de session depuis le panneau
- **Agent & squad** — overlay agent sélectionné ; rangs et stats des 5 mates
- **Effets de rang** — lueurs adaptées au rang (désactivables) ; respect de la réduction d’animations
- **Privé par conception** — le serveur écoute uniquement `127.0.0.1` ; rien n’est envoyé vers un compte GalaxyBunny
- **Henrik optionnel** — clé API uniquement dans `data/credentials.json` (ignoré par Git)

## Démarrage

Installez [Node.js 18+](https://nodejs.org), puis :

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Ouvrez `http://127.0.0.1:8769/control.html`. Le mode manuel fonctionne tout de suite ; ajoutez un Riot ID pour le suivi optionnel.

Sous Windows, `LANCER.bat` démarre aussi le serveur. `LANCER-SILENCIEUX.vbs` le lance sans console, après installation des dépendances.

## OBS / Streamlabs

1. Démarrez l’application et laissez-la ouverte pendant le stream.
2. Copiez l’URL de l’overlay depuis le panneau.
3. Ajoutez une source **Navigateur**.
4. Collez l’URL. Le fond est transparent par défaut.

| Source | URL | Taille conseillée |
| --- | --- | --- |
| Overlay classé | `http://127.0.0.1:8769/overlay.html` | 700 × 220 |
| Compact | `http://127.0.0.1:8769/overlay-compact.html` | 420 × 140 |
| Agent | `http://127.0.0.1:8769/overlay-agent.html` | 760 × 210 |
| Squad | `http://127.0.0.1:8769/overlay-squad.html` | 440 × 260 |
| Niveau | `http://127.0.0.1:8769/overlay-level.html` | 250 × 260 |

## Suivi de profil

Saisissez un Riot ID public puis **Connecter mon profil** / **Tracker ce Riot ID**. Le lecteur ouvre Edge ou Chrome sans fenêtre, lit le tracker, puis ferme le navigateur. Intervalle typique : environ 8 minutes. Aucune clé API pour ce mode. Les lecteurs publics peuvent être bloqués (Cloudflare, profil privé, limites).

Le mode **API privée HenrikDev** est facultatif pour la squad. La clé reste dans `data/credentials.json`, jamais envoyée à OBS. Sans clé, le mode manuel (rang, RR, session) fonctionne.

## Données locales

Les réglages saisis restent locaux :

- `data/` — configuration, état de session, credentials optionnels

Le dossier `data/` est créé automatiquement et **entièrement ignoré par Git**. N’ajoutez pas `data/` avec `git add -f`.

```sh
npm test
```

## Mentions / Licence

Logo : GalaxyBunny Studio. VALORANT et ses assets de rang appartiennent à Riot Games et à leurs détenteurs respectifs. Ce projet est indépendant et n’est **pas** un produit officiel de Riot Games.

Licence **MIT**.
