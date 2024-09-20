import { Button, Flex, Input, Text } from '@mantine/core';
import { QuestionBase } from '@/components/QuestionBase';
import { TaskListContainer } from '../TaskListContainer';
import { Tasks } from '../../types';

type Props = {
	age: number;
	tasks: Tasks;
	inputValue: string;
	addTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onClick: () => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Question = ({ age = 10, onClick = () => {}, tasks = [], addTask, onChange, inputValue}: Props) => {
	return (
		<QuestionBase>
			<Text>{age}歳までにやりたいことは何ですか？</Text>
			<Flex style={{ gap: '10px' }}>
				<Input type="text" placeholder="やりたいことを入力してください" onChange={onChange} value={inputValue}/>
				<Button onClick={addTask}>追加</Button>
			</Flex>
			<TaskListContainer tasks={tasks} />
			<Button onClick={onClick}>次へ</Button>
		</QuestionBase>
	);
};
