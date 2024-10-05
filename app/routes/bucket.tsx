import { Layout } from '@/components/Layout';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Bucket } from '@/features/bucket/components/Bucket';
import { useLocalStorageGoalAge } from '@/hooks/useLocalStorageGoalAge';
import { useLocalStorageStartAge } from '@/hooks/useLocalStorageStartAge';
import { useLocalStorageTask } from '@/hooks/useLocalStorageTask';
import type { BucketType, Buckets, Tasks } from '@/types';
import { DragDropContext, type DropResult } from '@hello-pangea/dnd';
import { Box, Flex } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';

const Index = () => {
	const [buckets, setBuckets] = useState<Buckets>([]);

	const { loadTasksFromLocalStorage } = useLocalStorageTask();
	const { loadStartAgeFromLocalStorage } = useLocalStorageStartAge();
	const { loadGoalAgeFromLocalStorage } = useLocalStorageGoalAge();

	const generateBuckets = useCallback(
		(startAge: number, goalAge: number) => {
			const tasks = loadTasksFromLocalStorage() ?? [];

			const buckets: Buckets = [
				{
					id: 0,
					age: {
						start: 0,
						end: 0,
					},
					tasks: tasks,
					isTaskOnly: true,
				},
			];

			for (let i = startAge; i <= goalAge; i += 10) {
				const endAge = i + 9 < goalAge ? i + 9 : goalAge;

				buckets.push({
					id: i / 10,
					age: {
						start: i,
						end: endAge,
					},
					tasks: [],
				});
			}

			return buckets;
		},
		[loadTasksFromLocalStorage],
	);

	useEffect(() => {
		const startAge = loadStartAgeFromLocalStorage();
		const goalAge = loadGoalAgeFromLocalStorage();

		const buckets = generateBuckets(startAge, goalAge);
		setBuckets(buckets);
	}, [
		loadStartAgeFromLocalStorage,
		loadGoalAgeFromLocalStorage,
		generateBuckets,
	]);

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
		<LayoutContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				<Flex style={{ gap: '16px', width: '100%', height: '100%' }}>
					<Box style={{ flexGrow: 1, minWidth: 0, overflowX: 'auto' }}>
						<Flex style={{ width: '100%', height: '100%' }}>
							{buckets.map((bucket) => (
								<Bucket key={bucket.age.start} bucket={bucket} />
							))}
						</Flex>
					</Box>
				</Flex>
			</DragDropContext>
		</LayoutContainer>
	);
};

export default Index;
