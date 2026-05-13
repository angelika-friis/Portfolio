import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from '../../ui/theme/themeContext';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

export function ThemeProvider({
  children,
  defaultTheme = 'retro',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
