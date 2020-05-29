# Electron-Project-I
Project 1: Cross Platform Desktop Apps using HTML, JavaScript &amp; CSS

## Builder:
-> npm install -g electron-builder

-> create build folder and add images icon

-> modify package.json

-> run: electron-builder mwl (m=mac, w=windows, l=linux)

## Sign:
-> electron-builder create-self-signed-cert "Create self-signed code signing cert for Windows apps"

-> electron-builder -w (default target: NSIS)

-> electron-builder build

## Update:
-> electron-builder -w -p 'onTagOrDraft'

## AutoUpdater
-> npm i electron-update

-> npm i electron-log

-> https://github.com/megahertz/electron-log

->  echo '' > 'C:\Users\DiegoJavier\AppData\Roaming\Readit\logs\main.log'
