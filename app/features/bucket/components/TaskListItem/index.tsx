import { Card, Text } from '@mantine/core';
import type { FC } from 'react';

type Props = {
	text: string;
};

export const TaskListItem: FC<Props> = ({ text }) => {
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			style={{ width: '100%' }}
		>
			<Text size="sm" c="dimmed">
				{text}
			</Text>
		</Card>
	);
};
