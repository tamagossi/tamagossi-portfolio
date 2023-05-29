import { FC, ReactElement } from 'react';
import { Box, Input, InputGroup, InputLeftElement, InputProps, Textarea } from '@chakra-ui/react';

import InputWrapper, { InputWrapperProps, getInputWrapperProps } from './InputWrapper';

type TextAreaInputProps = InputProps &
	Omit<InputWrapperProps, 'children'> & { keepValueAsString?: boolean };

const TextAreaInput: FC<TextAreaInputProps> = (props): ReactElement => {
	const { wrapperProps, inputProps } = getInputWrapperProps(props);

	return (
		<InputWrapper {...wrapperProps} name={wrapperProps.name}>
			<Textarea {...inputProps} width="100%" />
		</InputWrapper>
	);
};

export default TextAreaInput;
