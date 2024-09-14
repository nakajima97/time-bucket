import type { StoryObj } from '@storybook/react';
import { TaskList } from '.';

export default {
  title: 'Features/Bucket/Components/TaskList',
  component: TaskList,
};

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: 1,
        title: 'Task 1',
      },
      {
        id: 2,
        title: 'Task 2',
      },
    ],
  }
}