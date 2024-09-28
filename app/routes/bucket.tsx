import { Layout } from '@/components/Layout';
import { Bucket } from '@/features/bucket/components/Bucket';
import { TaskListContainer } from '@/features/bucket/components/TaskListContainer';
import { useLocalStorageTask } from '@/hooks/useLocalStorageTask';
import type { Buckets } from '@/types';
import { Box, Flex } from '@mantine/core';
import { useEffect, useState } from 'react';

const Index = () => {
	const [buckets, setBuckets] = useState<Buckets>([]);

	useEffect(() => {
		setBuckets([
			{
				id: 1,
				age: {
					start: 20,
					end: 29,
				},
				tasks: [
					{
						id: 1,
						content: 'Task 1',
					},
					{
						id: 2,
						content: 'Task 2',
					},
				],
			},
			{
				id: 2,
				age: {
					start: 30,
					end: 39,
				},
				tasks: [
					{
						id: 3,
						content: 'Task 3',
					},
					{
						id: 4,
						content: 'Task 4',
					},
				],
			},
		]);
	}, []);

	const { loadTasksFromLocalStorage } = useLocalStorageTask();

	const tasks = loadTasksFromLocalStorage() ?? [];

	return (
		<Layout>
			<Flex style={{ gap: '16px', width: '100%', height: '100%' }}>
				<Box style={{ width: '300px', flexShrink: 0 }}>
					<TaskListContainer tasks={tasks} />
				</Box>
				<Box style={{ flexGrow: 1, minWidth: 0, overflowX: 'auto' }}>
					<Flex style={{ width: '100%', height: '100%' }}>
						{buckets.map((bucket) => (
							<Bucket key={bucket.age.start} bucket={bucket} />
						))}
					</Flex>
				</Box>
			</Flex>
		</Layout>
	);
};

export default Index;
