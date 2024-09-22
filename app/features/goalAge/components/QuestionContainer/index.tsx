import { useAgeInput } from '@/hooks/useAgeInput';
import { useLocalStorageGoalAge } from '@/hooks/useLocalStorageGoalAge';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const { age, handleChange, setAge } = useAgeInput();
	const { saveGoalAgeToLocalStorage, loadGoalAgeFromLocalStorage } =
		useLocalStorageGoalAge();

	const navigate = useNavigate();

	// ローカルストレージに値があったら、年齢をセットする
	const localStorageAge = loadGoalAgeFromLocalStorage();
	useEffect(() => {
		if (localStorageAge) {
			setAge(localStorageAge);
		}
	}, [localStorageAge, setAge]);

	const handleClick = () => {
		saveGoalAgeToLocalStorage(age ?? 0);

		navigate('/task');
	};

	return (
		<Question
			onClick={handleClick}
			value={age}
			onChange={handleChange}
			disabled={!age}
		/>
	);
};
