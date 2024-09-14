import { Button, Flex, Input, Text } from "@mantine/core"
import { useNavigate } from "@remix-run/react"

import { QuestionBase } from "@/components/QuestionBase"

import { TaskList } from "../TaskList"

export const Question = () => {
  const navigate = useNavigate()
  
  const handleNextQuestion = () => {
    navigate('/bucket')
  }

  return (
    <QuestionBase>
      <Text>〇歳までにやりたいことは何ですか？</Text>
      <Flex style={{ gap: '10px' }}>
        <Input type="text" placeholder="やりたいことを入力してください" />
        <Button>追加</Button>
      </Flex>
      <TaskList />
      <Button onClick={handleNextQuestion}>次へ</Button>
    </QuestionBase>
  )
}