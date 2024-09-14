import { QuestionBase } from '@/components/QuestionBase';
import { Button, Input, Text } from '@mantine/core';
import type { MetaFunction } from '@remix-run/node';
import type { FC } from 'react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix SPA' },
		{ name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
	];
};

type Props = {
	onClick: () => void;
};

export const Question: FC<Props> = ({ onClick }) => {
	return (
		<QuestionBase>
			<Text>あなたは現在何歳ですか？</Text>
			<Input type="number" placeholder="年齢を入力してください" />
			<Button onClick={onClick}>次へ</Button>
		</QuestionBase>
	);
};
