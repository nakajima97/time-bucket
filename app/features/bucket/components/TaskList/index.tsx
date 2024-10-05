import type { Tasks } from '@/types';
import { Flex } from '@mantine/core';
import { TaskListItemDraggableContainer } from '../TaskListItemDraggableContainer';

type Props = {
	tasks: Tasks;
	// React19からはforwardRefを使わなくてもRefを受け取れるようになった
	// このプロジェクトはReact18なので、名前を変えることで回避している
	myRef?: React.Ref<HTMLDivElement> | null;
	[key: string]: unknown;
};

export const TaskList = ({ tasks, myRef, ...rest }: Props) => {
	return (
		<Flex
			style={{
				width: '100%',
				height: '100px',
				flexDirection: 'column',
				gap: '8px',
			}}
			ref={myRef}
			{...rest}
		>
			{tasks.map((task) => (
				<TaskListItemDraggableContainer key={task.id} task={task} />
			))}
		</Flex>
	);
};
