import { BucketList } from '../BucketList/Index';

export const BucketListContainer = () => {
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

	return <BucketList ages={ages} />;
};
