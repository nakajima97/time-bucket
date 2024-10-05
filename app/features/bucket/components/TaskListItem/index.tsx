import { Card, Text } from '@mantine/core';

type Props = {
	text: string;
	myRef?: React.Ref<HTMLDivElement> | null;
};

export const TaskListItem = ({ text, myRef, ...rest }: Props) => {
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			style={{ width: '100%' }}
			ref={myRef}
			{...rest}
		>
			<Text size="sm" c="dimmed">
				{text}
			</Text>
		</Card>
	);
};
