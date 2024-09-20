import { QuestionBase } from '@/components/QuestionBase';
import { Button, Input, Text } from '@mantine/core';

type Props = {
	value: number | undefined;
	disabled: boolean;
	onClick: () => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Question = ({
	value = undefined,
	disabled = false,
	onClick = () => {},
	onChange = () => {},
}: Props) => {
	return (
		<QuestionBase>
			<Text>何歳までの計画を立てますか？</Text>
			<Input
				type="number"
				placeholder="年齢を入力してください"
				onChange={onChange}
				value={value}
			/>
			<Button onClick={onClick} disabled={disabled}>
				次へ
			</Button>
		</QuestionBase>
	);
};
