import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DropdownMenu } from './DropdownMenu';
import TranslateSolidIcon from '@iconify-react/pixel/translate-solid';

type StoryLanguage = 'sv' | 'en';

const languageOptions: { value: StoryLanguage; label: string }[] = [
  { value: 'sv', label: 'Svenska' },
  { value: 'en', label: 'English' },
];

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Language: Story = {
  args: {
    label: 'Language/språk',
    title: 'Språk',
    options: languageOptions,
    selectedValue: 'sv',
    onSelect: fn(),
    icon: <TranslateSolidIcon height="2em" />,
  },
  render: (args) => {
    const [language, setLanguage] = useState<StoryLanguage>(
      args.selectedValue as StoryLanguage,
    );

    return (
      <DropdownMenu
        {...args}
        selectedValue={language}
        onSelect={(nextLanguage) => {
          setLanguage(nextLanguage as StoryLanguage);
          args.onSelect(nextLanguage);
        }}
      />
    );
  },
};
