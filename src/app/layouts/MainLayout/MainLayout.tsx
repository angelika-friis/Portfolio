import { useState } from 'react';
import { Outlet } from 'react-router';
import styles from './MainLayout.module.css';
import { Button } from '../../../ui/components/Button';
import { DropdownMenu } from '../../../ui/components/DropdownMenu';
import { Stack, Text } from '../../../ui/components/primitives';
import { useTheme } from '../../../ui/theme/useTheme';
import MoonIcon from '@iconify-react/pixelarticons/moon';
import SunIcon from '@iconify-react/pixel/sun';
import ExternalLinkSolidIcon from '@iconify-react/pixel/external-link-solid';
import { contactLinks } from '../../data/contactLinks';
import { DocumentPreview } from '../../../ui/components/DocumentPreview';
import { useLanguage } from '../../i18n/useLanguage';
import type { Language } from '../../i18n/translations';

const cvPdfPath = '/CV-Angelika-Friis-short-version.pdf';
const languageOptions: { value: Language; label: string }[] = [
  { value: 'sv', label: 'Svenska' },
  { value: 'en', label: 'English' },
];

function MainLayout() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
  const isDarkMode = theme === 'dark';
  const nextTheme = isDarkMode ? 'retro' : 'dark';

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerControls}>
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

          <DropdownMenu
            label="Language/språk"
            triggerAriaLabel="Välj språk / Choose language"
            title="Språk"
            options={languageOptions}
            selectedValue={language}
            onSelect={setLanguage}
          />
        </div>

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

        <Button
          className={styles.CVButton}
          variant="accent"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isCvPreviewOpen}
          onClick={() => setIsCvPreviewOpen(true)}
        >
          <Text variant="label">CV</Text>
        </Button>
      </header>

      <DocumentPreview
        documentPath={cvPdfPath}
        isOpen={isCvPreviewOpen}
        title="CV preview"
        onClose={() => setIsCvPreviewOpen(false)}
      />

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/angelika-friis/Portfolio"
          className={styles.footerLink}
        >
          <Stack direction="horizontal" align="center">
            <ExternalLinkSolidIcon height="1rem" />
            <Text as="p" weight="bold">
              Check out project
            </Text>
          </Stack>
        </a>
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
