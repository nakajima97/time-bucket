import { Card, Text } from '@mantine/core';

type Props = {
	text: string;
};

export const TaskListItem = ({ text }: Props) => {
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
