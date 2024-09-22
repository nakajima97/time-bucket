import type { Tasks } from '@/features/task/types';
import { Flex } from '@mantine/core';
import { TaskListItem } from '../TaskListItem';

type Props = {
	tasks: Tasks;
};

export const TaskList = ({ tasks }: Props) => {
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
				<TaskListItem key={task.id} text={task.content} />
			))}
		</Flex>
	);
};
