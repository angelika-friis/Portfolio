import GithubIcon from '@iconify-react/pixel/github';
import LinkedinIcon from '@iconify-react/pixel/linkedin';
import MailIcon from '@iconify-react/pixelarticons/mail';

import { PixelClouds } from '../../../ui/animations/pixelClouds/PixelClouds';
import { PixelCat } from '../../../ui/components/PixelCat';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ContactButtons } from './components/ContactButton';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';
import { projects } from '../../data/projects';
import styles from './HomePage.module.css';

const contactLinks = [
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

function HomePage() {
  return (
    <div>
      <Stack direction="horizontal" className={styles.introSection} gap="xs">
        <Stack direction="vertical" className={styles.introCards} gap="xs">
          <Window title="hello.txt">
            <Text as="p">{`> Hi! I'm Angelika.`}</Text>
            <Text as="p">{`> I develop websites and apps.`}</Text>
          </Window>
          <Window title="updates.txt">
            <Text as="p">{`> Graduating summer 2026.`}</Text>
            <Text as="p">{`> So... Need a fullstack developer?`}</Text>
          </Window>
        </Stack>
        <Window
          title="clouds.img"
          contentPadding={false}
          className={styles.cloudWindow}
        >
          <PixelClouds />
        </Window>
      </Stack>
      <Stack direction="horizontal" className={styles.section2}>
        <Window title="about_me.txt">
          <Text as="p">{`> I want to make websites and apps that are easy to use, secure and accesible for everyone.`}</Text>
          <Text as="p">{`> I am graduating as a fullstack developer with a focus on websecurtiy in the MERN-stack.`}</Text>
        </Window>
        <Window title="contact.cfg">
          <Stack direction="vertical">
            <Text as="p">Lets get in contact!</Text>
            {contactLinks.map((contactLink) => (
              <ContactButtons key={contactLink.href} {...contactLink} />
            ))}
          </Stack>
        </Window>
        <Window title="my_companion.img">
          <PixelCat />
        </Window>
      </Stack>
      <ProjectShowcase projects={projects} />
    </div>
  );
}

export default HomePage;
