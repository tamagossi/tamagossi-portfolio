import React, { FC, ReactElement } from 'react';
import { Project } from 'interface/project.interface';
import { HStack, Image, Text, VStack } from '@chakra-ui/react';

type MoleculeProjectCardPropsInterface = Project & {
	onClick?: (id: number) => void;
};

const MoleculeProjectCard: FC<MoleculeProjectCardPropsInterface> = ({
	active,
	category,
	id,
	title,
	onClick,
	role,
	tech,
}): ReactElement => {
	return (
		<HStack
			borderRadius="2xl"
			cursor="pointer"
			key={title}
			onClick={() => onClick!(id)}
			px={4}
			py={3}
			spacing={5}
			zIndex="999"
		>
			<VStack spacing={1} alignItems="start">
				<Text fontWeight={600}>{title}</Text>

				<HStack
					spacing={12}
					divider={
						<Text fontSize={12} mx={2}>
							|
						</Text>
					}
				>
					<Text fontWeight={500} fontSize={12}>
						{role}
					</Text>
					<Text fontWeight={500} fontSize={12}>
						{category}
					</Text>
					<Text fontWeight={500} fontSize={12}>
						{tech.join(', ')}
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
