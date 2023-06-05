import React from 'react';
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react';

import { useGetExperiences, usePagination } from '@/hooks';
import { Layout, Datatable, Column, Button } from '@/components';
import { Experience } from 'interface';
import { DatatableProvider } from '@/context';
import dayjs from 'dayjs';
import { OpenOutline, PencilOutline, TrashOutline } from 'react-ionicons';

const DashboardExperiencePage = () => {
	const { page, limit } = usePagination();
	const {
		data: experience,
		isError,
		isLoading,
	} = useGetExperiences({
		params: {
			page,
			limit,
		},
	});

	const columns: Column<Experience>[] = [
		{
			key: 'title',
			header: 'Title',
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
			render: (date) => dayjs(date as string).format('MMMM YYYY'),
		},
		{
			key: 'end_date',
			header: 'End Date',
			render: (date) => {
				return !date ? 'Currently working' : dayjs(date as string).format('MMMM YYYY');
			},
		},
		{
			key: 'id',
			header: '',
			freeze: true,
			cellProps: { right: 0 },
			headerProps: { right: 0 },
			render: (date) => {
				return (
					<HStack>
						<Button as="a" href={`/dashboard/experiences/${date}`} px={2}>
							<OpenOutline />
						</Button>

						<Button as="a" href={`/dashboard/experiences/${date}/edit`} px={2}>
							<PencilOutline />
						</Button>

						<Button px={2}>
							<TrashOutline />
						</Button>
					</HStack>
				);
			},
		},
	];

	return (
		<Layout title="Experiences" isError={isError}>
			{isLoading ? null : (
				<VStack align="end" spacing={5}>
					<HStack justify="end">
						<Box>
							<Button as="a" href="/dashboard/experiences/create">
								Create
							</Button>
						</Box>
					</HStack>

					{typeof experience === 'undefined' ? null : (
						<Datatable<Experience>
							columns={columns}
							totalData={experience.meta.total_data}
							headerCellProps={{ color: 'white' }}
							data={experience.data}
						/>
					)}
				</VStack>
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
