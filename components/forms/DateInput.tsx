import { FC, ReactElement } from 'react';
import { UseControllerProps, useController, useFormContext } from 'react-hook-form';
import { Input, InputProps } from '@chakra-ui/react';

import FormControl, { FormControlProps } from './FormControl';

type DateInputProps = InputProps & UseControllerProps & Omit<FormControlProps, 'children'>;

const DateInput: FC<DateInputProps> = (props): ReactElement => {
	const { rules, name } = props;

	const { control, setValue } = useFormContext();
	const { field } = useController({
		control,
		name,
		shouldUnregister: true,
		rules,
	});

	return (
		<FormControl {...props} name={name}>
			<Input type="date" {...props} {...field} width="100%" />
		</FormControl>
	);
};

export default DateInput;
