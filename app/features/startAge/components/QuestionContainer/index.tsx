import { useAgeInput } from '@/hooks/useAgeInput';
import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';

export const QuestionContainer = () => {
	const { age, handleChange, setLocalStorageAge } = useAgeInput({
		localStorageKey: localStorageKeys.startAge,
	});

	const navigate = useNavigate();

	const handleClick = () => {
		setLocalStorageAge(String(age));

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
