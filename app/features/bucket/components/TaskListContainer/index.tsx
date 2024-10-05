import { useLocalStorageTask } from '@/hooks/useLocalStorageTask';
import type { Tasks } from '@/types';
import { Droppable } from '@hello-pangea/dnd';
import { TaskList } from '../TaskList';

type Props = {
	tasks: Tasks;
	droppableId: string;
};

export const TaskListContainer = ({ tasks, droppableId }: Props) => {
	return (
		<Droppable droppableId={droppableId}>
			{(provided) => (
				<>
					<TaskList
						tasks={tasks}
						myRef={provided.innerRef}
						{...provided.droppableProps}
					/>
					{provided.placeholder}
				</>
			)}
		</Droppable>
	);
};
