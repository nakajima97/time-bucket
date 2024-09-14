import type { StoryObj } from '@storybook/react';
import { Question } from './index';

export default {
	title: 'features/task/components/Question',
	component: Question,
};

type Story = StoryObj<typeof Question>;

export const Default: Story = {
	args: {
		onClick: () => {},
	},
};
