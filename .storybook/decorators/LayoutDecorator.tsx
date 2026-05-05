import type { Decorator } from '@storybook/react-vite';

export const LayoutDecorator: Decorator = (Story) => {
  return (
    <div
      style={{
        padding: 24,
        background: 'var(--color-bg)',
        minHeight: '100vh',
      }}
    >
      <Story />
    </div>
  );
};
