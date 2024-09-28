import { QuestionBase } from '@/components/QuestionBase';
import { Button, Flex, Input, Text } from '@mantine/core';
import type { Tasks } from '../../../../types';
import { TaskListContainer } from '../TaskListContainer';

type Props = {
	age: number;
	tasks: Tasks;
	inputValue: string;
	addTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onClick: () => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Question = ({
	age = 10,
	onClick = () => {},
	tasks = [],
	addTask,
	onChange,
	inputValue,
}: Props) => {
	return (
		<QuestionBase>
			<Text>{age}歳までにやりたいことは何ですか？</Text>
			<Flex style={{ gap: '10px' }}>
				<Input
					type="text"
					placeholder="やりたいことを入力してください"
					onChange={onChange}
					value={inputValue}
				/>
				<Button onClick={addTask}>追加</Button>
			</Flex>
			<TaskListContainer tasks={tasks} />
			<Button onClick={onClick} disabled={tasks.length === 0}>
				次へ
			</Button>
		</QuestionBase>
	);
};
