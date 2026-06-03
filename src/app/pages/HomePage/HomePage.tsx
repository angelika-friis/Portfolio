import { PixelClouds } from '../../../ui/animations/pixelClouds/PixelClouds';
import { PixelCat } from '../../../ui/components/PixelCat';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechStackSection } from './components/TechStackSection';
import { ContactButtons } from './components/ContactButton';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';
import { contactLinks } from '../../data/contactLinks';
import { useLanguage } from '../../i18n/useLanguage';
import styles from './HomePage.module.css';

function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      <Stack direction="horizontal" className={styles.introSection} gap="xs">
        <Stack direction="vertical" className={styles.introCards} gap="xs">
          <Window title="hello.txt">
            <Text as="p">{t.home.intro.hello}</Text>
            <Text as="p">{t.home.intro.role}</Text>
          </Window>
          <Window title="updates.txt">
            <Text as="p">{t.home.intro.graduation}</Text>
            <Text as="p">{t.home.intro.hiring}</Text>
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
          <Text as="p">{t.home.about.accessibility}</Text>
          <Text as="p">{t.home.about.education}</Text>
        </Window>
        <Window title="contact.cfg">
          <Stack direction="vertical">
            <Text as="p">{t.home.contact.heading}</Text>
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
      <ProjectShowcase projects={t.projects} />
    </div>
  );
}

export default HomePage;
