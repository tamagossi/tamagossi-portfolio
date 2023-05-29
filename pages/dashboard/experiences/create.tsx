import React from 'react';
import dayjs from 'dayjs';

import { Button, DateInput, Form, Layout, TextArrayInput, TextInput } from '@/components';
import { HStack, VStack, useToast } from '@chakra-ui/react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useAddExperienceMutation } from '@/hooks';

const ExperienceCreatePage = () => {
	const { push } = useRouter();
	const toast = useToast();

	const experienceMtn = useAddExperienceMutation();
	const form = useForm<{
		title: string;
		company: string;
		company_url: string;
		start_date: string;
		end_date: string;
		descriptions: {
			value: string;
		}[];
	}>();

	const create = async () => {
		const valid = await form.trigger();
		if (!valid) {
			toast({
				status: 'error',
				description: 'Please check your form 😱',
				title: 'Form error',
				position: 'bottom-left',
			});
			return;
		}

		const values = form.getValues();

		experienceMtn.mutate(
			{
				...values,
				end_date: dayjs(values.end_date).toISOString(),
				start_date: dayjs(values.start_date).toISOString(),
				descriptions: values.descriptions.map((desc) => desc.value).join(' * '),
			},
			{
				onSuccess: () => push('/dashboard/experiences'),
			}
		);
	};

	return (
		<Layout title="Add New Experience">
			<Form
				form={form as unknown as UseFormReturn}
				onChange={() => form.trigger()}
				onSubmit={create}
			>
				<VStack w="100%" spacing={4}>
					<TextInput
						name="title"
						label="Title"
						rules={{ required: 'Cannot be empty' }}
						placeholder="Software Engineer"
					/>

					<TextInput
						name="company"
						label="Company"
						rules={{ required: 'Cannot be empty' }}
						placeholder="Staffinc Group"
					/>

					<TextInput
						name="company_url"
						label="Company website"
						rules={{ required: 'Cannot be empty' }}
						placeholder="Staffinc Group"
					/>

					<TextArrayInput
						name="descriptions"
						label="Description"
						placeholder="Description"
						rules={{ required: 'Tidak boleh kosong' }}
					/>

					<DateInput
						name="start_date"
						label="Start date"
						rules={{ required: 'Cannot be empty' }}
						placeholder={dayjs('2018/01/01').format('DD/MMMM/YYYY')}
					/>

					<DateInput
						name="end_date"
						label="End date"
						rules={{ required: 'Cannot be empty' }}
						placeholder="Staffinc Group"
						isEndDate
						endDateLabel="Still working here"
					/>

					<HStack justify="end" w="100%">
						<Button block={false} onClick={create}>
							Create
						</Button>
					</HStack>
				</VStack>
			</Form>
		</Layout>
	);
};

export default ExperienceCreatePage;
