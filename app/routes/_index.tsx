import { QuestionContainer } from '@/features/ageVerification/components/QuestionContainer';
import type { MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix SPA' },
		{ name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
	];
};

export default function Index() {
	return <QuestionContainer />;
}
