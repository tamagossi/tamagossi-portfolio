import React, { FC, ReactElement } from 'react';
import Image from 'next/image';
import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaEgg } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import { motion } from 'framer-motion';

import { Project } from 'interface/project.interface';
import { SectionIndicator } from '@/components';
import { COLORS } from '@/constants';
import { AiOutlineChrome, AiOutlineMobile } from 'react-icons/ai';

interface ProjectSectionProps {
	projects: Project[];
}

const parents = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: 'spring', delay: 0.5 },
	},
};

const child = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: { type: 'spring', stiffness: 120 },
	},
};

const ProjectSection: FC<ProjectSectionProps> = ({ projects }): ReactElement => {
	const featured: Project[] = projects.filter((project) => project.is_featured);
	const others: Project[] = projects.filter((project) => !project.is_featured);

	return (
		<VStack mt="8rem" px={['0rem', null, null, '8rem']}>
			<SectionIndicator indicator="03." title="What I've built" position="start" />

			<Box h=".2rem" />

			<VStack
				h="70vh"
				w="100%"
				spacing="7rem"
				overflow="scroll"
				scrollBehavior="smooth"
				className="masked-overflow"
				pt="20px"
			>
				{featured.map((project: Project, index: number) => {
					const isOdd = index % 2 == 0;

					return (
						<HStack
							justify={isOdd ? 'end' : 'start'}
							key={project.id}
							position="relative"
							w="100%"
							as={motion.div}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
								},
							}}
						>
							<Box
								position="absolute"
								top="0"
								zIndex={1}
								left={isOdd ? '0' : 'initial'}
								right={!isOdd ? '0' : 'initial'}
							>
								<Image
									height="400px"
									width="620px"
									src={project.images[0]}
									alt={project.title}
								/>
							</Box>

							<VStack
								alignItems={isOdd ? 'end' : 'start'}
								justify="center"
								spacing={0}
								w="100%"
								h="400px"
								zIndex={2}
							>
								<Text color={COLORS.pink} className="font-fira">
									Featured Project
								</Text>

								<Text
									color="whiteAlpha.800"
									className="font-poppins"
									fontSize="3xl"
									fontWeight="semibold"
								>
									{project.title}
								</Text>

								<Box h="1.2rem" />

								<Box bg={COLORS.semiblack} w="55%" p={5} borderRadius={5}>
									<Text color="gray.400" fontSize="sm">
										{project.descriptions}. My responsibilities are:
									</Text>

									<VStack alignItems="start" mt=".5rem" spacing={1}>
										{project.responsibilities.map((resp) => {
											return (
												<HStack key={resp} spacing={4}>
													<Box>
														<FaEgg fill={COLORS.pink} size={12} />
													</Box>

													<Text
														fontSize="sm"
														color="gray.400"
														className="font-poppins"
													>
														{resp}
													</Text>
												</HStack>
											);
										})}
									</VStack>
								</Box>

								<Box h="1.2rem" />

								<HStack spacing={4}>
									{project.tech.map((tech) => {
										return (
											<Text color="gray.400" fontSize="sm" key={tech}>
												{tech}
											</Text>
										);
									})}
								</HStack>

								<Box h="1.2rem" />

								{project.project_url && (
									<a href={project.project_url} target="_blank" rel="noreferrer">
										<IoMdOpen size={24} fill="#ABABAB" />
									</a>
								)}
							</VStack>
						</HStack>
					);
				})}

				<Box h="1rem" />

				<VStack spacing={10} w="100%" px={['4rem', null, '8rem', '0rem']}>
					<Text
						className="font-poppins"
						fontSize="2xl"
						fontWeight="semibold"
						color="gray.300"
					>
						Other Project You Can&apos;t Miss
					</Text>

					<SimpleGrid columns={[1, null, null, 3]} spacing={5} w="100%">
						{others.map((project) => {
							const isWeb = project.category === 'Web Application';
							const isMobile = project.category === 'Mobile Application';

							return (
								<Box
									bg={COLORS.semiblack}
									height="350px"
									key={project.id}
									px="2rem"
									py="2rem"
									borderRadius={10}
									as={motion.div}
									initial={{ opacity: 0, y: 100 }}
									whileHover={{
										scale: 1.03,
										transition: {
											duration: 0.5,
											mass: 0.4,
											damping: 8,
										},
									}}
									whileInView={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 0.5,
											mass: 0.4,
											damping: 8,
										},
									}}
								>
									<VStack justify="space-between" align="start" h="100%">
										<VStack align="start" spacing={5}>
											<HStack justify="space-between" w="100%">
												{isWeb && (
													<AiOutlineChrome size={36} fill={COLORS.pink} />
												)}
												{isMobile && (
													<AiOutlineMobile size={36} fill={COLORS.pink} />
												)}

												<HStack>
													{project.project_url && (
														<a
															href={project.project_url}
															target="_blank"
															rel="noreferrer"
														>
															<IoMdOpen size={24} fill="#ABABAB" />
														</a>
													)}
												</HStack>
											</HStack>

											<Text fontSize="xl" fontWeight="bold" color="gray.200">
												{project.title}
											</Text>

											<Text fontSize="md" fontWeight="light" color="gray.400">
												{project.descriptions}
											</Text>
										</VStack>

										<HStack spacing={3} w="100%" overflow="scroll">
											{project.tech.map((tech) => {
												return (
													<Text
														color="gray.500"
														fontSize="sm"
														key={tech}
														className="font-fira"
													>
														{tech}
													</Text>
												);
											})}
										</HStack>
									</VStack>
								</Box>
							);
						})}
					</SimpleGrid>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default ProjectSection;
