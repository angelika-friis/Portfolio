import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Theme/Tokens',
};

export default meta;

export const Typography: StoryObj = {
  render: () => (
    <div>
      <p style={{ fontFamily: 'var(--font-main)' }}>Retro font preview</p>
    </div>
  ),
};
