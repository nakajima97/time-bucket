import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const navigate = useNavigate();

	const handleNextQuestion = () => {
		navigate('/bucket');
	};

	return <Question onClick={handleNextQuestion} />;
};
