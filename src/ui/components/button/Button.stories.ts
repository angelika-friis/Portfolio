import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'accent',
    children: 'Click me',
  },
};

export const WithLongText: Story = {
  args: {
    variant: 'accent',
    children: 'This is a longer button label',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'accent',
    children: 'Disabled',
    disabled: true,
  },
};
