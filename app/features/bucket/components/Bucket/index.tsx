import { Box, Divider, Flex, Text } from '@mantine/core';
import type { FC } from 'react';
import { CARD_WIDTH } from '../../constants';

type Props = {
	age: number;
};

export const Bucket: FC<Props> = ({ age }) => {
	return (
		<Flex
			style={{
				flexDirection: 'column',
				border: '1px solid gray',
				minWidth: `${CARD_WIDTH + 20}px`,
				padding: '8px',
			}}
		>
			<Box style={{ flexGrow: 1, minHeight: 0 }}></Box>
			<Divider />
			<Box style={{ padding: '16px' }}>
				<Text style={{ width: '100%', textAlign: 'center' }}>{age}代</Text>
			</Box>
		</Flex>
	);
};
