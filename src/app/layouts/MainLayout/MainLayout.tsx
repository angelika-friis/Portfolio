import { Outlet } from 'react-router';
import styles from './MainLayout.module.css';
import { Stack, Text } from '../../../ui/components/primitives';

function MainLayout() {
  return (
    <>
      <header className={styles.header}>
        <Stack direction="vertical" align="center">
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
    </>
  );
}

export default MainLayout;
