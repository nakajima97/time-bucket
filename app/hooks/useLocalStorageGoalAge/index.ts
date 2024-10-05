import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useLocalStorage } from '@mantine/hooks';

export const useLocalStorageGoalAge = () => {
	const [localStorageGoalAge, setLocalStorageGoalAge] = useLocalStorage({
		key: localStorageKeys.goalAge,
		defaultValue: '',
	});

	/**
	 * ローカルストレージに開始年齢を保存する
	 * @param {number} age
	 */
	const saveGoalAgeToLocalStorage = (age: number) => {
		setLocalStorageGoalAge(String(age));
	};

	/**
	 * ローカルストレージから開始年齢を取得する
	 * @returns {number}
	 */
	const loadGoalAgeFromLocalStorage = () => {
		return Number(localStorageGoalAge);
	};

	// ローカルストレージから開始年齢を削除する
	const clearGoalAgeFromLocalStorage = () => {
		setLocalStorageGoalAge('');
	};

	return {
		saveGoalAgeToLocalStorage,
		loadGoalAgeFromLocalStorage,
		clearGoalAgeFromLocalStorage,
	};
};
