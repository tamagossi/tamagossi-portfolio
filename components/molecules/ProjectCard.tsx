import React, { FC, ReactElement } from 'react';
import { HStack, VStack, Box, Text } from '@chakra-ui/react';

interface MoleculeProjectCardPropsInterface {
	active: boolean;
	category: string;
	id: string;
	name: string;
	scope: string;
	stack: string;
}

const MoleculeProjectCard: FC<MoleculeProjectCardPropsInterface> = ({
	name,
	scope,
	category,
	stack,
	active,
	id,
}): ReactElement => {
	return (
		<HStack
			key={name}
			spacing={5}
			cursor="pointer"
			py={3}
			px={4}
			borderRadius="2xl"
			background={
				active ? 'linear-gradient(92.84deg, #80054A 24.38%, #4D002B 85.53%);' : undefined
			}
		>
			<Box
				backgroundImage={`url("/images/background.jpg")`}
				height={92}
				width={112}
				backgroundSize="cover"
				borderRadius="2xl"
			/>

			<VStack spacing={1} alignItems="start">
				<Text fontWeight={600}>Chalatix Agency</Text>

				<HStack
					spacing={12}
					divider={
						<Text fontSize={12} mx={2}>
							|
						</Text>
					}
				>
					<Text fontWeight={500} fontSize={12}>
						{scope}
					</Text>
					<Text fontWeight={500} fontSize={12}>
						{category}
					</Text>
					<Text fontWeight={500} fontSize={12}>
						{stack}
					</Text>
				</HStack>

				<Text fontWeight={400} fontSize={12}>
					See detail
				</Text>
			</VStack>
		</HStack>
	);
};

export default MoleculeProjectCard;
