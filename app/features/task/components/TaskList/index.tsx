import { Box, List } from '@mantine/core';
import { FC } from 'react';

type Props = {
	tasks: {
		id: number;
		title: string;
	}[];
};

export const TaskList: FC<Props> = ({ tasks }) => {
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
