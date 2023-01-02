import React, { FC, ReactElement, ReactNode } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface AtomButtonPropsInterface {
	children: string;
}

const AtomButton: FC<AtomButtonPropsInterface> = ({ children }): ReactElement => {
	return (
		<Button
			bg="#7B0347"
			borderRadius="2xl"
			boxShadow="-1px -1px 2px rgba(166, 4, 96, 0.3), 1px 1px 2px rgba(80, 2, 46, 0.5), inset 6px -6px 12px rgba(80, 2, 46, 0.2), inset -6px 6px 12px rgba(80, 2, 46, 0.2), inset 6px 6px 12px rgba(166, 4, 96, 0.9), inset -6px -6px 15px rgba(80, 2, 46, 0.9)"
			_hover={{ background: 'pink.700' }}
			px={7}
		>
			<Text letterSpacing="tighter" fontSize={12}>
				{children.toUpperCase()}
			</Text>
		</Button>
	);
};

export default AtomButton;
