import { useAgeInput } from '@/hooks/useAgeInput';
import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';

export const QuestionContainer = () => {
	const { age, handleChange, setLocalStorageAge } = useAgeInput({
		localStorageKey: localStorageKeys.goalAge,
	});

	const navigate = useNavigate();

	const handleClick = () => {
		setLocalStorageAge(String(age));

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
