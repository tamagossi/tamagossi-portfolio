import { QueryKey, UseQueryOptions } from 'react-query';

type QueryOpts<TQueryFnData> = Omit<
	UseQueryOptions<any, Error, TQueryFnData, QueryKey>,
	'queryKey' | 'queryFn'
>;

export default QueryOpts;
