# Valorant Ranked Overlay · GalaxyBunny Studio

OBS ve Streamlabs için yerel overlay — rütbe, RR, ajan, squad ve seviye.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=tr)

## Valorant için ranked stüdyo

Yerel pano, beş şeffaf OBS overlay, galaxy temalar, isteğe bağlı herkese açık Riot ID takibi ve squad için isteğe bağlı Henrik API.

## Özellikler

- **Rütbe ve RR** — Iron 1 → Radiant, elle veya herkese açık profil (Riot ID Ad#Etiket).
- **Beş OBS overlay** — ranked, compact, agent, squad, level — şeffaf arka plan.
- **Canlı oturum** — Panelden kill ve sayaçlar.
- **Ajan ve squad** — Seçili ajan overlay; 5 takım arkadaşının rütbe ve istatistikleri.
- **Rütbe efektleri** — Uyarlanabilir ışıltı (kapatılabilir).
- **Tasarım gereği özel** — Sunucu yalnızca 127.0.0.1 dinler.
- **İsteğe bağlı Henrik** — Anahtar yalnızca data/credentials.json.

## 4 adımda başlayın

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

## Yerel veriler

Ayarlar data/ içinde kalır. data/ veya kimlik bilgilerini yayımlamayın.

---

VALORANT ve rütbe varlıkları Riot Games’e aittir. Bağımsız, resmi olmayan proje. MIT lisansı.
