import { Layout } from '@/components/Layout';
import { BucketListContainer } from '@/features/bucket/components/BucketListContainer';
import { TaskListContainer } from '@/features/bucket/components/TaskListContainer';
import { Box, Flex } from '@mantine/core';

const Index = () => {
	return (
		<Layout>
			<Flex style={{ gap: '16px', width: '100%', height: '100%' }}>
			<Box style={{ width: '300px', flexShrink: 0 }}>
				<TaskListContainer />
			</Box>
			<Box style={{ flexGrow: 1, minWidth: 0, overflowX: 'auto' }}>
				<BucketListContainer />
			</Box>
		</Flex>
		</Layout>
	);
};

export default Index;
