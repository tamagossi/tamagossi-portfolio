import React, { FC } from 'react';
import { VStack, HStack, Badge, Text, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineRight } from 'react-icons/ai';

interface MoleculeProjectSummaryPropsInterface {
	image: string;
	title: string;
	description: string;
}

const MoleculeProjectSummary: FC<MoleculeProjectSummaryPropsInterface> = ({
	image,
	title,
	description,
}) => {
	return (
		<VStack spacing={7}>
			<HStack justify="center" w="100%">
				<Image src={image} height={[250, null, null, null, 300]} alt="project" />
			</HStack>

			<Box height={0} />

			<VStack alignItems="start" spacing={0}>
				<Text fontSize={['4xl', null, null, null, '5xl']} fontWeight={550}>
					{title}
				</Text>

				<Text fontSize={['lg', null, null, null, 'lg']} noOfLines={2}>
					{description}
				</Text>

				<Box h="1rem" />

				<HStack w="100%">
					<Badge colorScheme="blue" variant="solid">
						React
					</Badge>
					<Badge colorScheme="blue" variant="solid">
						Typescript
					</Badge>
					<Badge colorScheme="green" variant="solid">
						Chakra UI
					</Badge>
					<Badge colorScheme="black" variant="solid">
						Zustand
					</Badge>
				</HStack>
			</VStack>

			<HStack w="100%">
				<HStack background="pink.500" px={5} py={2} borderRadius={10}>
					<Text fontSize="xl">See detail</Text>

					<motion.div
						style={{ fontSize: '48px' }}
						animate={{ x: [0, 5] }}
						transition={{
							yoyo: Infinity,
						}}
					>
						<AiOutlineRight size={24} />
					</motion.div>
				</HStack>
			</HStack>
		</VStack>
	);
};

export default MoleculeProjectSummary;
