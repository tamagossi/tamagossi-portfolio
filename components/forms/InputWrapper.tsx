import { FC, ReactElement, ReactNode, cloneElement } from 'react';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText, FormLabel, Skeleton, Text, useToast } from '@chakra-ui/react';

export type InputWrapperProps = {
	children?: ReactElement;
	disabled?: boolean;
	error?: string;
	helper?: string;
	isError?: boolean;
	label?: ReactNode;
	labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
	name: string;
	sublabel?: string;
	variant?: 'outline' | 'flushed' | 'filled' | 'unstyled';
	rules?:
		| Omit<
				RegisterOptions<FieldValues, string>,
				'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
		  >
		| undefined;
	labelSize?:
		| string
		| number
		| '2xs'
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl';
};

const InputWrapper: FC<InputWrapperProps> = ({
	children,
	disabled,
	helper,
	label,
	labelSize = 'sm',
	labelWeight = 500,
	name,
	rules,
	sublabel,
}): ReactElement => {
	const methods = useFormContext();
	const toast = useToast();

	if (!methods) {
		toast({
			title: 'Form error',
			status: 'error',
			description:
				'Please wrap your input group with Form component, and make sure to pass the form property',
		});

		return <Skeleton height="40px" />;
	}

	const { formState, control } = methods;
	const { errors, dirtyFields, touchedFields } = formState;

	const isInvalid =
		typeof errors?.[name] !== 'undefined' && dirtyFields?.[name] && touchedFields?.[name];

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			shouldUnregister
			render={({ field }) => {
				return (
					<FormControl isDisabled={disabled} isInvalid={isInvalid}>
						{label && (
							<FormLabel fontSize={labelSize} fontWeight={labelWeight} mb={0.5}>
								{label}
							</FormLabel>
						)}

						{sublabel && <FormLabel>{sublabel}</FormLabel>}

						{children ? (
							cloneElement(children, {
								...children.props,
								...field,
							})
						) : (
							<Text>Warning! Insert your input here</Text>
						)}

						{helper && (
							<FormHelperText fontSize="xs" fontWeight={500} mt={1}>
								{helper}
							</FormHelperText>
						)}

						{isInvalid && (
							<FormHelperText color="red.500" mt={1} fontSize="xs" fontWeight={500}>
								{errors?.[name]?.message as string}
							</FormHelperText>
						)}
					</FormControl>
				);
			}}
		/>
	);
};

export const getInputWrapperProps = (
	props: Record<string, any>
): { inputProps: Record<string, any>; wrapperProps: Record<string, any> } => {
	const { disabled, helper, label, labelSize, labelWeight, name, rules, sublabel, ...rest } =
		props;

	return {
		inputProps: { ...rest },
		wrapperProps: {
			helper,
			label,
			name,
			labelSize,
			labelWeight,
			disabled,
			rules,
			sublabel,
		},
	};
};

export default InputWrapper;
