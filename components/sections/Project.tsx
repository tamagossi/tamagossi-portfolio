import React, { FC, ReactElement } from 'react';
import Image from 'next/image';
import {
	Box,
	HStack,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FaEgg } from 'react-icons/fa';
import { IoMdOpen, IoLogoGithub } from 'react-icons/io';
import { motion } from 'framer-motion';

import { Project } from 'interface/project.interface';
import { SectionIndicator } from '@/components';
import { COLORS } from '@/constants';
import { AiOutlineChrome, AiOutlineMobile } from 'react-icons/ai';

interface ProjectSectionProps {
	projects: Project[];
}

const ProjectSection: FC<ProjectSectionProps> = ({ projects }): ReactElement => {
	const featured: Project[] = projects.filter((project) => project.is_featured);
	const others: Project[] = projects.filter(
		(project) => !project.is_featured && !project.is_personal_project
	);
	const personals: Project[] = projects.filter(
		(project) => !project.is_featured && project.is_personal_project
	);

	return (
		<VStack mt="8rem" px={['0rem', null, null, '8rem']} id="project-section">
			<SectionIndicator indicator="03." title="What I've built" position="start" />

			<Box h=".2rem" />

			<VStack
				h="70vh"
				w="100%"
				spacing="8rem"
				overflow="scroll"
				scrollBehavior="smooth"
				className="masked-overflow"
				pt="20px"
				px={[10, null, null, 0]}
			>
				{featured.map((project: Project, index: number) => {
					const isOdd = index % 2 == 0;

					return (
						<HStack
							backgroundColor={[COLORS.semiblack, null, null, 'initial']}
							backgroundImage={[project.thumbnail!, null, null, 'initial']}
							backgroundPosition="center"
							backgroundSize="cover"
							borderRadius={10}
							justify={['start', null, null, isOdd ? 'end' : 'start']}
							key={project.id}
							p={10}
							position="relative"
							w="100%"
							backgroundBlendMode="multiply"
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
								display={['none', null, null, 'block']}
								position="absolute"
								top="0"
								zIndex={1}
								left={isOdd ? '0' : 'initial'}
								right={!isOdd ? '0' : 'initial'}
							>
								<Image
									height="400px"
									width="620px"
									src={project.thumbnail!}
									alt={project.title}
								/>
							</Box>

							<VStack
								alignItems={['start', null, null, isOdd ? 'end' : 'start']}
								justify="center"
								spacing={1}
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
									_hover={{ color: COLORS.pink }}
									transitionDuration="1s"
								>
									{project.title}
								</Text>

								<Box h="1.2rem" />

								<Box
									bg={[null, null, null, COLORS.semiblack]}
									w={['100%', null, '80%', '55%']}
									p={5}
									borderRadius={5}
								>
									<Text color="gray.300" fontSize="sm">
										{project.descriptions}. My responsibilities are:
									</Text>

									<VStack
										alignItems="start"
										mt=".9rem"
										spacing={1}
										display={['none', null, null, 'flex']}
									>
										{project.responsibilities?.map((resp) => {
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

				<VStack spacing={10} w="100%" px={['1rem', null, '4rem', '0rem']}>
					<Tabs w="100%" isFitted>
						<TabList>
							<Tab _selected={{ bg: COLORS.pink }} transitionDuration=".5s">
								<Text className="font-fira" fontSize="xl" fontWeight="semibold">
									Other Project
								</Text>
							</Tab>

							<Tab _selected={{ bg: COLORS.pink }} transitionDuration=".5s">
								<Text className="font-fira" fontSize="xl" fontWeight="semibold">
									Personal Project
								</Text>
							</Tab>
						</TabList>

						<TabPanels mt={10}>
							<TabPanel>
								<ProjectGrid projects={others} />
							</TabPanel>

							<TabPanel>
								<ProjectGrid projects={personals} />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</VStack>
			</VStack>
		</VStack>
	);
};

const ProjectGrid: FC<{ projects: Project[] }> = ({ projects }): ReactElement => {
	return (
		<SimpleGrid columns={[1, null, 2, 3]} spacing={5} w="100%">
			{projects.map((project) => {
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
									{isWeb && <AiOutlineChrome size={36} fill={COLORS.pink} />}
									{isMobile && <AiOutlineMobile size={36} fill={COLORS.pink} />}

									<HStack spacing={4}>
										{project.github_url && (
											<a
												href={project.github_url}
												target="_blank"
												rel="noreferrer"
											>
												<IoLogoGithub size={24} fill="#ABABAB" />
											</a>
										)}

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

								<Text
									fontSize="xl"
									fontWeight="bold"
									color="white"
									_hover={{ color: COLORS.pink }}
								>
									{project.title}
								</Text>

								<Text fontSize="sm" fontWeight="light" color="gray.300">
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
	);
};

export default ProjectSection;