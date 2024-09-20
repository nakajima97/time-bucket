import { QuestionBase } from '@/components/QuestionBase';
import { Button, Input, Text } from '@mantine/core';
import { useNavigate } from '@remix-run/react';
import type { FC } from 'react';

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
			<Text>何歳までの計画を立てますか？</Text>
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
