import type { Meta, StoryObj } from '@storybook/react-vite';
import { projects } from '../../../../data/projects';
import { ProjectShowcase } from './ProjectShowcase';

const meta: Meta<typeof ProjectShowcase> = {
  title: 'app/ProjectShowcase',
  component: ProjectShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectShowcase>;

export const Default: Story = {
  args: {
    projects,
  },
};

export const ShortList: Story = {
  args: {
    projects: {
      ecommerce: projects.ecommerce,
      taskManager: projects.taskManager,
    },
  },
};
