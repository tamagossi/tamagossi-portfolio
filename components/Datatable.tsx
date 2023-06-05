import React, { ChangeEvent, ReactElement, ReactNode, useState } from 'react';
import { CaretUpOutline, CloseCircleOutline } from 'react-ionicons';
import { motion } from 'framer-motion';
import { useDatatable } from '@/hooks';
import {
	ChakraProps,
	Checkbox,
	CheckboxProps,
	HStack,
	Heading,
	Table,
	TableBodyProps,
	TableHeadProps,
	TableProps,
	Tbody,
	Td,
	chakra,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
	Box,
} from '@chakra-ui/react';

import Pagination, { PaginationProps } from './pagination';

type ColumnStyleProps = {
	cellProps?: ChakraProps;
	headerProps?: ChakraProps;
};

export type Column<Data extends object> = {
	header: ReactNode | string;
	key: keyof Data;
	render?: (data: string | number | boolean | Date | undefined, row: Data) => ReactNode | string;
	sortable?: boolean;
	freeze?: boolean;
} & ColumnStyleProps;

type DataProps<Data extends object> = {
	columns: Column<Data>[];
	data: Data[];
};

type StyleProps = {
	tableProps?: TableProps;
	tBodyProps?: TableBodyProps;
	tHeaderProps?: TableHeadProps;
	headerCellProps?: ChakraProps;
};

type SelectProps = {
	checkboxProps?: CheckboxProps;
	rowKey?: string;
	selectable?: boolean;
};

type DatatableProps<Data extends object> = DataProps<Data> &
	StyleProps &
	SelectProps &
	PaginationProps;

const Datatable = <Data extends object>({
	tableProps,
	tBodyProps,
	tHeaderProps,
	headerCellProps,
	checkboxProps,
	selectable,
	columns,
	data,
	rowKey = 'id',
	...paginationProps
}: DatatableProps<Data>): ReactElement => {
	const { isError, sort, updateSort } = useDatatable();

	const [selected, setSelected] = useState<Record<string, boolean>>({});

	const updateSelectedData = (e: ChangeEvent<HTMLInputElement>, id: string) => {
		const checked = e.target.checked;

		if (checked) {
			setSelected((prev) => ({
				...prev,
				[id]: true,
			}));
		} else {
			const newSelected = { ...selected };
			delete newSelected[id];

			setSelected(newSelected);
		}
	};

	if (isError)
		return (
			<VStack w="100%" py={5}>
				<CloseCircleOutline height="120px" width="120px" />

				<VStack>
					<Heading>Error!!</Heading>

					<Text>Datatable should wrapped with it&apos;s Provider</Text>
				</VStack>
			</VStack>
		);

	return (
		<VStack spacing="4" w="100%">
			<Box w="100%" borderRadius={5} overflow="auto" display="block" whiteSpace="nowrap">
				<Table {...tableProps}>
					<Thead {...tHeaderProps}>
						<Tr>
							{selectable && (
								<Th position="sticky" left="0" background="#141414"></Th>
							)}

							{columns.map((col, index) => {
								return (
									<Th
										background="#141414"
										key={'header' + (col.key as string) + index}
										cursor={col.sortable ? 'pointer' : 'auto'}
										alignItems="center"
										verticalAlign="middle"
										position={col.freeze ? 'sticky' : 'initial'}
										{...col.headerProps}
										{...headerCellProps}
										onClick={() => {
											if (col.sortable) {
												updateSort(col.key as string);
											}
										}}
									>
										<Text display="inline-block">{col.header}</Text>

										{sort[col.key as string] && (
											<chakra.span
												display="inline-block"
												ml={3}
												as={motion.span}
												animate={{
													rotate:
														sort[col.key as string] === 'desc'
															? '180deg'
															: '0deg',
													transition: {
														duration: 0.4,
													},
												}}
											>
												<CaretUpOutline
													color="#FFFFFF"
													height="12px"
													width="12px"
												/>
											</chakra.span>
										)}
									</Th>
								);
							})}
						</Tr>
					</Thead>

					<Tbody {...tBodyProps}>
						{data.map((row: Data, id) => {
							return (
								<Tr key={'data-row' + id}>
									{selectable && (
										<Td
											width="8px"
											position="sticky"
											left="0"
											background="#141414"
										>
											<Checkbox
												{...(checkboxProps as any)}
												onChange={(e) =>
													updateSelectedData(e, (row as any)[rowKey])
												}
											/>
										</Td>
									)}

									{columns.map((col, index) => {
										return (
											<Td
												key={'data-item' + (col.key as string) + index}
												position={col.freeze ? 'sticky' : 'initial'}
												background="#141414"
												{...col.cellProps}
											>
												{col.render
													? col.render((row as any)[col.key], row)
													: (row as any)[col.key]}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Box>

			{!isError && (
				<HStack justify="end" w="100%">
					<Pagination {...paginationProps} />
				</HStack>
			)}
		</VStack>
	);
};

export default Datatable;
