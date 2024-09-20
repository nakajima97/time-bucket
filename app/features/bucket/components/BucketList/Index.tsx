import { Flex } from '@mantine/core';
import { Bucket } from '../Bucket';

type Props = {
	ages: {
		start: number;
		end: number;
	}[];
};

export const BucketList = ({ ages }: Props) => {
	return (
		<Flex style={{ width: '100%', height: '100%' }}>
			{ages.map((age) => (
				<Bucket key={age.start} age={age} />
			))}
		</Flex>
	);
};
