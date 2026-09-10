# Valorant Ranked Overlay · GalaxyBunny Studio

OBS / Streamlabs용 로컬 오버레이 — 랭크, RR, 요원, 스쿼드, 레벨. Fortnite·Apex와 같은 계열.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=ko)

## Valorant용 랭크드 스튜디오

로컬 대시보드, 투명 OBS 오버레이 5종, 갤럭시 테마, 선택적 공개 Riot ID 추적, 스쿼드용 선택 Henrik API.

## 기능

- **랭크 & RR** — Iron 1 → Radiant, 수동 또는 공개 프로필(Riot ID 이름#태그).
- **OBS 오버레이 5종** — ranked, compact, agent, squad, level — 투명 배경.
- **라이브 세션** — 패널에서 킬과 카운터.
- **요원 & 스쿼드** — 선택 요원 오버레이; 팀원 5명의 랭크·스탯.
- **랭크 효과** — 랭크 연동 글로우(끄기 가능).
- **설계상 비공개** — 서버는 127.0.0.1만 수신.
- **선택 Henrik** — 키는 data/credentials.json만(Git 무시).

## 4단계로 시작

Node.js 18+. Windows에서는 설치 후 LANCER.bat로 실행.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

http://127.0.0.1:8769/control.html 열기. 수동 모드는 바로 작동합니다.

## OBS / Streamlabs

1. 앱을 시작하고 방송 중 열어 둡니다.
2. 패널에서 오버레이 URL을 복사합니다.
3. 브라우저 소스를 추가합니다.
4. URL을 붙여넣습니다. 기본 배경은 투명합니다.

크기: ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260.

## 로컬 데이터

설정은 data/에 저장됩니다. data/나 자격 증명을 공개하지 마세요.

---

VALORANT와 랭크 자산은 Riot Games 소유입니다. 비공식 독립 프로젝트. MIT 라이선스.
