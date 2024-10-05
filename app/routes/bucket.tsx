import { Layout } from '@/components/Layout';
import { Bucket } from '@/features/bucket/components/Bucket';
import { TaskListContainer } from '@/features/bucket/components/TaskListContainer';
import { useLocalStorageTask } from '@/hooks/useLocalStorageTask';
import type { Buckets } from '@/types';
import { DragDropContext, type DropResult } from '@hello-pangea/dnd';
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

	// ドラッグアンドドロップの実装
	const onDragEnd = (result: DropResult) => {
		// 範囲外にドロップしたら何もしない
		if (!result.destination) {
			return;
		}

		setBuckets((prev) => {
			const newBuckets = prev.map((bucket) => {
				// ドラッグされたタスクを削除
				if (bucket.id === Number.parseInt(result.source.droppableId)) {
					return {
						...bucket,
						tasks: bucket.tasks.filter(
							(task) => task.id !== Number.parseInt(result.draggableId),
						),
					};
				}

				// ドロップ先のバケツにタスクを追加
				if (
					result.destination &&
					bucket.id === Number.parseInt(result.destination.droppableId)
				) {
					const newTasks = [...bucket.tasks];
					newTasks.splice(result.destination.index, 0, {
						id: Number.parseInt(result.draggableId),
						content:
							prev
								.find(
									(b) => b.id === Number.parseInt(result.source.droppableId),
								)
								?.tasks.find(
									(t) => t.id === Number.parseInt(result.draggableId),
								)?.content ?? '',
					});
					return {
						...bucket,
						tasks: newTasks,
					};
				}

				return bucket;
			});
			return newBuckets;
		});
	};

	return (
		<Layout>
			<DragDropContext onDragEnd={onDragEnd}>
				<Flex style={{ gap: '16px', width: '100%', height: '100%' }}>
					<Box style={{ width: '300px', flexShrink: 0 }}>
						<TaskListContainer tasks={tasks} droppableId="task-list" />
					</Box>
					<Box style={{ flexGrow: 1, minWidth: 0, overflowX: 'auto' }}>
						<Flex style={{ width: '100%', height: '100%' }}>
							{buckets.map((bucket) => (
								<Bucket key={bucket.age.start} bucket={bucket} />
							))}
						</Flex>
					</Box>
				</Flex>
			</DragDropContext>
		</Layout>
	);
};

export default Index;
