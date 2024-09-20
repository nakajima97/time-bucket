import { useAgeInput } from '@/hooks/useAgeInput';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';

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
