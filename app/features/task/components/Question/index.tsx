import { QuestionBase } from "@/components/QuestionBase"
import { Button, Text } from "@mantine/core"
import { TaskList } from "../TaskList"

export const Question = () => {
  return (
    <QuestionBase>
      <Text>あなたは現在何歳ですか？</Text>
      <TaskList />
      <Button>次へ</Button>
    </QuestionBase>
  )
}