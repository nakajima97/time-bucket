import { useLocalStorageTask } from '@/hooks/useLocalStorageTask';
import { TaskList } from '../TaskList';

export const TaskListContainer = () => {
	const { loadTasksFromLocalStorage } = useLocalStorageTask();

	const tasks = loadTasksFromLocalStorage() ?? [];

	return <TaskList tasks={tasks} />;
};
