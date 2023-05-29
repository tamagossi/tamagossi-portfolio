import { DetailedHTMLProps, FC, FormHTMLAttributes, ReactElement, ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

type FormProps = {
	children: ReactNode | ReactNode[];
	form: UseFormReturn;
} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Form: FC<FormProps> = ({ children, form, ...rest }): ReactElement => {
	return (
		<FormProvider {...form}>
			<form
				{...rest}
				onChange={() => form.trigger()}
				style={{ width: '100%', ...rest.style }}
			>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
