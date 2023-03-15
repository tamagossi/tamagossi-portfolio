import React, { FC, ReactElement, useState } from 'react';
import { Box, HStack, VStack, Text, Grid, GridItem, Tag, Image } from '@chakra-ui/react';

import { AtomProjectInfo, AtomButton } from '@/components/atoms';
import { MoleculeProjectCard, MoleculeProjectHighlight } from '@/components/molecules';
import { Project } from 'interface/project.interface';
import { motion } from 'framer-motion';

interface OrganismHomepageProjectSectionPropsInterface {
	projects: Project[];
}

const OrganisHomepageProjectSection: FC<OrganismHomepageProjectSectionPropsInterface> = ({
	projects,
}): ReactElement => {
	const [activeProject, setActiveProject] = useState(0);

	const selectedProject = projects.find((project) => project.id === activeProject);

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: -40,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<VStack p="7rem" px={['1rem', null, null, '7rem']} spacing={['1rem', null, null, '3rem']}>
			<Text fontSize="30px" fontWeight="bold" textAlign="center">
				Things I&apos;ve built
			</Text>

			<Grid templateColumns="repeat(24, 1fr)" display={['none', null, null, 'grid']} gap={5}>
				<GridItem colSpan={[24, null, null, 12]}>
					<VStack
						alignItems="start"
						spacing="1rem"
						wrap="wrap"
						width="100%"
						as={motion.div}
						variants={container}
						initial="hidden"
						animate="visible"
						key={activeProject}
					>
						<HStack
							as={motion.div}
							variants={child}
							spacing="2rem"
							alignItems="start"
							width="100%"
							justifyContent="center"
							height={400}
						>
							<Image
								alt="project-thumbnail"
								src={selectedProject?.thumbnail as string}
								height="100%"
							/>
						</HStack>

						<HStack
							justify="end"
							spacing={1}
							as={motion.div}
							variants={child}
							w="100%"
							px="4rem"
						>
							<Text>See Detail →</Text>
						</HStack>
					</VStack>
				</GridItem>

				<GridItem colSpan={[0, null, null, 12]}>
					<VStack
						spacing={0}
						alignItems="start"
						borderLeft="1px solid white"
						pl="2rem"
						position="relative"
					>
						<Box
							width={580}
							height="90px"
							borderRadius="xl"
							background="linear-gradient(92.84deg, #80054A 24.38%, #4D002B 85.53%);"
							position="absolute"
							left={5}
							top={`${activeProject * 92}px`}
							transitionDuration="1s"
							zIndex="998"
						/>

						{projects.slice(0, 8).map((project) => {
							const { id } = project;

							return (
								<MoleculeProjectCard
									{...project}
									key={project.title}
									onClick={(id) => setActiveProject(id)}
								/>
							);
						})}

						<Box h="1rem" />

						<AtomButton>See More Project</AtomButton>
					</VStack>
				</GridItem>
			</Grid>

			<VStack display={['flex', null, null, 'none']} justifyContent="center" spacing="1rem">
				<HStack
					overflow="scroll"
					scrollBehavior="smooth"
					scrollSnapType="x mandatory"
					w="100vw"
					spacing="2rem"
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
					{projects.slice(0, 8).map((project) => {
						return (
							<Box scrollSnapAlign="center" scrollSnapStop="always" key={project.id}>
								<MoleculeProjectHighlight {...project} />
							</Box>
						);
					})}
				</HStack>

				<AtomButton>See More Project</AtomButton>
			</VStack>
		</VStack>
	);
};

export default OrganisHomepageProjectSection;
