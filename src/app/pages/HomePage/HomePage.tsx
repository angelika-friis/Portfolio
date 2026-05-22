import { PixelClouds } from '../../../ui/animations/pixelClouds/PixelClouds';
import { PixelCat } from '../../../ui/components/PixelCat';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechStackSection } from './components/TechStackSection';
import { ContactButtons } from './components/ContactButton';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';
import { contactLinks } from '../../data/contactLinks';
import { projects } from '../../data/projects';
import styles from './HomePage.module.css';

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
            <Text as="p">{`> So... Need a full-stack developer?`}</Text>
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
          <Text as="p">{`> I want to make websites and apps that are easy to use, secure and accessible for everyone.`}</Text>
          <Text as="p">{`> I am graduating as a full-stack developer with a focus on web security in the MERN stack.`}</Text>
        </Window>
        <Window title="contact.cfg">
          <Stack direction="vertical">
            <Text as="p">Let's get in contact!</Text>
            {contactLinks.map((contactLink) => (
              <ContactButtons key={contactLink.href} {...contactLink} />
            ))}
          </Stack>
        </Window>
        <Window title="my_companion.img">
          <PixelCat />
        </Window>
      </Stack>
      <TechStackSection />
      <ProjectShowcase projects={projects} />
    </div>
  );
}

export default HomePage;
