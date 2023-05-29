import { FC, ReactElement, useEffect, useState } from 'react';
import Select, { Props } from 'react-select';
import { useToast } from '@chakra-ui/react';
import { InputOptions } from 'interface';

import InputWrapper, { InputWrapperProps, getInputWrapperProps } from './InputWrapper';
export type SelectItem = { label: string; value: string };
type SelectInputProps = InputWrapperProps & InputOptions & Props;

const SelectInput: FC<SelectInputProps> = (props): ReactElement => {
	const toast = useToast();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [options, setOptions] = useState<SelectItem[]>([]);

	const { wrapperProps, inputProps } = getInputWrapperProps(props);
	const {
		dataSourceParams,
		dataSourceUrl,
		options: defaultOptions,
		renderOption,
		service,
		variant,
		...selectInputProps
	} = inputProps;

	const underlined = variant === 'flushed';

	useEffect(() => {
		(async () => {
			if (defaultOptions) {
				setIsLoading(false);
				setOptions(defaultOptions);
				return;
			}

			if (dataSourceUrl) await getOptions();
		})();
	}, [dataSourceParams, dataSourceUrl]);

	const generateOption = (data: Record<string, any>) => {
		if (renderOption) return renderOption(data);

		return {
			value: data.id,
			label: data.name,
		};
	};

	const getOptions = async () => {
		setIsLoading(true);

		try {
			if (typeof service === 'undefined') {
				toast({
					title: 'Form error',
					status: 'error',
					description:
						'Service is unavailable, make sure service props is passed when you invoke SelectInput component',
				});
			} else if (typeof dataSourceUrl === 'undefined') {
				toast({
					title: 'Form error',
					status: 'error',
					description:
						'Data source URL is unavailable, make sure service props is passed when you invoke SelectInput component',
				});
			} else {
				const { data } = await service.getMasterData(dataSourceUrl, dataSourceParams);

				setOptions(data.map((item: any) => generateOption(item)));
				setIsLoading(false);
			}
		} catch (error: any) {
			toast({ status: 'error', description: error.message });
		}
	};

	return (
		<InputWrapper {...wrapperProps} name={wrapperProps.name}>
			<Select
				{...selectInputProps}
				isLoading={isLoading}
				menuPlacement="auto"
				loadingMessage={() => 'Getting options...'}
				options={options}
				styles={{
					control: (styles: any) => ({
						...styles,
						border: underlined ? 'none' : styles.border,
						boxShadow: underlined ? 'none' : styles.boxShadow,
						borderBottom: underlined ? `1px solid gray` : styles.borderBottom,
						'&:focus-within': underlined
							? {
									borderColor: 'blue',
									boxShadow: `10 10 0.4rem blue`,
							  }
							: styles[':focus-within'],
					}),
					placeholder: (styles: any) => ({
						...styles,
						fontSize: 15,
						fontWeight: 400,
					}),
					input: (styles: any) => ({
						...styles,
						fontSize: 15,
						fontWeight: 400,
					}),
					valueContainer: (styles: any) => ({
						...styles,
						padding: underlined ? 0 : styles.padding,
					}),
					menu: (styles: any) => ({
						...styles,
						zIndex: 999,
					}),
					option: (styles: any) => ({
						...styles,
						color: 'black',
					}),
				}}
			/>
		</InputWrapper>
	);
};

export default SelectInput;
