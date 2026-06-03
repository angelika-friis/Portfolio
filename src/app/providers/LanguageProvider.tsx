import { useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from '../i18n/languageContext';
import { translations, type Language } from '../i18n/translations';

type LanguageProviderProps = {
  children: ReactNode;
  defaultLanguage?: Language;
};

export function LanguageProvider({
  children,
  defaultLanguage = 'en',
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
