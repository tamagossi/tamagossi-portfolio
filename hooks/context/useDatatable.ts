import { useContext } from 'react';
import { DatatableContext, DatatableContextProps } from '@/context';

const useDatatable = () => {
	const values = useContext(DatatableContext);

	return { ...values, isError: Object.keys(values).length === 0 };
};

export default useDatatable;
