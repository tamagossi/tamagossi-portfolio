import { ReactNode, createContext, useMemo, useState } from 'react';
import PaginationProvider, { PaginationContextProps } from './pagination.context';
import { usePagination } from '@/hooks';

export type DatatableContextProps = PaginationContextProps & {
	updateSort: (key: string) => void;
	sort: Record<string, 'asc' | 'desc' | undefined>;
};

export const DatatableContext = createContext({} as DatatableContextProps);
export type DatatableFilter = {
	value: string;
	operator: 'eq' | 'in' | 'lte' | 'gte';
};

const DatatableProvider = ({ children }: { children: ReactNode }) => {
	const [sort, setSort] = useState<Record<string, 'asc' | 'desc' | undefined>>({});
	const [filter, setFilter] = useState<Record<string, DatatableFilter>>({});
	const { limit, page, ...rest } = usePagination();

	const updateSort = (key: string) => {
		setSort((prev) => {
			return {
				...prev,
				[key]: !(sort as any)[key] ? 'asc' : sort[key] === 'asc' ? 'desc' : undefined,
			};
		});
	};

	const values: DatatableContextProps = useMemo(() => {
		return {
			limit,
			page,
			sort,
			filter,
			setFilter,
			updateSort,
			...rest,
		};
	}, [limit, page, sort]);

	return <DatatableContext.Provider value={values}>{children}</DatatableContext.Provider>;
};

const WrapperWithPaginationContext = ({ children }: { children: ReactNode }) => {
	return (
		<PaginationProvider>
			<DatatableProvider>{children}</DatatableProvider>
		</PaginationProvider>
	);
};

export default WrapperWithPaginationContext;
