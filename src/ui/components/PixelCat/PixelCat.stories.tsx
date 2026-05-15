import type { Meta, StoryObj } from '@storybook/react-vite';
import { Window } from '../Window/Window';
import { PixelCat } from './PixelCat';

const meta: Meta<typeof PixelCat> = {
  title: 'UI/PixelCat',
  component: PixelCat,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 240,
  },
};

export default meta;

type Story = StoryObj<typeof PixelCat>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 320,
  },
};

export const InsideWindow: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Window title="cat.exe">
      <PixelCat size={260} />
    </Window>
  ),
};
