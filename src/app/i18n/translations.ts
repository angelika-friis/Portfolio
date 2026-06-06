import type { Project } from '../../types/project';

export const supportedLanguages = ['en', 'sv'] as const;

export type Language = (typeof supportedLanguages)[number];

export function isSupportedLanguage(language?: string): language is Language {
  return supportedLanguages.includes(language as Language);
}

type HomePageTranslations = {
  intro: {
    hello: string;
    role: string;
    graduation: string;
    hiring: string;
  };
  about: {
    accessibility: string;
    education: string;
  };
  contact: {
    heading: string;
  };
  techStack: {
    primaryHeading: string;
    experienceHeading: string;
  };
  projects: {
    sectionLabel: string;
    technologiesLabel: string;
    projectListLabel: string;
  };
};

type Translations = Record<
  Language,
  {
    home: HomePageTranslations;
    projects: Record<string, Project>;
  }
>;

export const translations: Translations = {
  en: {
    home: {
      intro: {
        hello: "> Hi! I'm Angelika.",
        role: '> I develop websites and apps.',
        graduation: '> Graduating summer 2026.',
        hiring: '> So... Need a full-stack developer?',
      },
      about: {
        accessibility:
          '> I want to make websites and apps that are easy to use, secure and accessible for everyone.',
        education:
          '> I am graduating as a full-stack developer with a focus on web security in the MERN stack.',
      },
      contact: {
        heading: "Let's get in contact!",
      },
      techStack: {
        primaryHeading: '> What I use the most',
        experienceHeading: '> Experience in',
      },
      projects: {
        sectionLabel: 'Projects',
        technologiesLabel: 'Technologies used',
        projectListLabel: 'Project list',
      },
    },
    projects: {
      pixelPattern: {
        id: 'pixelPattern',
        title: 'pixle-pattern',
        fileName: 'pixel-pattern.exe',
        description:
          'Pixel Grid is a web-based tool for creating pixel patterns that can be used for projects such as crochet and cross-stitch. Images are processed directly in the browser, which means that no image data is sent to a server. This is a deliberate choice to avoid handling personal data at this stage. I started developing the project because I could not find a free tool that included all the features I needed for my own creative projects. Another purpose of the project was to learn more about developing with code agents.',
        technologies: ['TypeScript'],
        links: [
          {
            label: 'Show demo',
            href: 'https://pixelpattern.netlify.app/',
            variant: 'accent',
          },
          {
            label: 'Source Code',
            href: 'https://github.com/angelika-friis/pixel-pattern-maker',
            variant: 'primary',
          },
        ],
      },
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
    },
  },
  sv: {
    home: {
      intro: {
        hello: '> Hej! Jag heter Angelika.',
        role: '> Jag utvecklar webbplatser och appar.',
        graduation: '> Tar examen sommaren 2026.',
        hiring: '> Så... Behöver ni en fullstackutvecklare?',
      },
      about: {
        accessibility:
          '> Jag vill skapa webbplatser och appar som är enkla att använda, säkra och tillgängliga för alla.',
        education:
          '> Jag tar examen som fullstackutvecklare med fokus på webbsäkerhet i MERN-stacken.',
      },
      contact: {
        heading: 'Hör gärna av dig!',
      },
      techStack: {
        primaryHeading: '> Det jag använder mest',
        experienceHeading: '> Erfarenhet av',
      },
      projects: {
        sectionLabel: 'Projekt',
        technologiesLabel: 'Tekniker som används',
        projectListLabel: 'Projektlista',
      },
    },
    projects: {
      pixelPattern: {
        id: 'pixelPattern',
        title: 'pixle-pattern',
        fileName: 'pixel-pattern.exe',
        description:
          'Pixel Grid är ett webbaserat verktyg för att skapa pixelmönster som kan användas till exempelvis virkning och korsstygn. Verktyget hanterar bilder direkt i webbläsaren, vilket innebär att ingen bilddata skickas till en server. Detta är ett medvetet val för att i nuläget undvika hantering av personuppgifter. Jag började utveckla projektet eftersom jag saknade ett gratis verktyg med de funktioner jag själv behövde för mina egna kreativa projekt. Ett annat syfte med projektet var att lära mig mer om hur det är att utveckla med kod-agenter.',
        technologies: ['TypeScript'],
        links: [
          {
            label: 'Visa demo',
            href: 'https://pixelpattern.netlify.app/',
            variant: 'accent',
          },
          {
            label: 'Källkod',
            href: 'https://github.com/angelika-friis/pixel-pattern-maker',
            variant: 'primary',
          },
        ],
      },
      posApp: {
        id: 'posApps',
        title: 'POS-app',
        fileName: 'pos-app.exe',
        description:
          'Jag arbetade i ett team som utvecklade en POS-applikation. Jag implementerade integrationslagret och arbetade med applikationslogik och databaser.',
        technologies: ['Kotlin', 'Android native', 'SDK-integration'],
        links: [
          {
            label: 'Visa showcase / dokumentation',
            href: 'https://docs-pos-app.netlify.app/',
            variant: 'accent',
          },
          {
            label: 'Demo-källkod',
            href: 'https://github.com/angelika-friis/pos-integration-demo',
            variant: 'primary',
          },
        ],
      },
      webbShop: {
        id: 'webbShop',
        title: 'Webshop Top Style',
        fileName: 'top-style.exe',
        description:
          'En fullstack-webbshop. Frontend och backend kommunicerar via REST API. Användarinloggning. Autentisering med JWT.',
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
            label: 'Källkod',
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
          'En webbplats där användare kan chatta. Säkerhetsåtgärder inkluderar skyddade routes, JWT-autentisering, CSP och sanering av input. När webbplatsen var igång använde jag Sentry för loggning och monitorering.',
        technologies: ['React', 'Sentry', 'JWT', 'Content Security Policy'],
        links: [
          {
            label: 'Källkod',
            href: 'https://github.com/angelika-friis/chatify',
            variant: 'primary',
          },
        ],
      },
      gomuku: {
        id: 'gomuku',
        title: 'Gomuku - fem i rad',
        fileName: 'gomuku.exe',
        description:
          'Ett fem-i-rad-spel. Ett samarbetsprojekt med separat frontend, komponentbibliotek och backend. Användare loggar in och spelar mot varandra. En WebSocket hämtar det senaste draget. Storybook användes för att förhandsvisa komponentbiblioteket.',
        technologies: ['React', 'WebSocket', 'Storybook', 'CSS'],
        links: [
          {
            label: 'Källkod',
            href: 'https://github.com/angelika-friis/FWK24S-PLU-fem-i-rad-frontend',
            variant: 'primary',
          },
        ],
      },
    },
  },
};
