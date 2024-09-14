import type { StoryObj } from '@storybook/react';
import { TaskListItem } from './index';

export default {
	title: 'Features/Bucket/Components/TaskListItem',
	component: TaskListItem,
};

type Story = StoryObj<typeof TaskListItem>;

export const Default: Story = {
	args: {
		text: 'Task 1',
	},
};
