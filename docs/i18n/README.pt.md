# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay local para OBS e Streamlabs: rank, RR, agente, squad e nível. Mesma família do Fortnite e Apex.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=pt)

## Um estúdio ranked para Valorant

Painel local, cinco overlays OBS transparentes, temas galaxy, rastreamento opcional de Riot ID público e API Henrik opcional para a squad.

## Funções

- **Rank e RR** — Iron 1 → Radiant, manual ou de um perfil público (Riot ID Nome#Tag).
- **Cinco overlays OBS** — Ranked, compacto, agente, squad, nível — fundo transparente.
- **Sessão ao vivo** — Kills e contadores no painel.
- **Agente e squad** — Overlay do agente; ranks e stats de 5 mates.
- **Efeitos de rank** — Brilhos adaptativos (desativáveis).
- **Privado por concepção** — O servidor escuta apenas em 127.0.0.1.
- **Henrik opcional** — Chave só em data/credentials.json (ignorado pelo Git).

## Começar em 4 passos

Node.js 18 ou superior. No Windows, LANCER.bat basta após a instalação.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Abra http://127.0.0.1:8769/control.html. O modo manual funciona imediatamente.

## OBS / Streamlabs

1. Inicie o app e deixe-o aberto durante o stream.
2. Copie a URL do overlay no painel.
3. Adicione uma fonte Navegador.
4. Cole a URL. Fundo transparente por padrão.

Tamanhos: ranked 700×220 · compacto 420×140 · agente 760×210 · squad 440×260 · nível 250×260.

## Dados locais

As configurações ficam em data/. Não publique data/ nem credenciais.

---

VALORANT e os assets de rank pertencem à Riot Games. Projeto independente, não oficial. Licença MIT.
