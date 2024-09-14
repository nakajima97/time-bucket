import type { StoryObj } from '@storybook/react';
import { QuestionBase } from './index';

export default {
  title: 'components/QuestionBase',
  component: QuestionBase,
};

type Story = StoryObj<typeof QuestionBase>;

export const Default: Story = {
  args: {
    children: <div>Content</div>,
  },
};