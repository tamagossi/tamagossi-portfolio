import React from 'react';
import { Text } from '@chakra-ui/react';

import { useGetExperiences } from '@/hooks';
import { Layout, Datatable, Column } from '@/components';
import { Experience } from 'interface';
import { DatatableProvider } from '@/context';
import dayjs from 'dayjs';

const DashboardExperiencePage = () => {
	const { data: experience } = useGetExperiences({ params: {} });

	const columns: Column<Experience>[] = [
		{
			key: 'title',
			header: 'Title',
			freeze: true,
			cellProps: { left: '4rem' },
			headerProps: { left: '4rem' },
		},
		{
			key: 'company',
			header: 'Company',
		},
		{
			key: 'company_url',
			header: 'Website',
			render: (url) => (
				<Text as="a" href={url as string} color="blue.400">
					visit website
				</Text>
			),
		},
		{
			key: 'start_date',
			header: 'Start Date',
			render: (date) => dayjs(date as string).format('DD MMMM YYYY'),
		},
		{
			key: 'end_date',
			header: 'End Date',
			render: (date) => {
				const string = dayjs(date as string).format('DD MMMM YYYY');
				return string.includes('1970') ? 'Currently working' : string;
			},
		},
	];

	return (
		<Layout title="Experiences">
			{typeof experience === 'undefined' ? null : (
				<Datatable<Experience>
					columns={columns}
					totalData={experience.meta.total_data}
					headerCellProps={{ color: 'white' }}
					data={experience.data}
					selectable
				/>
			)}
		</Layout>
	);
};

const WrapperWithProvider = () => {
	return (
		<DatatableProvider>
			<DashboardExperiencePage />
		</DatatableProvider>
	);
};

export default WrapperWithProvider;
