import type { FC } from 'react';
import { TaskList } from '../TaskList';

export const TaskListContainer: FC = () => {
	const tasks = [
		{
			id: 1,
			title: 'Task 1',
		},
		{
			id: 2,
			title: 'Task 2',
		},
		{
			id: 3,
			title: 'Task 3',
		},
	];

	return <TaskList tasks={tasks} />;
};
