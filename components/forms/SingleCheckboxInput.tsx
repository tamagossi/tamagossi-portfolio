import { FC, ReactElement, ReactNode } from 'react';
import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useFormContext, useController, UseControllerProps } from 'react-hook-form';

import FormControl, { FormControlProps } from './FormControl';

type SingleCheckboxInputProps = CheckboxProps &
	Omit<FormControlProps, 'children'> &
	UseControllerProps & { children: ReactNode; onChange?: (checked: boolean) => void };

const SingleCheckboxInput: FC<SingleCheckboxInputProps> = (props): ReactElement => {
	const { rules, name, children } = props;

	const { control } = useFormContext();
	const { field } = useController({
		control,
		name,
		shouldUnregister: true,
		rules,
	});

	return (
		<FormControl {...props} name={name}>
			<Checkbox {...props} {...field} width="100%" isChecked={field.value}>
				{children}
			</Checkbox>
		</FormControl>
	);
};

export default SingleCheckboxInput;
