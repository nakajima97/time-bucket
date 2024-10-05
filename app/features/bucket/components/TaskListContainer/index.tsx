import { useLocalStorageTask } from '@/hooks/useLocalStorageTask';
import type { Tasks } from '@/types';
import { Droppable } from '@hello-pangea/dnd';
import { TaskList } from '../TaskList';

type Props = {
	tasks: Tasks;
};

export const TaskListContainer = ({ tasks }: Props) => {
	return (
		<Droppable droppableId="task-list">
			{(provided) => (
				<TaskList
					tasks={tasks}
					myRef={provided.innerRef}
					{...provided.droppableProps}
				/>
			)}
		</Droppable>
	);
};
