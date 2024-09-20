import { localStorageKeys } from '@/utils/constants/localStorageKeys';
import { useLocalStorage } from '@mantine/hooks';
import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import type { Tasks } from '../../types';
import { Question } from '../Question';

export const QuestionContainer = () => {
	const [tasks, setTasks] = useState<Tasks>([]);
	const [inputValue, setInputValue] = useState('');
	const [goalAge] = useLocalStorage({ key: localStorageKeys.goalAge });

	const navigate = useNavigate();

	const handleNextQuestion = () => {
		navigate('/bucket');
	};

	const handleAddTask = (event: React.MouseEvent) => {
		setTasks([...tasks, { id: tasks.length, content: inputValue }]);
		setInputValue('');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<Question
			age={Number(goalAge)}
			onClick={handleNextQuestion}
			tasks={tasks}
			addTask={handleAddTask}
			onChange={handleChange}
			inputValue={inputValue}
		/>
	);
};
