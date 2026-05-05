import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import '../src/ui/theme/tokens.css';
import '../src/ui/theme/themes/retro.css';
import '../src/ui/theme/themes/dark.css';

import { ThemeDecorator } from './decorators/ThemeDecorator';
import { LayoutDecorator } from './decorators/LayoutDecorator';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },

  decorators: [ThemeDecorator, LayoutDecorator],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'retro',
      toolbar: {
        icon: 'circlehollow',
        items: ['retro', 'dark'],
      },
    },
  },
};

export default preview;
