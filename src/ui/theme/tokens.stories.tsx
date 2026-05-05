import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Theme/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Colors: StoryObj = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        padding: '16px',
      }}
    >
      <div
        style={{
          background: 'var(--color-card-bg)',
          padding: 20,
          color: 'var(--color-txt-on-primary)',
          width: '100%',
        }}
      >
        color-card-bg
      </div>
      <div
        style={{
          background: 'var(--color-primary)',
          padding: 20,
          color: 'var(--color-txt-on-primary)',
          width: '100%',
        }}
      >
        color-primary
      </div>
      <div
        style={{
          background: 'var(--color-primary-dark)',
          padding: 20,
          color: 'var(--color-txt-on-primary)',
          width: '100%',
        }}
      >
        color-primary-dark
      </div>
      <div
        style={{
          background: 'var(--color-accent)',
          padding: 20,
          color: 'var(--color-txt-on-primary)',
          width: '100%',
        }}
      >
        color-accent
      </div>
    </div>
  ),
};
