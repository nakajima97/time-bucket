import { QuestionBase } from "@/components/QuestionBase";
import { Button, Input, Text } from "@mantine/core";
import { useNavigate } from "@remix-run/react";

export const GoalAge = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/task')
	}

  return (
    <QuestionBase>
			<Text>何歳までの計画を立てますか？</Text>
			<Input type="number" placeholder="年齢を入力してください" />
			<Button onClick={handleClick}>次へ</Button>
		</QuestionBase>
  );
}