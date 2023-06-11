import React, { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import { HStack } from '@chakra-ui/react';

import styles from './index.module.css';
import { useEffectOnce, usePagination } from '@/hooks';

export type PaginationProps = {
	totalData: number;
	perPage?: number;
	showPageSizeChanger?: boolean;
	pageSizeOptions?: { label: string; value: number }[];
};

const Pagination: FC<PaginationProps> = ({
	pageSizeOptions,
	perPage = 10,
	showPageSizeChanger = true,
	totalData,
}): ReactElement => {
	const { setPage, limit, setLimit } = usePagination();

	useEffectOnce(() => {
		setLimit(perPage);
	});

	return (
		<HStack>
			<ReactPaginate
				activeLinkClassName={styles['pagination-active']}
				containerClassName={styles.pagination}
				disabledLinkClassName={styles['disabled']}
				nextLabel="Next →"
				nextLinkClassName={`${styles['pagination-item']} ${styles['arrow-item']}`}
				onPageChange={({ selected }) => setPage(selected + 1)}
				pageCount={Math.ceil(totalData / limit)}
				pageLinkClassName={styles['pagination-item']}
				previousLabel="← Previous"
				previousLinkClassName={`${styles['pagination-item']} ${styles['arrow-item']}`}
			/>

			{showPageSizeChanger && (
				<Select
					onChange={(selected) => setLimit(selected!.value)}
					placeholder="Data per page..."
					menuPlacement="top"
					styles={{
						menu: (styles) => ({ ...styles, background: 'black' }),
						control: (styles) => ({ ...styles, background: 'black', color: 'white' }),
					}}
					options={
						pageSizeOptions || [
							{
								value: 10,
								label: '10',
							},
							{
								value: 20,
								label: '20',
							},
							{
								value: 30,
								label: '30',
							},
							{
								value: 50,
								label: '50',
							},
							{
								value: 100,
								label: '100',
							},
						]
					}
				/>
			)}
		</HStack>
	);
};

export default Pagination;
