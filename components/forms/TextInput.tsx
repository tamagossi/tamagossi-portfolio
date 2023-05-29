import { FC, ReactElement } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Box, Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';

import { useDebounce, useUpdateEffect } from '@/hooks';
import InputWrapper, { InputWrapperProps, getInputWrapperProps } from './InputWrapper';

type TextInputProps = InputProps &
	Omit<InputWrapperProps, 'children'> & { keepValueAsString?: boolean };

const TextInput: FC<TextInputProps> = (props): ReactElement => {
	const { setValue } = useFormContext();

	const { wrapperProps, inputProps } = getInputWrapperProps(props);
	const { prefix, type, keepValueAsString } = inputProps;

	const value = useWatch({ name: wrapperProps.name });
	const debouncedValue = useDebounce<string>(value, 1000);

	useUpdateEffect(() => {
		if (type === 'number' && typeof value === 'string' && !keepValueAsString) {
			setValue(wrapperProps.name, parseInt(debouncedValue));
		}
	}, [debouncedValue]);

	return (
		<InputWrapper {...wrapperProps} name={wrapperProps.name}>
			<InputGroup>
				{prefix && (
					<InputLeftElement>
						<Box fontSize="md">{prefix}</Box>
					</InputLeftElement>
				)}

				<Input {...inputProps} width="100%" />
			</InputGroup>
		</InputWrapper>
	);
};

export default TextInput;
