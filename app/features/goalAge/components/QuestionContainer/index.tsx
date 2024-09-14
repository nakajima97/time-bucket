import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/task');
	};

	return <Question onClick={handleClick} />;
};
