import React, { FC, ReactElement } from 'react';
import dayjs from 'dayjs';
import { HStack, VStack, useToast } from '@chakra-ui/react';
import { UseFormReturn, useForm } from 'react-hook-form';

import {
	Button,
	DateInput,
	Form,
	SingleCheckboxInput,
	TextAreaInput,
	TextInput,
} from '@/components';

export type ExperienceFormValue = {
	id?: string;
	title: string;
	company: string;
	company_url: string;
	start_date: string;
	end_date?: string;
	is_current?: boolean;
	descriptions:
		| {
				value: string;
		  }[]
		| string;
};

type ExperienceFormProps = {
	buttonLabel?: string;
	defaultValues?: ExperienceFormValue;
	disabled?: boolean;
	onSubmit?: (value: ExperienceFormValue) => void;
};

const ExperienceForm: FC<ExperienceFormProps> = ({
	buttonLabel,
	defaultValues,
	disabled,
	onSubmit,
}): ReactElement => {
	const toast = useToast();

	const form = useForm<ExperienceFormValue>({
		defaultValues: {
			...defaultValues,
			start_date: dayjs(defaultValues?.start_date).format('YYYY-MM'),
			end_date: defaultValues?.end_date
				? dayjs(defaultValues?.start_date).format('YYYY-MM')
				: undefined,
		},
	});

	const isCurrent = form.watch('is_current');

	const submit = async () => {
		const valid = await form.trigger();

		if (!valid) {
			toast({
				status: 'error',
				description: 'Please check your experience form 😱',
				title: 'Form error',
				position: 'bottom-left',
			});
			return;
		}

		const values = form.getValues();

		onSubmit?.({
			...values,
			end_date: values.end_date ? dayjs(values.end_date).toISOString() : undefined,
			start_date: dayjs(values.start_date).toISOString(),
		});
	};

	return (
		<Form
			form={form as unknown as UseFormReturn}
			onChange={() => form.trigger()}
			onSubmit={submit}
		>
			<VStack w="100%" spacing={4}>
				<TextInput
					name="title"
					label="Title"
					rules={{ required: 'Cannot be empty' }}
					placeholder="Software Engineer"
					disabled={disabled}
				/>

				<TextInput
					name="company"
					label="Company"
					rules={{ required: 'Cannot be empty' }}
					placeholder="Staffinc Group"
					disabled={disabled}
				/>

				<TextInput
					name="company_url"
					label="Company website"
					placeholder="Staffinc Group"
					disabled={disabled}
				/>

				<TextAreaInput
					name="descriptions"
					label="Description"
					placeholder="Description"
					rules={{ required: 'Tidak boleh kosong' }}
					disabled={disabled}
				/>

				<DateInput
					type="month"
					name="start_date"
					label="Start date"
					rules={{ required: 'Cannot be empty' }}
					placeholder={dayjs('2018/01/01').format('DD/MMMM/YYYY')}
					disabled={disabled}
				/>

				<VStack w="100%">
					<DateInput
						type="month"
						name="end_date"
						label="End date"
						placeholder="Staffinc Group"
						disabled={disabled || isCurrent}
					/>

					<SingleCheckboxInput name="is_current" disabled={disabled}>
						Currently working here
					</SingleCheckboxInput>
				</VStack>

				{buttonLabel && (
					<HStack justify="end" w="100%">
						<Button block={false} onClick={submit}>
							{buttonLabel}
						</Button>
					</HStack>
				)}
			</VStack>
		</Form>
	);
};

export default ExperienceForm;
