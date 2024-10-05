import { useCallback } from 'react';
import { useLocalStorageGoalAge } from '../useLocalStorageGoalAge';
import { useLocalStorageStartAge } from '../useLocalStorageStartAge';
import { useLocalStorageTask } from '../useLocalStorageTask';

export const useClearLocalStorage = () => {
	const { clearGoalAgeFromLocalStorage } = useLocalStorageGoalAge();
	const { clearStartAgeFromLocalStorage } = useLocalStorageStartAge();
	const { clearTasksFromLocalStorage } = useLocalStorageTask();

	const clearLocalStorage = useCallback(() => {
		clearGoalAgeFromLocalStorage();
		clearStartAgeFromLocalStorage();
		clearTasksFromLocalStorage();
	}, [
		clearGoalAgeFromLocalStorage,
		clearStartAgeFromLocalStorage,
		clearTasksFromLocalStorage,
	]);

	return {
		clearLocalStorage,
	};
};
