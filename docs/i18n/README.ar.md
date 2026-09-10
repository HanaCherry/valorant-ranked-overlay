# Valorant Ranked Overlay · GalaxyBunny Studio

تراكب محلي لـ OBS و Streamlabs — الرتبة و RR والوكيل والفريق والمستوى. نفس عائلة Fortnite و Apex.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ar)

## استوديو رانكد لفالورانت

لوحة تحكم محلية، خمسة تراكبات OBS شفافة، سمات مجرية، تتبع اختياري لمعرف Riot العام، وواجهة Henrik اختيارية للفريق.

## الميزات

- **الرتبة و RR** — Iron 1 → Radiant، يدوياً أو من ملف عام (Riot ID الاسم#الوسم).
- **خمسة تراكبات OBS** — ranked و compact و agent و squad و level — خلفية شفافة.
- **جلسة مباشرة** — عمليات القتل والعدادات من اللوحة.
- **الوكيل والفريق** — تراكب الوكيل؛ رتب وإحصاءات 5 زملاء.
- **تأثيرات الرتبة** — توهج متكيف (قابل للتعطيل).
- **خاص بالتصميم** — الخادم يستمع فقط على 127.0.0.1.
- **Henrik اختياري** — المفتاح فقط في data/credentials.json.

## البدء في 4 خطوات

Node.js 18+. على Windows يكفي LANCER.bat بعد التثبيت.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

افتح http://127.0.0.1:8769/control.html. الوضع اليدوي يعمل فوراً.

## OBS / Streamlabs

1. شغّل التطبيق واتركه مفتوحاً أثناء البث.
2. انسخ عنوان التراكب من اللوحة.
3. أضف مصدر متصفح.
4. الصق العنوان. الخلفية شفافة افتراضياً.

الأحجام: ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260.

## بيانات محلية

الإعدادات في data/. لا تنشر data/ أو بيانات الاعتماد.

---

VALORANT وأصول الرتب ملك Riot Games. مشروع مستقل غير رسمي. رخصة MIT.
