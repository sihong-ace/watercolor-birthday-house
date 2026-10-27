@echo off
title Birthday House
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-offline.ps1"
if errorlevel 1 pause
