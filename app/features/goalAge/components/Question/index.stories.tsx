import type { StoryObj } from '@storybook/react';
import { Question } from '.';

export default {
	title: 'features/goalAge/Components/Question',
	component: Question,
};

type Story = StoryObj<typeof Question>;

export const Default: Story = {
	args: {
		onClick: () => {},
	},
};
