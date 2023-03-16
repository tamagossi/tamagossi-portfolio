import React, { useState } from 'react';
import { Box, Center, Image, VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';

import { MoleculeNavbar } from '@/components/molecules';
import { OrganismFooter, OrganismProjectBox } from '@/components/organisms';

import PROJECTS from 'constants/projects';
import { Project } from 'interface/project.interface';

const WORKS = [
	{
		label: 'All',
		role: ['Front-End Engineer', 'Mobile Engineer', 'Back-End Engineer'],
	},
	{
		label: 'Front-End',
		role: ['Front-End Engineer'],
	},
	{
		label: 'Mobile',
		role: ['Mobile Engineer'],
	},
];

const ProjectPage: NextPage<{ projects: Project[] }> = ({ projects }) => {
	const [active, setActive] = useState(WORKS[0].label);
	const [role, setRole] = useState(WORKS[0].role);

	return (
		<Box
			bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(118.55deg, #353535 20.84%, #0A0A0A 86.03%)"
			h="100vh"
			overflowY="scroll"
			position="relative"
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
			<MoleculeNavbar stickOnTop />

			<Box
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
				w="100%"
				h="100vh"
				sx={{ zIndex: 1 }}
				position="relative"
				borderBottomRadius="4rem"
				overflow="hidden"
			>
				<Image
					src="/images/project-bg.svg"
					alt="hero"
					position="absolute"
					width={['100%', null, '90%', null, '75%']}
					sx={{ bottom: 0, right: 0 }}
				/>

				<Box
					height="100vh"
					position="relative"
					overflow="hidden"
					id="hero-section"
					sx={{ zIndex: 3 }}
				>
					<Center
						height="100%"
						justifyContent={['center', null, 'start']}
						px={['3rem', null, '8rem']}
					>
						<VStack
							spacing={5}
							alignItems={['center', null, 'self-start']}
							bg="rgba(0,0,0,0.4)"
							p={20}
						>
							<Text
								fontSize={['32px', null, '40px']}
								fontWeight="bold"
								letterSpacing="tighter"
								lineHeight="normal"
								mb={0}
								textAlign={['center', null, 'start']}
								w={['80vw', null, '60vw', null, '45vw']}
							>
								Turn coffe into next level digital product
							</Text>

							<Text
								fontSize={['14px', null, '16px']}
								fontWeight={400}
								letterSpacing="tighter"
								lineHeight="shorter"
								mb={0}
								textAlign={['center', null, 'start']}
								w={['initial', null, '30vw']}
							>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam,eaque.
							</Text>
						</VStack>
					</Center>
				</Box>
			</Box>

			<HStack justify="center" overflowX="hidden">
				<VStack spacing={5} py="5rem">
					<Text
						fontSize="2xl"
						fontWeight="bold"
						letterSpacing="tighter"
						lineHeight="normal"
						mb={0}
						textAlign="center"
					>
						Recent Work
					</Text>

					<HStack spacing="1rem">
						{WORKS.map((work: { label: string; role: string[] }) => {
							const { label } = work;

							return (
								<Text
									key={label}
									bg={label === active ? '#FF008C' : 'initial'}
									py={1}
									px={10}
									borderRadius="full"
									transitionDuration=".8s"
									transitionTimingFunction="ease-in-out"
									onClick={() => {
										setActive(label);
										setRole(work.role);
									}}
								>
									{label}
								</Text>
							);
						})}
					</HStack>

					<Box h="2rem" />

					<SimpleGrid
						columns={[1, null, null, 2]}
						spacing={10}
						w={['90vw', null, null, '80vw']}
					>
						{PROJECTS.map((project) => (
							<OrganismProjectBox key={project.id} {...project} />
						))}
					</SimpleGrid>
				</VStack>
			</HStack>

			<OrganismFooter />
		</Box>
	);
};

export async function getStaticProps() {
	return {
		props: {
			projects: PROJECTS,
		},
	};
}

export default ProjectPage;
