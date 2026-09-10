# Valorant Ranked Overlay · GalaxyBunny Studio

本地 OBS / Streamlabs 叠加层 — 段位、RR、特工、小队与等级。与 Fortnite、Apex 同系列。

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=zh)

## 面向 Valorant 的排位工作室

本地控制台、五个透明 OBS 叠加层、星系主题、可选公开 Riot ID 追踪，以及可选 Henrik API（小队）。

## 功能

- **段位与 RR** — Iron 1 → Radiant，手动或公开资料（Riot ID 名称#标签）。
- **五个 OBS 叠加层** — ranked、compact、agent、squad、level — 透明背景。
- **直播会话** — 在面板中记录击杀与计数。
- **特工与小队** — 当前特工叠加层；五名队友的段位与数据。
- **段位特效** — 随段位变化的光效（可关闭）。
- **默认私密** — 服务器仅监听 127.0.0.1。
- **可选 Henrik** — 密钥仅存于 data/credentials.json（Git 忽略）。

## 四步开始

需要 Node.js 18+。Windows 安装后可用 LANCER.bat。

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

打开 http://127.0.0.1:8769/control.html。手动模式立即可用。

## OBS / Streamlabs

1. 启动应用并在直播期间保持运行。
2. 从面板复制叠加层 URL。
3. 添加浏览器源。
4. 粘贴 URL。默认透明背景。

尺寸：ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260。

## 本地数据

设置保存在 data/。请勿发布 data/ 或凭据。

---

VALORANT 及段位素材归 Riot Games 所有。独立非官方项目。MIT 许可。
