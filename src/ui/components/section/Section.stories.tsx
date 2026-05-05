import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from './Section';
import { Card } from '../card/Card';
import { Stack, Text } from '../primitives';
import { Button } from '../button/Button';

const meta: Meta<typeof Section> = {
  title: 'UI/Section',
  component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: 'ABOUT_ME.EXE',
    children: (
      <Stack>
        <Text>Webbdesign & App</Text>
        <Text>Responsiv & Accessible</Text>
        <Card title="Digital me">
          <img
            src="https://raw.githubusercontent.com/KennethJAllen/proper-pixel-art/main/assets/blob/result.png"
            width={'75px'}
          />
        </Card>
        <Card title="My passion">
          <Stack>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              eligendi impedit autem blanditiis facere necessitatibus quod
              adipisci nesciunt quasi illo iste laboriosam placeat dolores
              accusantium quis atque veritatis delectus odio.
            </Text>
            <Button>contact me</Button>
          </Stack>
        </Card>
      </Stack>
    ),
  },
};
