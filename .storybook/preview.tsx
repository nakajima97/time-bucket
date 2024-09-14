import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import type { Preview } from '@storybook/react';
import type { ReactNode } from 'react';
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
		(renderStory: () => ReactNode) => (
			<MantineProvider>{renderStory()}</MantineProvider>
		),
	],
};

export default preview;
