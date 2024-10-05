import { Box, List } from '@mantine/core';
import type { Tasks } from '../../../../types';

type Props = {
	tasks: Tasks;
};

export const TaskList = ({ tasks }: Props) => {
	return (
		<Box>
			<List>
				{tasks.map((task) => (
					<List.Item key={task.id}>{task.content}</List.Item>
				))}
			</List>
		</Box>
	);
};
