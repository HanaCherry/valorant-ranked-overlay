# Valorant Ranked Overlay · GalaxyBunny Studio

שכבת על מקומית ל-OBS ול-Streamlabs — דרגה, RR, סוכן, סקווד ורמה.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=he)

## סטודיו ראנקד ל-Valorant

לוח בקרה מקומי, חמש שכבות OBS שקופות, ערכות galaxy, מעקב אופציונלי אחר Riot ID ציבורי ו-API Henrik אופציונלי לסקווד.

## תכונות

- **דרגה ו-RR** — Iron 1 → Radiant, ידני או מפרופיל ציבורי (Riot ID שם#תג).
- **חמש שכבות OBS** — ranked, compact, agent, squad, level — רקע שקוף.
- **סשן חי** — קילים ומונים מהלוח.
- **סוכן וסקווד** — שכבת סוכן; דרגות וסטטים של 5 חברים.
- **אפקטי דרגה** — זוהר מותאם (ניתן לכיבוי).
- **פרטי לפי עיצוב** — השרת מאזין רק ב-127.0.0.1.
- **Henrik אופציונלי** — מפתח רק ב-data/credentials.json.

## התחלה ב-4 שלבים

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

## נתונים מקומיים

ההגדרות נמצאות ב-data/. אל תפרסמו את data/ או אישורים.

---

VALORANT ונכסי הדרגות שייכים ל-Riot Games. פרויקט עצמאי, לא רשמי. רישיון MIT.
