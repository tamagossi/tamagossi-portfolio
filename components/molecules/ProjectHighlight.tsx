import React, { FC, ReactElement } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

import { AtomProjectInfo } from '@/components/atoms';

interface MoleculeProjectHighlightPropsInterface {
	category: string;
	duration: string;
	id: string;
	name: string;
	onClick?: string;
	scope: string;
	stack: string;
}

const MoleculeProjectHighlight: FC<MoleculeProjectHighlightPropsInterface> = ({
	duration,
	name,
	scope,
	stack,
}): ReactElement => {
	return (
		<VStack spacing="2rem" alignItems="start">
			<Box
				backgroundImage={`url("/images/background.jpg")`}
				height={280}
				width={363}
				backgroundSize="cover"
				borderRadius={40}
			/>

			<VStack spacing={3} alignItems="start">
				<VStack spacing={0} alignItems="start">
					<Text fontWeight={500}>Website</Text>
					<Text fontSize="28px" fontWeight={700} sx={{ m: 0 }}>
						{name}
					</Text>
				</VStack>

				<AtomProjectInfo title="ROLE" content={stack} />
				<AtomProjectInfo title="PROJECT CATEGORIES" content={scope} />
				<AtomProjectInfo title="DURATION" content={duration} />
			</VStack>
		</VStack>
	);
};

export default MoleculeProjectHighlight;
