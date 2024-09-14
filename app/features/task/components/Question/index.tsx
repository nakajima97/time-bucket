import { QuestionBase } from "@/components/QuestionBase"
import { Button, Flex, Input, Text } from "@mantine/core"
import { TaskList } from "../TaskList"

export const Question = () => {
  return (
    <QuestionBase>
      <Text>〇歳までにやりたいことは何ですか？</Text>
      <Flex style={{ gap: '10px' }}>
        <Input type="text" placeholder="やりたいことを入力してください" />
        <Button>追加</Button>
      </Flex>
      <TaskList />
      <Button>次へ</Button>
    </QuestionBase>
  )
}