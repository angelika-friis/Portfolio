import { useEffect } from 'react';
import type { Decorator } from '@storybook/react-vite';

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <Story />;
};
