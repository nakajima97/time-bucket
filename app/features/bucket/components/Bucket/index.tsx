import type { BucketType } from '@/types';
import { Box, Divider, Flex, Text } from '@mantine/core';
import { CARD_WIDTH } from '../../constants';
import { TaskListContainer } from '../TaskListContainer';

type Props = {
	bucket: BucketType;
};

export const Bucket = ({ bucket }: Props) => {
	return (
		<Flex
			style={{
				flexDirection: 'column',
				border: '1px solid gray',
				minWidth: `${CARD_WIDTH + 20}px`,
				padding: '8px',
			}}
		>
			<Box style={{ flexGrow: 1, minHeight: 0 }}>
				<TaskListContainer tasks={bucket.tasks} />
			</Box>
			<Divider />
			<Box style={{ padding: '16px' }}>
				<Text style={{ width: '100%', textAlign: 'center' }}>
					{bucket.age.start === bucket.age.end
						? `${bucket.age.start}歳`
						: `${bucket.age.start}～${bucket.age.end}歳`}
				</Text>
			</Box>
		</Flex>
	);
};
