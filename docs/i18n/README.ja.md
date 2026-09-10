# Valorant Ranked Overlay · GalaxyBunny Studio

OBS / Streamlabs 向けローカルオーバーレイ — ランク、RR、エージェント、スクワッド、レベル。Fortnite / Apex と同系統。

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ja)

## Valorant 向けランクドスタジオ

ローカルダッシュボード、透明な OBS オーバーレイ5種、ギャラクシーテーマ、任意の公開 Riot ID 追跡、スクワッド用オプション Henrik API。

## 機能

- **ランク & RR** — Iron 1 → Radiant。手動または公開プロフィール（Riot ID 名前#タグ）。
- **OBS オーバーレイ5種** — ranked / compact / agent / squad / level — 透明背景。
- **ライブセッション** — パネルからキルとカウンター。
- **エージェント & スクワッド** — 選択エージェント表示；5人のランクとスタッツ。
- **ランクエフェクト** — ランク連動の光（オフ可）。
- **設計上プライベート** — サーバーは 127.0.0.1 のみ。
- **Henrik 任意** — キーは data/credentials.json のみ（Git 無視）。

## 4ステップで開始

Node.js 18+。Windows ではインストール後 LANCER.bat で起動可。

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8769/control.html を開く。手動モードはすぐに使えます。

## OBS / Streamlabs

1. アプリを起動し、配信中は開いたままにする。
2. パネルからオーバーレイ URL をコピー。
3. ブラウザソースを追加。
4. URL を貼り付け。背景はデフォルトで透明。

サイズ: ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260。

## ローカルデータ

設定は data/ に保存。data/ や認証情報を公開しないでください。

---

VALORANT およびランク資産は Riot Games の所有です。非公式の独立プロジェクト。MIT ライセンス。
