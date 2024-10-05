import type { Tasks } from '@/types';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';

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
	};

	/**
	 * ローカルストレージからタスクを取得する
	 * @returns {Tasks}
	 */
	const loadTasksFromLocalStorage = useCallback(() => {
		return localStorageTasks;
	}, [localStorageTasks]);

	// ローカルストレージからタスクを削除する
	const clearTasksFromLocalStorage = () => {
		setLocalStorageTasks(defaultTasks);
	};

	return {
		saveTasksToLocalStorage,
		loadTasksFromLocalStorage,
		clearTasksFromLocalStorage,
	};
};
