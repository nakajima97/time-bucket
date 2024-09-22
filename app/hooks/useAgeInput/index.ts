import { useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';

/**
 * 年齢の入力を扱うカスタムフック
 * @param {Arguments} param
 * @returns
 */
export const useAgeInput = () => {
	const [age, setAge] = useState<number | undefined>(undefined);

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
		setAge,
	};
};
