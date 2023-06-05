import { FC, ReactElement, useState } from 'react';
import { Eye, EyeOff } from 'react-ionicons';
import {
	Box,
	FormControlProps,
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
	InputRightElement,
} from '@chakra-ui/react';

import { useFormContext, useController, UseControllerProps } from 'react-hook-form';
import FormControl from './FormControl';

type PasswordInputProps = InputProps & UseControllerProps & Omit<FormControlProps, 'children'>;

const PasswordInput: FC<PasswordInputProps> = (props): ReactElement => {
	const [visible, setVisible] = useState<boolean>(false);

	const { prefix, rules, name, ...inputProps } = props;

	const { control } = useFormContext();
	const { field } = useController({
		control,
		name,
		shouldUnregister: true,
		rules,
	});

	return (
		<FormControl {...props} name={name}>
			<InputGroup>
				{prefix && (
					<InputLeftElement>
						<Box fontSize="md">{prefix}</Box>
					</InputLeftElement>
				)}

				<Input
					{...inputProps}
					{...field}
					width="100%"
					type={visible ? 'text' : 'password'}
				/>

				<InputRightElement>
					{visible ? (
						<EyeOff onClick={() => setVisible((prev) => !prev)} />
					) : (
						<Eye onClick={() => setVisible((prev) => !prev)} />
					)}
				</InputRightElement>
			</InputGroup>
		</FormControl>
	);
};

export default PasswordInput;
