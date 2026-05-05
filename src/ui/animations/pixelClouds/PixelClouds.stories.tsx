import type { Meta, StoryObj } from '@storybook/react-vite';
import { PixelClouds } from './PixelClouds';

const meta: Meta<typeof PixelClouds> = {
  title: 'UI/Animations/PixelClouds',
  component: PixelClouds,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PixelClouds>;

export const Default: Story = {
  args: {},
};
