import { FC, ReactElement, ReactNode } from 'react';
import { UseControllerProps, useController, useFormContext, useWatch } from 'react-hook-form';
import { Box, Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';

import { useDebounce, useUpdateEffect } from '@/hooks';
import FormControl, { FormControlProps } from './FormControl';

type CustomInputProps = { keepValueAsString?: boolean; prefix?: ReactNode };

type TextInputProps = InputProps &
	UseControllerProps &
	Omit<FormControlProps, 'children'> &
	CustomInputProps;

const TextInput: FC<TextInputProps> = (props): ReactElement => {
	const { prefix, type, keepValueAsString, rules, name, ...inputProps } = props;

	const { control, setValue } = useFormContext();
	const { field } = useController({
		control,
		name,
		shouldUnregister: true,
		rules,
	});

	const value = useWatch({ name: name });
	const debouncedValue = useDebounce<string>(value, 1000);

	useUpdateEffect(() => {
		if (type === 'number' && typeof value === 'string' && !keepValueAsString) {
			setValue(name, parseInt(debouncedValue));
		}
	}, [debouncedValue]);

	return (
		<FormControl {...props} name={name}>
			<InputGroup>
				{prefix && (
					<InputLeftElement>
						<Box fontSize="md">{prefix}</Box>
					</InputLeftElement>
				)}

				<Input {...inputProps} {...field} width="100%" />
			</InputGroup>
		</FormControl>
	);
};

export default TextInput;
