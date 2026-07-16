import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Text } from '../primitives';
import { DocumentPreview } from './DocumentPreview';

const meta: Meta<typeof DocumentPreview> = {
  title: 'UI/DocumentPreview',
  component: DocumentPreview,
};

export default meta;

type Story = StoryObj<typeof DocumentPreview>;

export const Open: Story = {
  args: {
    documentPath: '/cv-short-version.pdf',
    isOpen: true,
    title: 'CV preview',
    onClose: () => undefined,
  },
};

export const WithTrigger: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>
          <Text variant="label">CV</Text>
        </Button>
        <DocumentPreview
          documentPath="/cv-short-version.pdf"
          isOpen={isOpen}
          title="CV preview"
          openDocText="Open PDF in new tab"
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
};
