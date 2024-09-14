import type { StoryObj } from '@storybook/react';
import { Question } from '.';

export default {
	title: 'Features/GoalAge/Components/Question',
	component: Question,
};

type Story = StoryObj<typeof Question>;

export const Default: Story = {
	args: {
		onClick: () => {},
	},
};
