import React, { FC, ReactElement } from 'react';
import { HStack, Divider, Text, Box } from '@chakra-ui/react';
import { COLORS } from '@/constants';

interface SectionIndicatorProps {
	indicator: string;
	title: string;
	position: 'start' | 'center' | 'end';
}

const SectionIndicator: FC<SectionIndicatorProps> = ({
	indicator,
	title,
	position,
}): ReactElement => {
	return (
		<HStack
			className="font-fira"
			spacing={2}
			w="100%"
			justify={['start', null, position]}
			px={['3rem', null]}
		>
			<Text
				className="font-fira"
				fontSize="18px"
				fontWeight={200}
				textAlign={['center', null, 'start']}
				color={COLORS.pink}
			>
				{indicator}
			</Text>

			<Text fontSize="22px" fontWeight={600} textAlign={['center', null, 'start']}>
				{title}
			</Text>

			<Box w={['.1rem', null, '.4rem']} />

			<Divider w={['100px', null, '200px']} />
		</HStack>
	);
};

export default SectionIndicator;
