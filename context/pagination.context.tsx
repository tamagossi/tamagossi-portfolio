import { ReactNode, createContext, useMemo, useState } from 'react';

export type PaginationContextProps = {
	page: number;
	setPage: (page: number) => void;
	limit: number;
	setLimit: (limit: number) => void;
};

export const PaginationContext = createContext({} as PaginationContextProps);

const PaginationProvider = ({ children }: { children: ReactNode }) => {
	const [limit, setLimit] = useState<number>(5);
	const [page, setPage] = useState<number>(1);

	const values: PaginationContextProps = useMemo(() => {
		return {
			limit,
			setLimit,
			page,
			setPage,
		};
	}, [limit, page]);

	return <PaginationContext.Provider value={values}>{children}</PaginationContext.Provider>;
};

export default PaginationProvider;
