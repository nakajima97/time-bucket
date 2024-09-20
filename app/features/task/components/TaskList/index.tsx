import { Box, List } from '@mantine/core';

type Props = {
	tasks: {
		id: number;
		title: string;
	}[];
};

export const TaskList = ({ tasks }: Props) => {
	return (
		<Box>
			<List>
				{tasks.map((task) => (
					<List.Item key={task.id}>{task.title}</List.Item>
				))}
			</List>
		</Box>
	);
};
