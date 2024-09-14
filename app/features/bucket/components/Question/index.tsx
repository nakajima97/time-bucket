import { Box, Flex } from '@mantine/core';
import { BucketList } from '../BucketList/Index';
import { TaskList } from '../TaskList';

export const Question = () => {
	return (
		<Flex style={{ gap: '16px', width: '100%', height: '100%' }}>
			<Box style={{ width: '300px', flexShrink: 0 }}>
				<TaskList />
			</Box>
			<Box style={{ flexGrow: 1, minWidth: 0, overflowX: 'auto' }}>
				<BucketList />
			</Box>
		</Flex>
	);
};
