import React, { FC, ReactElement, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface AtomButtonPropsInterface {
	children: ReactNode;
}

const AtomButton: FC<AtomButtonPropsInterface> = ({ children }): ReactElement => {
	return <Button bg="#7B0347">{children}</Button>;
};

export default AtomButton;
