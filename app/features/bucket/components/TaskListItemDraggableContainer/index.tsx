import type { Task } from '@/types';
import { Draggable } from '@hello-pangea/dnd';
import { TaskListItem } from '../TaskListItem';

type Props = {
	task: Task;
};

export const TaskListItemDraggableContainer = ({ task }: Props) => {
	return (
		<Draggable draggableId={task.id.toString()} index={task.id}>
			{(provided) => (
				<TaskListItem
					text={task.content}
					myRef={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				/>
			)}
		</Draggable>
	);
};
