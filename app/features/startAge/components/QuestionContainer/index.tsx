import { useAgeInput } from '@/hooks/useAgeInput';
import { useLocalStorageStartAge } from '@/hooks/useLocalStorageStartAge';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const { age, handleChange, setAge } = useAgeInput();
	const { loadStartAgeFromLocalStorage, saveStartAgeToLocalStorage } =
		useLocalStorageStartAge();

	const navigate = useNavigate();

	// ローカルストレージに値があったら、年齢をセットする
	const localStorageAge = loadStartAgeFromLocalStorage();
	useEffect(() => {
		if (localStorageAge) {
			setAge(localStorageAge);
		}
	}, [localStorageAge, setAge]);

	const handleClick = () => {
		saveStartAgeToLocalStorage(age ?? 0);

		navigate('/goal');
	};

	return (
		<Question
			onClick={handleClick}
			onChange={handleChange}
			value={age}
			disabled={!age}
		/>
	);
};
