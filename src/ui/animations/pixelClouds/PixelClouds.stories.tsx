import type { Meta, StoryObj } from '@storybook/react-vite';
import { Window } from '../../components/Window/Window';
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
  render: () => (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <PixelClouds />
    </div>
  ),
};

export const InsideWindow: Story = {
  render: () => (
    <Window title="clouds.exe" contentPadding={false}>
      <div
        style={{
          height: 420,
          minHeight: 0,
        }}
      >
        <PixelClouds />
      </div>
    </Window>
  ),
};
