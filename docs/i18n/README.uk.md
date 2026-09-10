# Valorant Ranked Overlay · GalaxyBunny Studio

Локальний оверлей для OBS і Streamlabs — ранг, RR, агент, сквад і рівень.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=uk)

## Ранкед-студія для Valorant

Локальна панель, п’ять прозорих OBS-оверлеїв, galaxy-теми, опційний трекінг публічного Riot ID та опційний Henrik API для скваду.

## Функції

- **Ранг і RR** — Iron 1 → Radiant, вручну або з публічного профілю (Riot ID Ім’я#Тег).
- **П’ять OBS-оверлеїв** — ranked, compact, agent, squad, level — прозорий фон.
- **Жива сесія** — Кіли та лічильники з панелі.
- **Агент і сквад** — Оверлей агента; ранги й стати 5 тіммейтів.
- **Ефекти рангу** — Адаптивне світіння (можна вимкнути).
- **Приватно задумом** — Сервер слухає лише 127.0.0.1.
- **Опційний Henrik** — Ключ лише в data/credentials.json.

## Старт за 4 кроки

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

## Локальні дані

Налаштування в data/. Не публікуйте data/ чи облікові дані.

---

VALORANT і ассети рангів належать Riot Games. Незалежний неофіційний проєкт. Ліцензія MIT.
