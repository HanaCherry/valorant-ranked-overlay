# Valorant Ranked Overlay · GalaxyBunny Studio

本機 OBS / Streamlabs 疊加層 — 段位、RR、特務、小隊與等級。與 Fortnite、Apex 同系列。

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=zh-TW)

## 面向 Valorant 的積分工作室

本機控制台、五個透明 OBS 疊加層、星系主題、可選公開 Riot ID 追蹤，以及可選 Henrik API（小隊）。

## 功能

- **段位與 RR** — Iron 1 → Radiant，手動或公開資料（Riot ID 名稱#標籤）。
- **五個 OBS 疊加層** — ranked、compact、agent、squad、level — 透明背景。
- **直播工作階段** — 在面板記錄擊殺與計數。
- **特務與小隊** — 目前特務疊加層；五名隊友的段位與數據。
- **段位特效** — 隨段位變化的光效（可關閉）。
- **預設私密** — 伺服器僅監聽 127.0.0.1。
- **可選 Henrik** — 金鑰僅存於 data/credentials.json（Git 忽略）。

## 四步開始

需要 Node.js 18+。Windows 安裝後可用 LANCER.bat。

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

開啟 http://127.0.0.1:8769/control.html。手動模式立即可用。

## OBS / Streamlabs

1. 啟動應用並在直播期間保持執行。
2. 從面板複製疊加層 URL。
3. 新增瀏覽器來源。
4. 貼上 URL。預設透明背景。

尺寸：ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260。

## 本機資料

設定保存在 data/。請勿發佈 data/ 或憑證。

---

VALORANT 及段位素材歸 Riot Games 所有。獨立非官方專案。MIT 授權。
