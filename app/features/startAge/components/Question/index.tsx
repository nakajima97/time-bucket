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
	value: number | undefined;
	disabled: boolean;
	onClick: () => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Question: FC<Props> = ({
	value = undefined,
	disabled = false,
	onClick = () => {},
	onChange = () => {},
}) => {
	return (
		<QuestionBase>
			<Text>あなたは現在何歳ですか？</Text>
			<Input
				type="number"
				placeholder="年齢を入力してください"
				onChange={onChange}
				value={value}
				min={0}
				max={120}
			/>
			<Button onClick={onClick} disabled={disabled}>
				次へ
			</Button>
		</QuestionBase>
	);
};
