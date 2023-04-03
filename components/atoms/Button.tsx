import React, { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface AtomButtonPropsInterface {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'primary' | 'secondary' | 'submit';
}

const AtomButton: FC<AtomButtonPropsInterface> = ({
    children,
    onClick = () => {},
    type = 'primary',
}): ReactElement => {
    return (
        <Button
            _hover={{ background: 'transparent', border: '1px solid white' }}
            bg={type === 'secondary' ? 'white' : '#FF008C'}
            borderRadius="2xl"
            onClick={onClick}
            px={7}
        >
            <Text
                letterSpacing="tight"
                fontSize={12}
                color={type === 'secondary' ? '#FF008C' : 'white'}
            >
                {children.toUpperCase()}
            </Text>
        </Button>
    );
};

export default AtomButton;
