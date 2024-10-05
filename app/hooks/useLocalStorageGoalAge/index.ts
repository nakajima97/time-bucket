import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';

export const useLocalStorageGoalAge = () => {
	const [localStorageGoalAge, setLocalStorageGoalAge] = useLocalStorage({
		key: localStorageKeys.goalAge,
		defaultValue: '',
	});

	/**
	 * ローカルストレージに開始年齢を保存する
	 * @param {number} age
	 */
	const saveGoalAgeToLocalStorage = useCallback(
		(age: number) => {
			setLocalStorageGoalAge(String(age));
		},
		[setLocalStorageGoalAge],
	);

	/**
	 * ローカルストレージから開始年齢を取得する
	 * @returns {number}
	 */
	const loadGoalAgeFromLocalStorage = useCallback(() => {
		return Number(localStorageGoalAge);
	}, [localStorageGoalAge]);

	// ローカルストレージから開始年齢を削除する
	const clearGoalAgeFromLocalStorage = useCallback(() => {
		setLocalStorageGoalAge('');
	}, [setLocalStorageGoalAge]);

	return {
		saveGoalAgeToLocalStorage,
		loadGoalAgeFromLocalStorage,
		clearGoalAgeFromLocalStorage,
	};
};
