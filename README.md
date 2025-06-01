# Love U Festival App

Deze applicatie is gebouwd met [Vue 3](https://vuejs.org/) en [Vite](https://vitejs.dev/). De opdracht was om een Progressive Web App (PWA) te maken voor het Love U Festival voor een fictieve schoolopdracht.

## Installatie

```steps
1. **Vereisten:**
   - [Node.js](https://nodejs.org/) (aanbevolen versie 18+)
   - [npm](https://www.npmjs.com/) of [bun](https://bun.sh/)

2. Project installeren:
Npm install

3. Ontwikkelserver starten:
Npm run dev

4. **Productie build maken:**
Npm run build
```

## Architectuur:

```arch
-[src/]
App.vue: Basis van app
main.js: Alle imports
components/: Header.vue, Navbar.vue en InstallPrompt.vue
views/: Alle pagina's
router: Router (hrefs voor vue)
locales: Vertalingen NL/ENG
assets/: Alle afbeeldingen

-[public/]
Assets zoals icons/fonts

-[Vite]
Gebruikt voor snelle online server en build-processen

-[PWA]
Geconfigureerd via vite.config.js met de vite-plugin-pwa voor
offline ondersteuning en installatie op mobiel.
```

## Keuze's

Vue 3: Modern en makkelijk te gebruiken
Tailwind: Snelle styling en goede functies
I18n: Meertalig en goed bij vue
Vite: snel te gebruiken, goede ondersteuning.
VitePWA plugin: Goede instructies online, snel.
Leaflet: Handig voor interactieve kaarten.
