import { useAgeInput } from '@/hooks/useAgeInput';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';

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
