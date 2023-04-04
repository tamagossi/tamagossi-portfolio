import React, { ReactElement } from 'react';
import { FormErrorMessage, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AtomButton } from '@/components/atoms';

const OrganismContactForm = (): ReactElement => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (values: any) => {
		console.log(values);
	};

	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack spacing={5} alignItems="start">
				<HStack spacing={16}>
					<Input
						focusBorderColor="#FF008C"
						placeholder="Full name"
						variant="flushed"
						width="290px"
						{...register('full_name', {
							required: 'Please enter your name',
						})}
					/>

					{errors.full_name && (
						<FormErrorMessage>{errors.full_name.message as any}</FormErrorMessage>
					)}

					<Input
						focusBorderColor="#FF008C"
						placeholder="Email"
						variant="flushed"
						width="290px"
						{...register('email', {
							required: 'Please enter your email',
							pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
						})}
					/>

					{errors.email && (
						<FormErrorMessage>{errors.email.message as any}</FormErrorMessage>
					)}
				</HStack>

				<Textarea
					focusBorderColor="#FF008C"
					placeholder="Tell me what you need"
					resize="none"
					rows={3}
					variant="flushed"
					{...register('description', {
						required: 'Please tell me your need :)',
					})}
				/>

				{errors.description && (
					<FormErrorMessage>{errors.description.message as any}</FormErrorMessage>
				)}

				<div style={{ marginTop: 12 }} />

				<AtomButton type="submit">SEND A MESSAGE</AtomButton>
			</VStack>
		</form>
	);
};

export default OrganismContactForm;
