import { FC, ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import {
	FormControl as ChakraFormControl,
	FormHelperText,
	FormLabel,
	Skeleton,
	TextProps,
	useToast,
} from '@chakra-ui/react';

export type FormControlProps = {
	children?: ReactElement;
	disabled?: boolean;
	helper?: string;
	label?: ReactNode;
	labelWeight?: TextProps['fontWeight'];
	name: string;
	sublabel?: string;
	labelSize?: TextProps['fontSize'];
};

const FormControl: FC<FormControlProps> = ({
	children,
	disabled,
	helper,
	label,
	labelSize = 'sm',
	labelWeight = 500,
	name,
	sublabel,
}): ReactElement => {
	const methods = useFormContext();
	const toast = useToast();

	if (!methods) {
		toast({
			title: 'Form Control Error~',
			status: 'error',
			description: 'Please wrap your <FormControl /> with Form component',
		});

		return <Skeleton height="40px" />;
	}

	const { formState } = methods;
	const { errors, dirtyFields, touchedFields } = formState;

	const isInvalid =
		typeof errors?.[name] !== 'undefined' && dirtyFields?.[name] && touchedFields?.[name];

	return (
		<ChakraFormControl isDisabled={disabled} isInvalid={isInvalid}>
			{label && (
				<FormLabel fontSize={labelSize} fontWeight={labelWeight} mb={0.5}>
					{label}
				</FormLabel>
			)}

			{sublabel && <FormLabel>{sublabel}</FormLabel>}

			{children}

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
		</ChakraFormControl>
	);
};

export default FormControl;
