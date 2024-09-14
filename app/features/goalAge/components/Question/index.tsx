import { QuestionBase } from '@/components/QuestionBase';
import { Button, Input, Text } from '@mantine/core';
import { useNavigate } from '@remix-run/react';
import type { FC } from 'react';

type Props = {
	onClick: () => void;
};

export const Question: FC<Props> = ({ onClick }) => {
	return (
		<QuestionBase>
			<Text>何歳までの計画を立てますか？</Text>
			<Input type="number" placeholder="年齢を入力してください" />
			<Button onClick={onClick}>次へ</Button>
		</QuestionBase>
	);
};
