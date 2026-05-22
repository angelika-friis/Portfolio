import type { Project } from '../../types/project';

export const projects: Record<string, Project> = {
  posApp: {
    id: 'posApps',
    title: 'POS app',
    fileName: 'pos-app.exe',
    description:
      'I worked in a team to develop a POS application. I implemented the integration layer and worked on application logic and databases.',
    technologies: ['Kotlin', 'Android native', 'SDK-integration'],
    links: [
      {
        label: 'View showcase / doc site',
        href: 'https://docs-pos-app.netlify.app/',
        variant: 'accent',
      },
      {
        label: 'Demo source code',
        href: 'https://github.com/angelika-friis/pos-integration-demo',
        variant: 'primary',
      },
    ],
  },
  weather: {
    id: 'weather',
    title: 'Weather prognosis',
    fileName: 'weather-prognosis.exe',
    description:
      'Search for weather prognosis with sunrise and sunset for a location or current location. Favorited locations are stored locally in a cookie.',
    technologies: ['React', 'Cookies', 'Geolocation', 'CSS'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/angelika-friis/weather-prognosis',
        variant: 'primary',
      },
    ],
  },
  webbShop: {
    id: 'webbShop',
    title: 'Webshop Top Style',
    fileName: 'top-style.exe',
    description:
      'A full-stack webshop. Frontend and backend communicate by REST API. User login. Authentication with JWT.',
    technologies: [
      'JavaScript',
      'React',
      'Express',
      'Node',
      'Context-api',
      'MongoDB',
      'JWT',
      'CSS',
    ],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/angelika-friis/webbshop-top-style',
        variant: 'primary',
      },
    ],
  },
  chatify: {
    id: 'chatify',
    title: 'Chatify',
    fileName: 'chatify.exe',
    description:
      'A website where users can chat. Security measures include protected routing, JWT authentication, CSP and input sanitization. While the site was running, I used Sentry to log and monitor it.',
    technologies: ['React', 'Sentry', 'JWT', 'Content Security Policy'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/angelika-friis/chatify',
        variant: 'primary',
      },
    ],
  },
  gomuku: {
    id: 'gomuku',
    title: 'Gomuku - a five in a row game',
    fileName: 'gomuku.exe',
    description:
      'A five-in-a-row game. A collaborative project with a separate frontend, component library and backend. Users log in and play against each other. A WebSocket gets the latest move. Storybook was used for the component library to preview components.',
    technologies: ['React', 'WebSocket', 'Storybook', 'CSS'],
    links: [
      {
        label: 'Source Code',
        href: 'https://github.com/angelika-friis/FWK24S-PLU-fem-i-rad-frontend',
        variant: 'primary',
      },
    ],
  },
};
