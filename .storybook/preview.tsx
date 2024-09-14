import '@mantine/core/styles.css';
import type { Preview } from '@storybook/react';
import {
  MantineProvider,
} from '@mantine/core';
import React from 'react';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(renderStory: any) => (
			<MantineProvider>{renderStory()}</MantineProvider>
		),
	],
};

export default preview;
