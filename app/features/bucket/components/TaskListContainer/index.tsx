import { TaskList } from "../TaskList";

export const TaskListContainer = () => {
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

  return <TaskList tasks={tasks} />;
}