# Angelikas Portfolio

En personlig portfolio byggd med React, TypeScript och Vite. Jag har ett retroinspirerat
gränssnitt med egna UI-komponenter och små pixelanimationer.

Kolla in live version här: [https://angelikasportfolio.netlify.app](https://angelikasportfolio.netlify.app)

## Teknik

- React 19
- TypeScript
- Vite
- React Router
- CSS Modules
- Storybook
- Vitest och Testing Library
- Playwright
- ESLint och Prettier

## Kom igång

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Bygg projektet:

```bash
npm run build
```

Förhandsgranska en produktionsbyggd version:

```bash
npm run preview
```

## Scripts

| Kommando                  | Beskrivning                      |
| ------------------------- | -------------------------------- |
| `npm run dev`             | Startar Vite i utvecklingsläge   |
| `npm run build`           | Typkontrollerar och bygger appen |
| `npm run preview`         | Serverar den byggda appen lokalt |
| `npm run lint`            | Kör ESLint                       |
| `npm run format`          | Formaterar filer med Prettier    |
| `npm run test`            | Kör enhetstester med Vitest      |
| `npm run test:e2e`        | Kör Playwright-tester            |
| `npm run storybook`       | Startar Storybook på port 6006   |
| `npm run build-storybook` | Bygger Storybook statiskt        |

## Projektstruktur

```text
src/
  app/
    data/              Projekt, kontaktlänkar och teknikstack
    layouts/           Sidlayout
    pages/             Sidor och sidnära komponenter
    providers/         Globala providers
  ui/
    animations/        Pixelanimationer
    components/        Återanvändbara UI-komponenter
    theme/             Tema, tokens och temakontext
  styles/              Globala stilar
  test/                Testsetup
  types/               Delade TypeScript-typer
e2e/                   Playwright-tester
public/                Statiska filer
```

## Testning

Kör enhetstester:

```bash
npm run test
```

Kör end-to-end-tester:

```bash
npm run test:e2e
```

## Storybook

Starta Storybook för att utveckla och granska komponenter isolerat:

```bash
npm run storybook
```

## Kontakt

- GitHub: [angelika-friis](https://github.com/angelika-friis)
- LinkedIn: [angelika-friis](https://www.linkedin.com/in/angelika-friis/)
- E-post: [angelikafriis@gmail.com](mailto:angelikafriis@gmail.com)
