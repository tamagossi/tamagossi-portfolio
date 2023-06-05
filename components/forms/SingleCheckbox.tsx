import { FC, ReactElement, ReactNode } from 'react';
import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useFormContext, useController, UseControllerProps } from 'react-hook-form';

import FormControl, { FormControlProps } from './FormControl';
import { useUpdateEffect } from '@/hooks';

type SingleCheckboxInputProps = CheckboxProps &
	Omit<FormControlProps, 'children'> &
	UseControllerProps & { children: ReactNode; onChange?: (checked: boolean) => void };

const SingleCheckboxInput: FC<SingleCheckboxInputProps> = (props): ReactElement => {
	const { rules, name, children } = props;

	const { control, watch } = useFormContext();
	const { field } = useController({
		control,
		name,
		shouldUnregister: true,
		rules,
	});

	const value = watch(name);
	useUpdateEffect(() => {
		props.onChange?.(value);
	}, [value]);

	return (
		<FormControl {...props} name={name}>
			<Checkbox {...props} {...field} width="100%">
				{children}
			</Checkbox>
		</FormControl>
	);
};

export default SingleCheckboxInput;
