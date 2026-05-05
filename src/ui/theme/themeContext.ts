import { createContext } from 'react';

export type Theme = 'retro' | 'dark';

export const ThemeContext = createContext({
  theme: 'retro' as Theme,
  setTheme: () => {},
});
