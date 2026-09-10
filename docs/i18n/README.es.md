# Valorant Ranked Overlay · GalaxyBunny Studio

Overlay local para OBS y Streamlabs: rango, RR, agente, squad y nivel. Misma familia que Fortnite y Apex.

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=es)

## Un estudio ranked para Valorant

Panel local, cinco overlays OBS transparentes, temas galaxy, seguimiento opcional de Riot ID público y API Henrik opcional para la squad.

## Funciones

- **Rango y RR** — Iron 1 → Radiant, manual o desde un perfil público (Riot ID Nombre#Etiqueta).
- **Cinco overlays OBS** — Ranked, compacto, agente, squad, nivel — fondo transparente.
- **Sesión en vivo** — Kills y contadores desde el panel.
- **Agente y squad** — Overlay del agente; rangos y stats de 5 compañeros.
- **Efectos de rango** — Brillos adaptativos (desactivables); respeta reduced-motion.
- **Privado por diseño** — El servidor solo escucha en 127.0.0.1.
- **Henrik opcional** — Clave API solo en data/credentials.json (ignorado por Git).

## Inicio en 4 pasos

Node.js 18 o superior. En Windows, LANCER.bat basta tras la instalación.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Abre http://127.0.0.1:8769/control.html. El modo manual funciona de inmediato.

## OBS / Streamlabs

1. Inicia la app y déjala abierta durante el stream.
2. Copia la URL del overlay desde el panel.
3. Añade una fuente Navegador.
4. Pega la URL. Fondo transparente por defecto.

Tamaños: ranked 700×220 · compacto 420×140 · agente 760×210 · squad 440×260 · nivel 250×260.

## Datos locales

Los ajustes quedan en data/. No publiques data/ ni credenciales.

---

VALORANT y los assets de rango pertenecen a Riot Games. Proyecto independiente, no oficial. Licencia MIT.
