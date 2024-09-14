import { Flex } from '@mantine/core';
import { Item } from '../Item';

export const TaskList = () => {
	const tasks = [
		{
			id: 1,
			title: 'Task 1',
		},
		{
			id: 2,
			title: 'Task 2',
		},
	];

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
				<Item key={task.id} text={task.title} />
			))}
		</Flex>
	);
};
