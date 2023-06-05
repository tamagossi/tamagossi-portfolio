import React, { FC } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

const BUTTON_STYLE: Record<string, any> = {
	white: {
		background: 'white',
		color: 'black',
		_hover: {
			background: 'whiteAlpha.200',
		},
	},
	black: {
		background: 'black',
		color: 'white',
		_hover: {
			background: 'blackAlpha.200',
		},
	},
	red: {
		background: 'red.500',
		color: 'white',
		_hover: {
			background: 'red.200',
		},
	},
};

type ButtonProps = ChakraButtonProps & {
	color?: keyof typeof BUTTON_STYLE;
	shape?: 'rectangle' | 'rounded';
	block?: boolean;
	href?: string;
};

const Button: FC<ButtonProps> = ({
	children,
	shape = 'rectangle',
	color = 'black',
	block = true,
	px = 8,
	...defaultButtonProps
}) => {
	return (
		<ChakraButton
			{...defaultButtonProps}
			{...BUTTON_STYLE[color]}
			blockSize
			borderRadius={shape === 'rounded' ? 999 : 5}
			fontSize="sm"
			fontWeight={700}
			px={px}
			py={2}
			w={block && '100%'}
		>
			{children}
		</ChakraButton>
	);
};

export default Button;
