import { FC, ReactElement, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, InputProps, Checkbox, Text, VStack } from '@chakra-ui/react';

import InputWrapper, { InputWrapperProps, getInputWrapperProps } from './InputWrapper';
import dayjs from 'dayjs';

type DateInputProps = InputProps &
	Omit<InputWrapperProps, 'children'> & { isEndDate?: boolean; endDateLabel?: string };

const DateInput: FC<DateInputProps> = (props): ReactElement => {
	const { setValue } = useFormContext();

	const [ongoing, setOngoing] = useState(false);

	const { wrapperProps, inputProps } = getInputWrapperProps(props);
	const { isEndDate, endDateLabel, ...rest } = inputProps;

	const setProgressing = () => {
		setOngoing(true);
		setValue(wrapperProps.name, dayjs('1970/01/01'));
	};

	return (
		<VStack align="start" w="100%">
			<InputWrapper {...wrapperProps} name={wrapperProps.name}>
				<Input type="date" {...rest} disabled={ongoing} />
			</InputWrapper>

			{isEndDate && (
				<Checkbox
					onChange={(e) => {
						if (e.target.checked) {
							setProgressing();
						} else {
							setOngoing(false);
						}
					}}
				>
					<Text fontSize="sm">{endDateLabel}</Text>
				</Checkbox>
			)}
		</VStack>
	);
};

export default DateInput;
