import { QuestionBase } from "@/components/QuestionBase";
import { Button, Input, Text } from "@mantine/core";

export const GoalAge = () => {
  return (
    <QuestionBase>
			<Text>何歳までの計画を立てますか？</Text>
			<Input type="number" placeholder="年齢を入力してください" />
			<Button>次へ</Button>
		</QuestionBase>
  );
}