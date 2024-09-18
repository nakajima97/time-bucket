import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import { Question } from '../Question';
import { useLocalStorage } from '@mantine/hooks';

export const QuestionContainer = () => {
	const [age, setAge] = useState<number | undefined>(undefined);

	const [localStorageAge, setLocalStorageAge] = useLocalStorage({
		key: 'age',
		defaultValue: '',
	});

	const navigate = useNavigate();

	const handleClick = () => {
		setLocalStorageAge(String(age));

		navigate('/goal');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value === '') {
			setAge(undefined);
			return;
		}

		setAge(Number(value));
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
