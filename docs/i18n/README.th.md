# Valorant Ranked Overlay · GalaxyBunny Studio

โอเวอร์เลย์ในเครื่องสำหรับ OBS และ Streamlabs — แรงก์ RR เอเจนต์ สควอด และเลเวล

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=th)

## สตูดิโอแรงก์สำหรับ Valorant

แดชบอร์ดในเครื่อง โอเวอร์เลย์ OBS โปร่งใส 5 แบบ ธีมกาแล็กซี ติดตาม Riot ID สาธารณะแบบเลือกได้ และ Henrik API แบบเลือกได้สำหรับสควอด

## ฟีเจอร์

- **แรงก์และ RR** — Iron 1 → Radiant มือหรือจากโปรไฟล์สาธารณะ (Riot ID ชื่อ#แท็ก)
- **โอเวอร์เลย์ OBS 5 แบบ** — ranked compact agent squad level — พื้นหลังโปร่งใส
- **เซสชันสด** — คิลและตัวนับจากแผงควบคุม
- **เอเจนต์และสควอด** — โอเวอร์เลย์เอเจนต์ แรงก์และสถิติเพื่อน 5 คน
- **เอฟเฟกต์แรงก์** — เรืองแสงตามแรงก์ (ปิดได้)
- **ส่วนตัวโดยออกแบบ** — เซิร์ฟเวอร์ฟังแค่ 127.0.0.1
- **Henrik แบบเลือกได้** — คีย์อยู่แค่ใน data/credentials.json

## เริ่มใน 4 ขั้นตอน

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

## ข้อมูลในเครื่อง

การตั้งค่าอยู่ใน data/ อย่าเผยแพร่ data/ หรือข้อมูลรับรอง

---

VALORANT และสินทรัพย์แรงก์เป็นของ Riot Games โปรเจกต์อิสระ ไม่เป็นทางการ สัญญาอนุญาต MIT
