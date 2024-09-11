import { Flex, Paper } from '@mantine/core';
import type { FC } from 'react';

type Props = {
	children: React.ReactNode;
};

export const QuestionBase: FC<Props> = ({ children }) => {
	return (
		<Flex
			style={{
				width: '100dvw',
				height: '100dvh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Paper
				shadow="xs"
				style={{
					padding: '16px',
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				{children}
			</Paper>
		</Flex>
	);
};
