import { useLocalStorageGoalAge } from '@/hooks/useLocalStorageGoalAge';
import { useLocalStorageStartAge } from '@/hooks/useLocalStorageStartAge';
import { L } from 'vitest/dist/chunks/reporters.WnPwkmgA.js';
import { BucketList } from '../BucketList/Index';

export const BucketListContainer = () => {
	const { loadGoalAgeFromLocalStorage } = useLocalStorageGoalAge();
	const { loadStartAgeFromLocalStorage } = useLocalStorageStartAge();

	const generateAges = () => {
		const ageBucketSize = 10;
		const startAge = loadStartAgeFromLocalStorage();
		const goalAge = loadGoalAgeFromLocalStorage();

		if (!startAge || !goalAge) {
			return [];
		}

		// startAgeからgoalAgeまでの年齢をageBucketSizeごとに分割する
		const ages = [];
		for (let i = startAge; i <= goalAge; i += ageBucketSize) {
			ages.push({
				start: i,
				end: Math.min(i + ageBucketSize - 1, goalAge), // goalAgeを超えないようにする
			});
		}

		return ages;
	};

	const ages = generateAges();

	return <BucketList ages={ages} />;
};
