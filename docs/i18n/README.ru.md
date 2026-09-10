# Valorant Ranked Overlay · GalaxyBunny Studio

Локальный оверлей для OBS и Streamlabs — ранг, RR, агент, сквад и уровень. То же семейство, что Fortnite и Apex.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ru)

## Ранкед-студия для Valorant

Локальная панель, пять прозрачных OBS-оверлеев, galaxy-темы, опциональный трекинг публичного Riot ID и опциональный Henrik API для сквада.

## Функции

- **Ранг и RR** — Iron 1 → Radiant, вручную или с публичного профиля (Riot ID Имя#Тег).
- **Пять OBS-оверлеев** — ranked, compact, agent, squad, level — прозрачный фон.
- **Живая сессия** — Киллы и счётчики в панели.
- **Агент и сквад** — Оверлей агента; ранги и статы 5 тиммейтов.
- **Эффекты ранга** — Адаптивное свечение (можно отключить).
- **Приватно по задумке** — Сервер слушает только 127.0.0.1.
- **Опциональный Henrik** — Ключ только в data/credentials.json.

## Старт за 4 шага

Node.js 18+. В Windows после установки достаточно LANCER.bat.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Откройте http://127.0.0.1:8769/control.html. Ручной режим работает сразу.

## OBS / Streamlabs

1. Запустите приложение и держите его открытым во время стрима.
2. Скопируйте URL оверлея из панели.
3. Добавьте источник Браузер.
4. Вставьте URL. Фон прозрачен по умолчанию.

Размеры: ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260.

## Локальные данные

Настройки хранятся в data/. Не публикуйте data/ и учётные данные.

---

VALORANT и ассеты рангов принадлежат Riot Games. Независимый неофициальный проект. Лицензия MIT.
