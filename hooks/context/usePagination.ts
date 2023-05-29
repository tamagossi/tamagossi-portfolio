import { useContext } from 'react';
import { PaginationContext } from '@/context';

const usePagination = () => {
	const values = useContext(PaginationContext);

	return { ...values, isError: Object.keys(values).length === 0 };
};

export default usePagination;
