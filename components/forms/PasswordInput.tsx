import { FC, ReactElement, useState } from 'react';
import { Eye, EyeOff } from 'react-ionicons';
import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
	InputRightElement,
} from '@chakra-ui/react';

import InputWrapper, { InputWrapperProps, getInputWrapperProps } from './InputWrapper';

type PasswordInputProps = InputProps &
	Omit<InputWrapperProps, 'children'> & { keepValueAsString?: boolean };

const PasswordInput: FC<PasswordInputProps> = (props): ReactElement => {
	const [visible, setVisible] = useState<boolean>(false);

	const { wrapperProps, inputProps } = getInputWrapperProps(props);
	const { prefix } = inputProps;

	return (
		<InputWrapper {...wrapperProps} name={wrapperProps.name}>
			<InputGroup>
				{prefix && (
					<InputLeftElement>
						<Box fontSize="md">{prefix}</Box>
					</InputLeftElement>
				)}

				<Input {...inputProps} width="100%" type={visible ? 'text' : 'password'} />

				<InputRightElement>
					{visible ? (
						<EyeOff onClick={() => setVisible((prev) => !prev)} />
					) : (
						<Eye onClick={() => setVisible((prev) => !prev)} />
					)}
				</InputRightElement>
			</InputGroup>
		</InputWrapper>
	);
};

export default PasswordInput;
