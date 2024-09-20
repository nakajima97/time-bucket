import { QuestionBase } from "@/components/QuestionBase";
import { Button, Input, Text } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import type { FC } from "react";

type Props = {
  age: number | undefined;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Question: FC<Props> = ({ age, onClick, onChange }) => {
  return (
    <QuestionBase>
      <Text>何歳までの計画を立てますか？</Text>
      <Input
        type="number"
        placeholder="年齢を入力してください"
        value={age ?? ""}
        onChange={onChange}
      />
      <Button onClick={onClick}>次へ</Button>
    </QuestionBase>
  );
};
