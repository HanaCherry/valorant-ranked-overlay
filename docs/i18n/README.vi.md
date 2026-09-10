# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay cục bộ cho OBS và Streamlabs — rank, RR, agent, squad và level.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=vi)

## Studio ranked cho Valorant

Bảng điều khiển cục bộ, năm overlay OBS trong suốt, chủ đề galaxy, theo dõi Riot ID công khai tùy chọn và API Henrik tùy chọn cho squad.

## Tính năng

- **Rank & RR** — Iron 1 → Radiant, thủ công hoặc từ hồ sơ công khai (Riot ID Tên#Tag).
- **Năm overlay OBS** — ranked, compact, agent, squad, level — nền trong suốt.
- **Phiên live** — Kill và bộ đếm từ panel.
- **Agent & squad** — Overlay agent; rank và stats của 5 đồng đội.
- **Hiệu ứng rank** — Ánh sáng thích ứng (có thể tắt).
- **Riêng tư by design** — Máy chủ chỉ lắng nghe 127.0.0.1.
- **Henrik tùy chọn** — Khóa chỉ trong data/credentials.json.

## Bắt đầu trong 4 bước

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

## Dữ liệu cục bộ

Cài đặt nằm trong data/. Đừng công khai data/ hoặc thông tin đăng nhập.

---

VALORANT và tài nguyên rank thuộc Riot Games. Dự án độc lập, không chính thức. Giấy phép MIT.
