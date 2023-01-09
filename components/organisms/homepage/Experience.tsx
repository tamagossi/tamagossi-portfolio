import React, { FC, ReactElement, useState } from 'react';
import { Box, HStack, VStack, Text, Grid, GridItem, Tag } from '@chakra-ui/react';

import { AtomProjectInfo, AtomButton } from '@/components/atoms';
import {
	MoleculeExperienceBox,
	MoleculeProjectCard,
	MoleculeProjectHighlight,
} from '@/components/molecules';

const EXPERIENCES = [
	{
		name: 'Skrillex',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '1 Month',
		id: 'a',
	},
	{
		name: 'Chalatix Agency',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '2 Month',
		id: 'b',
	},
	{
		name: 'Same Different',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '3 Month',
		id: 'c',
	},
	{
		name: 'Class:y',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '4 Month',
		id: 'd',
	},
];

const OrganisHomepageProjectSection: FC = (): ReactElement => {
	const [activeProject, setActiveProject] = useState('a');

	const selectedProject = EXPERIENCES.find((experience) => experience.id === activeProject);

	return (
		<>
			<Grid
				alignItems="center"
				templateColumns="repeat(24, 1fr)"
				height="100vh"
				rowGap={4}
				display={['none', null, null, 'grid']}
			>
				<GridItem colSpan={[0, null, null, 10]}>
					<Text fontSize="36px" fontWeight="bold" textAlign="center">
						Where I&apos;ve worked
					</Text>
				</GridItem>

				<GridItem colSpan={[24, null, null, 14]}>
					<HStack spacing="3rem">
						<HStack spacing="2rem">
							<Box
								width="8px"
								height={`${EXPERIENCES.length * 60}px`}
								borderRadius="3xl"
								bgColor="#5B0334"
								position="relative"
							>
								<Box
									width={2}
									height="60px"
									borderRadius="3xl"
									bgColor="#FF008C"
									position="absolute"
									left={0}
									top={0}
								/>
							</Box>

							<VStack spacing={0} alignItems="start">
								{EXPERIENCES.map((experience) => {
									return (
										<HStack
											alignItems="center"
											key={experience.id}
											height="60px"
										>
											<Text fontSize="xl" fontWeight={500} cursor="pointer">
												{experience.name}
											</Text>
										</HStack>
									);
								})}
							</VStack>
						</HStack>

						<MoleculeExperienceBox />
					</HStack>
				</GridItem>
			</Grid>

			<VStack
				display={['flex', null, null, 'none']}
				justifyContent="center"
				alignItems="center"
				spacing="3rem"
				height="100vh"
			>
				<Text fontSize="32px" fontWeight="bold" textAlign="center">
					Where I&apos;ve worked
				</Text>

				<HStack
					overflow="scroll"
					scrollBehavior="smooth"
					scrollSnapType="x mandatory"
					w="100vw"
					spacing={5}
					px="12rem"
					css={{
						'&::-webkit-scrollbar': {
							width: '1px',
						},
						'&::-webkit-scrollbar-track': {
							width: '1px',
						},
						'&::-webkit-scrollbar-thumb': {
							background: 'trasnparent',
							borderRadius: '24px',
						},
					}}
				>
					{EXPERIENCES.map((experience) => {
						return (
							<Box
								scrollSnapAlign="center"
								scrollSnapStop="always"
								key={experience.id}
							>
								<MoleculeExperienceBox />
							</Box>
						);
					})}
				</HStack>
			</VStack>
		</>
	);
};

export default OrganisHomepageProjectSection;
