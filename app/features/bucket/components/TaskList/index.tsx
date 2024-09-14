import { Flex } from '@mantine/core';
import type { FC } from 'react';
import { TaskListItem } from '../TaskListItem';

type Props = {
	tasks: {
		id: number;
		title: string;
	}[];
};

export const TaskList: FC<Props> = ({ tasks }) => {
	return (
		<Flex
			style={{
				width: '100%',
				height: '100px',
				flexDirection: 'column',
				gap: '8px',
			}}
		>
			{tasks.map((task) => (
				<TaskListItem key={task.id} text={task.title} />
			))}
		</Flex>
	);
};
