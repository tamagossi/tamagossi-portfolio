import { QueryOptions } from 'react-query';

const staleTime = 6 * 60 * 60 * 1000;

const generateQueryOptions = (options?: Object) => ({
	cacheTime: staleTime,
	refetchOnWindowFocus: false,
	...options,
});

export default generateQueryOptions;
