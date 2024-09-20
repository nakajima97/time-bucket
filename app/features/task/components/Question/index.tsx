import { Button, Flex, Input, Text } from '@mantine/core';

import { QuestionBase } from '@/components/QuestionBase';

import { TaskListContainer } from '../TaskListContainer';

type Props = {
	age: number;
	onClick: () => void;
};

export const Question = ({ age = 10, onClick = () => {} }: Props) => {
	return (
		<QuestionBase>
			<Text>{age}歳までにやりたいことは何ですか？</Text>
			<Flex style={{ gap: '10px' }}>
				<Input type="text" placeholder="やりたいことを入力してください" />
				<Button>追加</Button>
			</Flex>
			<TaskListContainer />
			<Button onClick={onClick}>次へ</Button>
		</QuestionBase>
	);
};
