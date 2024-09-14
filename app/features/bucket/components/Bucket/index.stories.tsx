import type { StoryObj } from '@storybook/react';
import { Bucket } from '.';

export default {
	title: 'Features/Bucket/Components/Bucket',
	component: Bucket,
};

type Story = StoryObj<typeof Bucket>;

export const Default: Story = {
	args: {
		age: {
			start: 10,
			end: 20,
		},
	},
};
