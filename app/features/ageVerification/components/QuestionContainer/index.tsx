import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const [age, setAge] = useState<number | undefined>(undefined);

	const [localStorageAge, setLocalStorageAge] = useLocalStorage({
		key: 'age',
		defaultValue: '',
	});

	useEffect(() => {
		if (localStorageAge) {
			setAge(Number(localStorageAge));
		}
	}, [localStorageAge])

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
