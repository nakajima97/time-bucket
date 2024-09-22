import { Tasks } from "@/features/task/types";
import { localStorageKeys } from "@/utils/constants/localStorageKeys";
import { useLocalStorage } from "@mantine/hooks";

export const useLocalStorageTask = () => {
	const [localStorageTasks, setLocalStorageTasks] = useLocalStorage({
		key: localStorageKeys.tasks,
	});

	/**
	 * ローカルストレージにタスクを保存する
	 * @param {Tasks} tasks
	 */
	const saveTasksToLocalStorage = (tasks: Tasks) => {
		setLocalStorageTasks(JSON.stringify(tasks));
	}

	/**
	 * ローカルストレージからタスクを取得する
	 * @returns {Tasks}
	 */
	const loadTasksFromLocalStorage = () => {
		return JSON.parse(localStorageTasks) as Tasks;
	}

	return {
		saveTasksToLocalStorage,
		loadTasksFromLocalStorage
	}
}