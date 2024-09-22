import { Tasks } from "@/features/task/types";
import { localStorageKeys } from "@/utils/constants/localStorageKeys";
import { useLocalStorage } from "@mantine/hooks";

const defaultTasks: Tasks = [];

export const useLocalStorageTask = () => {
	const [localStorageTasks, setLocalStorageTasks] = useLocalStorage({
		key: localStorageKeys.tasks,
		defaultValue: defaultTasks,
	});

	/**
	 * ローカルストレージにタスクを保存する
	 * @param {Tasks} tasks
	 */
	const saveTasksToLocalStorage = (tasks: Tasks) => {
		setLocalStorageTasks(tasks);
	}

	/**
	 * ローカルストレージからタスクを取得する
	 * @returns {Tasks}
	 */
	const loadTasksFromLocalStorage = () => {
		console.log({ localStorageTasks });
		return localStorageTasks
	}

	return {
		saveTasksToLocalStorage,
		loadTasksFromLocalStorage
	}
}