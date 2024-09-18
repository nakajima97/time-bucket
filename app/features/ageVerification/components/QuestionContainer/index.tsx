import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const [age, setAge] = useState<number | undefined>(undefined);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/goal');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value === '') {
			setAge(undefined);
			return;
		}

		setAge(Number(value));
	}

	return <Question onClick={handleClick} onChange={handleChange} value={age} disabled={!age}/>;
};
