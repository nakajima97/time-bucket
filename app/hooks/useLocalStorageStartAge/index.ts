import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useLocalStorage } from '@mantine/hooks';

export const useLocalStorageStartAge = () => {
	const [localStorageStartAge, setLocalStorageStartAge] = useLocalStorage({
		key: localStorageKeys.startAge,
		defaultValue: '',
	});

	/**
	 * ローカルストレージに開始年齢を保存する
	 * @param {number} age
	 */
	const saveStartAgeToLocalStorage = (age: number) => {
		setLocalStorageStartAge(String(age));
	};

	/**
	 * ローカルストレージから開始年齢を取得する
	 * @returns {number}
	 */
	const loadStartAgeFromLocalStorage = () => {
		return localStorageStartAge;
	};

	return {
		saveStartAgeToLocalStorage,
		loadStartAgeFromLocalStorage,
	};
};
