import { AppShell, Box, Button, Flex, Text } from '@mantine/core';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<AppShell
			header={{ height: 60 }}
			style={{
				width: '100dvw',
				height: '100dvh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<AppShell.Header
				style={{
					backgroundColor: '#1976D2',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Text size="lg" style={{ color: 'white' }}>
					タイムバケットアプリ
				</Text>
				<Button>データクリア</Button>
			</AppShell.Header>
			<AppShell.Main style={{ flexGrow: 1, paddingY: '16px' }}>
				{children}
			</AppShell.Main>
		</AppShell>
	);
};
