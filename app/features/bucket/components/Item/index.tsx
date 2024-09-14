import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import type { FC } from 'react';

type Props = {
	text: string;
};

export const Item: FC<Props> = ({ text }) => {
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
