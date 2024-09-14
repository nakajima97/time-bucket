import { Button, Flex, Input, Text } from '@mantine/core';

import { QuestionBase } from '@/components/QuestionBase';

import { TaskListContainer } from '../TaskListContainer';
import { FC } from 'react';

type Props = {
	onClick: () => void
};

export const Question: FC<Props> = ({ onClick }) => {
	return (
		<QuestionBase>
			<Text>〇歳までにやりたいことは何ですか？</Text>
			<Flex style={{ gap: '10px' }}>
				<Input type="text" placeholder="やりたいことを入力してください" />
				<Button>追加</Button>
			</Flex>
			<TaskListContainer />
			<Button onClick={onClick}>次へ</Button>
		</QuestionBase>
	);
};
