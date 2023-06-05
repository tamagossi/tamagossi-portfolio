import { FC, ReactElement } from 'react';
import { TrashBinOutline } from 'react-ionicons';
import { Controller, UseControllerProps, useFieldArray, useFormContext } from 'react-hook-form';
import {
	Box,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
	VStack,
} from '@chakra-ui/react';

import { useEffectOnce } from '@/hooks';
import { Button } from '@/components';
import FormControl, { FormControlProps } from './FormControl';

type TextArrayInputProps = InputProps & Omit<FormControlProps, 'children'> & UseControllerProps;

const TextArrayInput: FC<TextArrayInputProps> = (props): ReactElement => {
	const { name, rules } = props;

	const { setValue, control } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		name,
		rules: {
			minLength: rules?.hasOwnProperty('required') ? 1 : 0,
		},
	});

	useEffectOnce(() => {
		if (fields.length < 1) {
			setValue(name, [{ value: '' }]);
		}
	});

	return (
		<VStack align="start" w="100%" spacing={4}>
			<FormControl {...props} name={name}>
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
												{props.prefix && (
													<InputLeftElement>
														<Box fontSize="md">{props.prefix}</Box>
													</InputLeftElement>
												)}

												<Input
													{...props}
													{...field}
													width="100%"
													placeholder={`${props.placeholder} ${
														index + 1
													}`}
												/>
											</InputGroup>
										);
									}}
								/>

								{index !== 0 && (
									<Button
										block={false}
										color="red"
										onClick={() => remove(index)}
										px={4}
									>
										<TrashBinOutline width="20px" height="20px" />
									</Button>
								)}
							</HStack>
						);
					})}
				</VStack>
			</FormControl>

			<Button block={false} onClick={() => append({ value: '' })}>
				Add {props.placeholder}
			</Button>
		</VStack>
	);
};

export default TextArrayInput;
