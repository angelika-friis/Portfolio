import { Outlet } from 'react-router';
import styles from './MainLayout.module.css';
import { Button } from '../../../ui/components/Button';
import { Stack, Text } from '../../../ui/components/primitives';
import { useTheme } from '../../../ui/theme/useTheme';
import MoonIcon from '@iconify-react/pixelarticons/moon';
import SunIcon from '@iconify-react/pixel/sun';
import ExternalLinkSolidIcon from '@iconify-react/pixel/external-link-solid';
import { contactLinks } from '../../data/contactLinks';

function MainLayout() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const nextTheme = isDarkMode ? 'retro' : 'dark';

  return (
    <>
      <header className={styles.header}>
        <Button
          className={styles.themeToggle}
          variant="primary"
          type="button"
          aria-pressed={isDarkMode}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          onClick={() => setTheme(nextTheme)}
        >
          {isDarkMode ? <SunIcon height="1em" /> : <MoonIcon height="1em" />}
        </Button>

        <Stack
          className={styles.headerTitle}
          direction="vertical"
          align="center"
        >
          <Text as="h1" variant="display">
            ~/dev/portfolio
          </Text>
          <Text as="p" variant="caption">
            Full-stack Developer
          </Text>
        </Stack>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Stack direction="horizontal" align="center">
          <ExternalLinkSolidIcon height="1rem" />
          <Text as="p" weight="bold">
            Check out project
          </Text>
        </Stack>
        <nav className={styles.footerLinks} aria-label="Contact links">
          {contactLinks.map(({ href, icon }) => (
            <a key={href} href={href} className={styles.footerLink}>
              {icon}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}

export default MainLayout;
