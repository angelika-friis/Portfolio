import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Window } from './Window';
import { Card } from '../card/Card';
import { Stack, Text } from '../primitives';
import { Button } from '../Button';

const meta: Meta<typeof Window> = {
  title: 'UI/Window',
  component: Window,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Window>;

export const Default: Story = {
  args: {
    title: 'about.txt',
    children: (
      <Stack>
        <Text>Web Design & App</Text>
        <Text>Responsive & Accessible</Text>
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
            <Button variant="accent">contact me</Button>
          </Stack>
        </Card>
      </Stack>
    ),
  },
};

export const Closable: Story = {
  args: {
    title: 'cv.pdf',
    onClose: fn(),
    children: (
      <Stack>
        <Text>Closable windows show a single X button.</Text>
        <Button variant="accent">download</Button>
      </Stack>
    ),
  },
};

export const FlushContent: Story = {
  args: {
    title: 'preview.pdf',
    contentPadding: false,
    children: (
      <div
        style={{
          minHeight: 240,
          display: 'grid',
          placeItems: 'center',
          background: 'white',
          color: 'black',
        }}
      >
        PDF preview area
      </div>
    ),
  },
};
