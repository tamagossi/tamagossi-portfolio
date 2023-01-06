import React, { FC, ReactElement } from 'react';
import { HStack, VStack, Box, Text } from '@chakra-ui/react';

interface MoleculeProjectCardPropsInterface {
	active: boolean;
	category: string;
	id: string;
	name: string;
	onClick?: (id: string) => void;
	scope: string;
	stack: string;
}

const MoleculeProjectCard: FC<MoleculeProjectCardPropsInterface> = ({
	active,
	category,
	id,
	name,
	onClick,
	scope,
	stack,
}): ReactElement => {
	return (
		<HStack
			borderRadius="2xl"
			cursor="pointer"
			key={name}
			onClick={() => onClick!(id)}
			px={4}
			py={3}
			spacing={5}
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
				<Text fontWeight={600}>{name}</Text>

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
