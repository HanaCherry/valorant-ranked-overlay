@echo off
title Valorant Ranked Overlay
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js est requis. Installe-le depuis https://nodejs.org
  pause
  exit /b 1
)

node -e "require('playwright-core')" >nul 2>&1
if errorlevel 1 call npm install --omit=dev

echo.
echo  Demarrage Valorant Ranked Overlay...
echo  Controle    : http://localhost:8769/control.html
echo  Ranked      : http://127.0.0.1:8769/overlay.html
echo  Compact     : http://127.0.0.1:8769/overlay-compact.html
echo  Agent       : http://127.0.0.1:8769/overlay-agent.html
echo  Squad       : http://127.0.0.1:8769/overlay-squad.html
echo  Niveau      : http://127.0.0.1:8769/overlay-level.html
echo.

start "" "http://localhost:8769/control.html"
node server.js
pause
