import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack/Stack';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4'],
    },
    variant: {
      control: 'select',
      options: [
        'display',
        'heading',
        'subheading',
        'body',
        'caption',
        'label',
        'overline',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
    },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'accent'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
  args: {
    children: 'Pixel perfect portfolio text',
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    as: 'p',
    variant: 'body',
    size: 'md',
    tone: 'default',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Text as="h1" variant="display" size="2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Text>
      <Text as="h2" variant="heading" size="xl">
        Fuga sapiente suscipit rem.
      </Text>
      <Text as="h3" variant="subheading" size="lg" tone="accent">
        Nam, provident?
      </Text>
      <Text variant="body">
        Optio error aperiam omnis iure enim eaque tempore iste quisquam minima
        sequi nemo reiciendis, unde reprehenderit.
      </Text>
      <Text variant="caption" size="sm" muted>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <Text as="span" variant="label" size="sm">
        Adipisci recusandae, dolor eos aliquid nihil omnis expedita qui eum quo
        placeat minima labore nostrum molestias at.
      </Text>
      <Text as="span" variant="overline" size="xs" tone="accent">
        Magni illum distinctio magnam quaerat.
      </Text>
    </Stack>
  ),
};

export const Headings: Story = {
  render: () => (
    <Stack gap="sm">
      <Text as="h1" variant="display" size="2xl">
        Display heading
      </Text>
      <Text as="h2" variant="heading" size="xl">
        Section heading
      </Text>
      <Text as="h3" variant="subheading" size="lg">
        Subheading
      </Text>
    </Stack>
  ),
};

export const BodyCopy: Story = {
  render: () => (
    <Stack gap="sm">
      <Text size="lg">
        Large body text works well for introductions and short summaries.
      </Text>
      <Text>
        Default body text is tuned for regular paragraphs inside cards,
        sections, and layout primitives.
      </Text>
      <Text size="sm" muted>
        Small muted text is useful for secondary details.
      </Text>
      <Text variant="caption" size="xs">
        Caption text keeps metadata compact.
      </Text>
    </Stack>
  ),
};
