import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Box,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';

import { useDeleteExperienceById, useGetExperiences, usePagination } from '@/hooks';
import { Layout, Datatable, Column, Button } from '@/components';
import { Experience } from 'interface';
import { DatatableProvider } from '@/context';

import { OpenOutline, PencilOutline, TrashOutline } from 'react-ionicons';

const DashboardExperiencePage = () => {
	const cancelRef = useRef();

	const [idToDelete, setIdToDelete] = useState<string | null>();

	const { page, limit } = usePagination();

	const deleteExpMtn = useDeleteExperienceById();
	const {
		data: experience,
		isError,
		isLoading,
		refetch,
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
			render: (id) => {
				return (
					<HStack>
						<Button as="a" href={`/dashboard/experiences/${id}`} px={2}>
							<OpenOutline />
						</Button>

						<Button as="a" href={`/dashboard/experiences/${id}/edit`} px={2}>
							<PencilOutline />
						</Button>

						<Button px={2} onClick={() => setIdToDelete(id as string)}>
							<TrashOutline />
						</Button>
					</HStack>
				);
			},
		},
	];

	const deleteExperience = () => {
		deleteExpMtn.mutate(idToDelete, {
			onSuccess: () => {
				refetch();
				setIdToDelete(null);
			},
		});
	};

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

			<AlertDialog
				isOpen={!!idToDelete}
				leastDestructiveRef={cancelRef as any}
				onClose={() => setIdToDelete(null)}
			>
				<AlertDialogOverlay>
					<AlertDialogContent bg="gray.800">
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Experience
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can&apos;t undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button onClick={() => setIdToDelete(null)}>Cancel</Button>

							<Button color="red" onClick={deleteExperience} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
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
