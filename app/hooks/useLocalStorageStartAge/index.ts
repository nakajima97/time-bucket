import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';

export const useLocalStorageStartAge = () => {
	const [localStorageStartAge, setLocalStorageStartAge] = useLocalStorage({
		key: localStorageKeys.startAge,
		defaultValue: '',
	});

	/**
	 * ローカルストレージに開始年齢を保存する
	 * @param {number} age
	 */
	const saveStartAgeToLocalStorage = useCallback(
		(age: number) => {
			setLocalStorageStartAge(String(age));
		},
		[setLocalStorageStartAge],
	);

	/**
	 * ローカルストレージから開始年齢を取得する
	 * @returns {number}
	 */
	const loadStartAgeFromLocalStorage = useCallback(() => {
		return Number(localStorageStartAge);
	}, [localStorageStartAge]);

	/**
	 * ローカルストレージから開始年齢を削除する
	 */
	const clearStartAgeFromLocalStorage = useCallback(() => {
		setLocalStorageStartAge('');
	}, [setLocalStorageStartAge]);

	return {
		saveStartAgeToLocalStorage,
		loadStartAgeFromLocalStorage,
		clearStartAgeFromLocalStorage,
	};
};
