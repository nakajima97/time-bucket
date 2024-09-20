import { useNavigate } from '@remix-run/react';
import { Question } from '../Question';
import { useLocalStorage } from '@mantine/hooks';
import { localStorageKeys } from '@/utils/constants/localStorageKeys';

export const QuestionContainer = () => {
	const [goalAge] = useLocalStorage({ key: localStorageKeys.goalAge });

	const navigate = useNavigate();

	const handleNextQuestion = () => {
		navigate('/bucket');
	};

	return <Question age={Number(goalAge)} onClick={handleNextQuestion} />;
};
