import { Box, Flex } from '@mantine/core';
import { Bucket } from '../Bucket';

export const BucketList = () => {
	const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

	return (
		<Flex style={{ width: '100%', height: '100%' }}>
			{ages.map((age) => (
				<Bucket key={age} age={age} />
			))}
		</Flex>
	);
};
