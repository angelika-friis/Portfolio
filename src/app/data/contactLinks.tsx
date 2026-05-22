import GithubIcon from '@iconify-react/pixel/github';
import LinkedinIcon from '@iconify-react/pixel/linkedin';
import MailIcon from '@iconify-react/pixelarticons/mail';
import type { ReactNode } from 'react';

type ContactLink = {
  href: string;
  icon: ReactNode;
  title: string;
  text: string;
};

export const contactLinks: ContactLink[] = [
  {
    href: 'mailto: angelikafriis@gmail.com',
    icon: <MailIcon height="2em" />,
    title: 'Email me',
    text: 'angelikafriis@gmail.com',
  },
  {
    href: 'https://github.com/angelika-friis',
    icon: <GithubIcon height="2em" />,
    title: 'Github',
    text: 'angelika-friis',
  },
  {
    href: 'https://www.linkedin.com/in/angelika-friis/',
    icon: <LinkedinIcon height="2em" />,
    title: 'Linkedin',
    text: 'angelikafriis',
  },
];
