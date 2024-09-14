import type { StoryObj } from '@storybook/react';
import { Layout } from './index';

export default {
  title: 'components/Layout',
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: <div>Content</div>,
  },
};