import React, { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { Button, ButtonProps, Text } from '@chakra-ui/react';

type AtomButtonPropsInterface = {
	children: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	variant?: 'primary' | 'secondary';
} & ButtonProps;

const AtomButton: FC<AtomButtonPropsInterface> = ({
	children,
	onClick = () => {},
	variant = 'primary',
	...props
}): ReactElement => {
	return (
		<Button
			_hover={{ background: 'transparent', border: '1px solid white' }}
			bg={variant === 'secondary' ? 'white' : '#FF008C'}
			borderRadius="2xl"
			onClick={onClick}
			px={7}
			{...props}
		>
			<Text
				letterSpacing="tight"
				fontSize={12}
				color={variant === 'secondary' ? '#FF008C' : 'white'}
			>
				{children.toUpperCase()}
			</Text>
		</Button>
	);
};

export default AtomButton;
