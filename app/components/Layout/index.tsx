import { Box } from '@mantine/core';
import type { FC } from 'react';

type Props = {
	children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
	return <Box style={{ width: '100dvw', height: '100dvh' }}>{children}</Box>;
};
