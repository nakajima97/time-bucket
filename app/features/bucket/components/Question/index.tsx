import { Box, Flex } from '@mantine/core';
import { TaskListContainer } from '../TaskListContainer';
import { BucketListContainer } from '../BucketListContainer';

export const Question = () => {
	return (
		<Flex style={{ gap: '16px', width: '100%', height: '100%' }}>
			<Box style={{ width: '300px', flexShrink: 0 }}>
				<TaskListContainer />
			</Box>
			<Box style={{ flexGrow: 1, minWidth: 0, overflowX: 'auto' }}>
				<BucketListContainer />
			</Box>
		</Flex>
	);
};
