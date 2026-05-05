import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'About Me',
    children: (
      <p>
        Hey there! I'm Angelika, a passionate front-end developer blending retro
        aesthetics with modern design.
      </p>
    ),
  },
};

export const ShortText: Story = {
  args: {
    title: 'Info',
    children: <p>Short content.</p>,
  },
};
