import { QuestionBase } from '@/components/QuestionBase';
import { Button, Flex, Input, Paper, Text } from '@mantine/core';
import type { MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix SPA' },
		{ name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
	];
};

export default function AgeVerification() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/goal')
	}

	return (
		<QuestionBase>
			<Text>あなたは現在何歳ですか？</Text>
			<Input type="number" placeholder="年齢を入力してください" />
			<Button onClick={handleClick}>次へ</Button>
		</QuestionBase>
	);
}
