import { FC, ReactElement } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import {
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
	VStack,
} from '@chakra-ui/react';

import { useEffectOnce } from '@/hooks';
import { InputWrapperProps, getInputWrapperProps } from './InputWrapper';
import Button from '../Button';
import { TrashBinOutline } from 'react-ionicons';

type TextArrayInputProps = InputProps &
	Omit<InputWrapperProps, 'children'> & { keepValueAsString?: boolean };

const TextArrayInput: FC<TextArrayInputProps> = (props): ReactElement => {
	const {
		wrapperProps: {
			disabled,
			helper,
			label,
			labelSize = 'sm',
			labelWeight = 500,
			name,
			sublabel,
			rules,
		},
		inputProps,
	} = getInputWrapperProps(props);

	const { setValue, control, formState } = useFormContext();
	const { errors, dirtyFields, touchedFields } = formState;

	const { fields, append, remove } = useFieldArray({
		name,
		rules: {
			minLength: rules.hasOwnProperty('required') ? 1 : 0,
		},
	});

	const isInvalid =
		typeof errors?.[name] !== 'undefined' && dirtyFields?.[name] && touchedFields?.[name];

	useEffectOnce(() => {
		setValue(name, [{ value: '' }]);
	});

	return (
		<VStack align="start" w="100%" spacing={4}>
			<FormControl isDisabled={disabled} isInvalid={isInvalid}>
				{label && (
					<FormLabel fontSize={labelSize} fontWeight={labelWeight} mb={0.5} >
						{label}
					</FormLabel>
				)}

				{sublabel && <FormLabel>{sublabel}</FormLabel>}

				<VStack w="100%" spacing={2}>
					{fields.map((field, index) => {
						return (
							<HStack w="100%" key={field.id}>
								<Controller
									name={`${name}[${index}].value`}
									control={control}
									rules={rules}
									render={({ field }) => {
										return (
											<InputGroup>
												{inputProps.prefix && (
													<InputLeftElement>
														<Box fontSize="md">{inputProps.prefix}</Box>
													</InputLeftElement>
												)}

												<Input
													{...inputProps}
													{...field}
													placeholder={`${inputProps.placeholder} ${
														index + 1
													}`}
													
													width="100%"
												/>
											</InputGroup>
										);
									}}
								/>

								{index !== 0 && (
									<Button block={false} color="red" onClick={() => remove(index)}>
										<TrashBinOutline width="20px" height="20px" />
									</Button>
								)}
							</HStack>
						);
					})}
				</VStack>

				{helper && (
					<FormHelperText fontSize="xs" fontWeight={500} mt={1} >
						{helper}
					</FormHelperText>
				)}

				{isInvalid && (
					<FormHelperText color="red.500" mt={1} fontSize="xs" fontWeight={500}>
						{errors?.[name]?.message as string}
					</FormHelperText>
				)}
			</FormControl>

			<Button block={false} onClick={() => append({ value: '' })}>
				Add {inputProps.placeholder}
			</Button>
		</VStack>
	);
};

export default TextArrayInput;
