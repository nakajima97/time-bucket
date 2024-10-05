import { useLocalStorageGoalAge } from '../useLocalStorageGoalAge';
import { useLocalStorageStartAge } from '../useLocalStorageStartAge';
import { useLocalStorageTask } from '../useLocalStorageTask';

export const useClearLocalStorage = () => {
	const { clearGoalAgeFromLocalStorage } = useLocalStorageGoalAge();
	const { clearStartAgeFromLocalStorage } = useLocalStorageStartAge();
	const { clearTasksFromLocalStorage } = useLocalStorageTask();

	const clearLocalStorage = () => {
		clearGoalAgeFromLocalStorage();
		clearStartAgeFromLocalStorage();
		clearTasksFromLocalStorage();
	};

	return {
		clearLocalStorage,
	};
};
