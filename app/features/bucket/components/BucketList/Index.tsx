import { Box, Flex } from '@mantine/core';
import { Bucket } from '../Bucket';

export const BucketList = () => {
	const ages = [
		{
			start: 10,
			end: 20,
		},
		{
			start: 11,
			end: 20,
		},
		{
			start: 21,
			end: 30,
		},
		{
			start: 31,
			end: 40,
		},
		{
			start: 41,
			end: 50,
		},
		{
			start: 51,
			end: 60,
		},
	];

	return (
		<Flex style={{ width: '100%', height: '100%' }}>
			{ages.map((age) => (
				<Bucket key={age.start} age={age} />
			))}
		</Flex>
	);
};
