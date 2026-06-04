import { createContext } from 'react';
import type { Language } from './translations';
import { translations } from './translations';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'sv',
  setLanguage: () => undefined,
  t: translations.sv,
});
