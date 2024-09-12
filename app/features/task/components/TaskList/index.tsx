import { Box, List } from "@mantine/core"

export const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
    },
    {
      id: 2,
      title: 'Task 2',
    },
    {
      id: 3,
      title: 'Task 3',
    },
  ]

  return (
    <Box>
      <List>
        {tasks.map((task) => (
          <List.Item key={task.id}>{task.title}</List.Item>
        ))}
      </List>
    </Box>
  )
}