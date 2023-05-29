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
	perPage = 5,
	showPageSizeChanger = true,
	totalData,
}): ReactElement => {
	const { page, setPage, limit, setLimit } = usePagination();

	useEffectOnce(() => {
		setLimit(perPage);
	});

	return (
		<HStack>
			<ReactPaginate
				previousLabel="← Previous"
				nextLabel="Next →"
				pageCount={Math.ceil(totalData / limit)}
				onPageChange={({ selected }) => setPage(selected)}
				containerClassName={styles.pagination}
				pageLinkClassName={styles['pagination-item']}
				previousLinkClassName={`${styles['pagination-item']} ${styles['arrow-item']}`}
				nextLinkClassName={`${styles['pagination-item']} ${styles['arrow-item']}`}
				activeLinkClassName={styles['pagination-active']}
				disabledLinkClassName={styles['disabled']}
			/>

			{showPageSizeChanger && (
				<Select
					onChange={(selected) => setLimit(selected!.value)}
					placeholder="Data per page..."
					menuPlacement="top"
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
