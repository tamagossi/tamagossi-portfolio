import { FC, ReactElement } from 'react';
import { FormControlProps, Textarea, TextareaProps } from '@chakra-ui/react';

import FormControl from './FormControl';
import { useFormContext, useController, UseControllerProps } from 'react-hook-form';

type TextAreaInputProps = TextareaProps &
	Omit<FormControlProps, 'children'> &
	UseControllerProps & { disabled?: boolean };

const TextAreaInput: FC<TextAreaInputProps> = (props): ReactElement => {
	const { rules, name } = props;

	const { control } = useFormContext();
	const { field } = useController({
		control,
		name,
		shouldUnregister: true,
		rules,
	});

	return (
		<FormControl {...props} name={name}>
			<Textarea {...props} {...field} width="100%" />
		</FormControl>
	);
};

export default TextAreaInput;
