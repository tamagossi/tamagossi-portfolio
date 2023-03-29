import React, { ReactElement, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { Box, Center, Image, VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';

import { MoleculeNavbar } from '@/components/molecules';
import { OrganismFooter } from '@/components/organisms';

import { Project } from 'interface/project.interface';
import PROJECTS from 'constants/projects';
import { AtomProjectInfo } from '@/components/atoms';
import { motion } from 'framer-motion';

const ProjectDetailPage: NextPage<{ project: Project }> = ({ project }): ReactElement => {
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
				overflow="hidden"
			>
				<Image
					src="/images/project-detail-bg-2.svg"
					alt="hero"
					position="absolute"
					width={['100%', null, '90%', null, '75%']}
					sx={{ top: 0, right: 0 }}
					as={motion.img}
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { duration: 1, stiffness: 1 },
					}}
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
						px={['3rem', null, '8rem']}
						position="relative"
						alignItems="start"
					>
						<VStack mt="10rem" spacing={0}>
							<VStack spacing={[2, null, null, null, 0]}>
								<Text
									fontSize={['lg', null, null, null, 'xl']}
									fontWeight={400}
									textAlign="center"
									px={[50, null, null, null, 200]}
								>
									PROJECT NAME
								</Text>

								<Text
									fontSize={['2xl', null, '4xl', null, '6xl']}
									fontWeight={700}
									textAlign="center"
									color="#FF008C"
								>
									{project.title}
								</Text>
							</VStack>

							<Text
								fontSize={['lg', null, null, 'xl']}
								fontWeight={[300, null, null, 400]}
								textAlign="center"
								px={[0, null, null, null, 200]}
								color={'whiteAlpha.800'}
							>
								{project.descriptions}
							</Text>
						</VStack>

						<Image
							alt="hero"
							bottom={[
								'0%',
								null,
								project.thumbnailSize === 'mobile' ? '-50%' : '-40%',
							]}
							left="50%"
							position="absolute"
							src={project.thumbnail}
							sx={{ transform: 'translate(-50%)' }}
							as={motion.img}
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
								transition: { duration: 1, stiffness: 1 },
							}}
						/>
					</Center>
				</Box>
			</Box>

			<VStack align="start" spacing={10} p={20} px={[20, null, null, 40]}>
				<HStack
					justify="start"
					overflowX="hidden"
					spacing={[0, null, null, 10]}
					wrap="wrap"
					alignItems="start"
				>
					<AtomProjectInfo title="Role" content={project.role} />
					<AtomProjectInfo title="Category" content={project.category} />
					<AtomProjectInfo
						title="Project Duration"
						content={`${project.start_date} - ${project.end_date}`}
					/>
				</HStack>

				<VStack justifyContent="flex-start">
					<VStack spacing={1} alignItems="start">
						<Text fontWeight={500} fontSize={14} color="#FF008C">
							Responsibilites
						</Text>

						<ul>
							{project.responsibilities.map((res) => (
								<li key={res}>{res}</li>
							))}
						</ul>
					</VStack>
				</VStack>

				<Box h={20} />

				<Center w="100%">
					<Text fontSize="3xl" fontWeight={400} px={[50, null, null, null, 200]}>
						GALLERY
					</Text>
				</Center>

				<Center w="100%">
					<SimpleGrid
						alignItems="center"
						columns={[1, null, null, 2]}
						spacingX={10}
						spacingY={[10, null, null, project.thumbnailSize === 'mobile' ? 20 : 10]}
						w={['100vw', null, null, '90vw']}
					>
						{project.images.map((image) => (
							<Center key={image}>
								<Image
									alt="image"
									src={image}
									as={motion.img}
									initial={{ opacity: 0 }}
									borderRadius={20}
									whileInView={{
										opacity: 1,
										transition: { duration: 1, stiffness: 1 },
									}}
								/>
							</Center>
						))}
					</SimpleGrid>
				</Center>
			</VStack>

			<OrganismFooter />
		</Box>
	);
};

export default ProjectDetailPage;

export async function getServerSideProps(ctx: NextPageContext) {
	const project = PROJECTS.find((project) => project.title === ctx.query.title);

	return {
		props: {
			project,
		},
	};
}
