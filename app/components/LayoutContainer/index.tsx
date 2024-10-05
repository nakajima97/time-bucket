import { useClearLocalStorage } from '@/hooks/useClearLocalStorage';
import { useNavigate } from '@remix-run/react';
import { Layout } from '../Layout';

type Props = {
	children: React.ReactNode;
};

export const LayoutContainer = ({ children }: Props) => {
	const { clearLocalStorage } = useClearLocalStorage();
	const navigate = useNavigate();

	const onClick = () => {
		clearLocalStorage();

		navigate('/');
	};

	return <Layout onClick={onClick}>{children}</Layout>;
};
