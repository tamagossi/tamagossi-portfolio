import { QueryOpts } from 'interface';

const time = 6 * 60 * 60 * 1000;

const generateQueryOptions = <TQueryFnData>(options?: QueryOpts<TQueryFnData>) => ({
	cacheTime: time,
	refetchOnWindowFocus: false,
	...options,
});

export default generateQueryOptions;
