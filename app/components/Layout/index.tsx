import { Box } from '@mantine/core';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return <Box style={{ width: '100dvw', height: '100dvh' }}>{children}</Box>;
};
