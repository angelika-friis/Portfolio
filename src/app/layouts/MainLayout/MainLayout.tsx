import { Outlet } from 'react-router';
import styles from './MainLayout.module.css';
import { Button } from '../../../ui/components/Button';
import { PixelCat } from '../../../ui/components/PixelCat';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';
import { useTheme } from '../../../ui/theme/useTheme';
import MoonIcon from '@iconify-react/pixelarticons/moon';
import SunIcon from '@iconify-react/pixel/sun';

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
            Fullstack Developer
          </Text>
        </Stack>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}></footer>

      {/* <Window
        title="cat"
        className={styles.desktopCompanion}
        contentClassName={styles.companionContent}
        contentPadding={false}
      >
        <PixelCat className={styles.companionCat} size={92} />
      </Window> */}
    </>
  );
}

export default MainLayout;
