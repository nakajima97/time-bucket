import { TaskList } from '../TaskList';
import { Tasks } from '../../types';

type Props = {
	tasks: Tasks;
}

export const TaskListContainer = ({tasks}: Props) => {
	return <TaskList tasks={tasks} />;
};
