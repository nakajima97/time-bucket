import { Box, Flex } from "@mantine/core";
import { TaskList } from "../TaskList";
import { BucketList } from "../BucketList/Index";

export const Question = () => {
  return (
    <Flex style={{ gap: '16px', width: '100%' }}>
      <Box style={{ width: '300px' }}>
        <TaskList />
      </Box>
      <Box style={{ flexGrow: 1, minWidth: 0 }}>
        <BucketList />
      </Box>
    </Flex>
  );
};