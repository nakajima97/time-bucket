import { useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';

type Arguments = {
	localStorageKey: string;
};

/**
 * 年齢の入力を扱うカスタムフック
 * @param {Arguments} param
 * @returns
 */
export const useAgeInput = ({ localStorageKey }: Arguments) => {
	const [age, setAge] = useState<number | undefined>(undefined);

	const [localStorageAge, setLocalStorageAge] = useLocalStorage({
		key: localStorageKey,
		defaultValue: '',
	});

	// ローカルストレージに値があったら、年齢をセットする
	useEffect(() => {
		if (localStorageAge) {
			setAge(Number(localStorageAge));
		}
	}, [localStorageAge]);

	// 年齢の変更時の処理
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value === '') {
			setAge(undefined);
			return;
		}

		setAge(Number(value));
	};

	return {
		age,
		handleChange,
		localStorageAge,
		setLocalStorageAge,
	};
};
