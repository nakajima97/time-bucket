export type Task = {
	id: number;
	content: string;
};

export type Tasks = Task[];

export type BucketType = {
	id: number;
	age: {
		start: number;
		end: number;
	};
	tasks: Tasks;
	isTaskOnly?: boolean;
};

export type Buckets = BucketType[];
