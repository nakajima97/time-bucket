import type { Tasks } from '../../../../types';
import { TaskList } from '../TaskList';

type Props = {
	tasks: Tasks;
};

export const TaskListContainer = ({ tasks }: Props) => {
	return <TaskList tasks={tasks} />;
};
