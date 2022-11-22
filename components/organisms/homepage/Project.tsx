import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box, HStack, VStack, Image, Grid, GridItem, Text, Divider, Badge } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillDownCircle, AiOutlineRight } from 'react-icons/ai';

type PROJECT = {
	image: string;
	title: string;
	description: string;
};

const PROJECTS = [
	{
		image: 'https://webkit.org/demos/srcset/image-src.png',
		title: 'Project title',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg',
		title: 'Project title #2',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg',
		title: 'Project title #3',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg',
		title: 'Project title #4',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	},
];

const OrganisHomepageProjectSection: FC = (): ReactElement => {
	const projectSummaryControl = useAnimation();
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		projectSummaryControl.start({
			opacity: 0,
			scale: 0.8,
			transition: { stiffness: 100 },
		});

		setTimeout(() => {
			projectSummaryControl.start({
				opacity: 1,
				scale: 1,
				transition: { stiffness: 100 },
			});
		}, 300);
	}, [currentIndex]);

	return (
		<Box height="100vh" id="project-section" overflow="hidden" pr={['0', null, null, '5rem']}>
			<Grid
				gap={4}
				h="100vh"
				overflow="hidden"
				templateColumns="repeat(24, 1fr)"
				style={{ marginTop: 200 }}
				display={['none', null, null, null, 'grid']}
			>
				<GridItem
					bg="whiteAlpha.200"
					borderTopRightRadius="6rem"
					colSpan={14}
					overflow="hidden"
					p="3rem"
					as={motion.div}
					initial={{ x: -500, opacity: 0 }}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: { ease: 'easeOut', duration: 0.7 },
					}}
				>
					<VStack spacing={7} as={motion.div} animate={projectSummaryControl}>
						<HStack justify="center" w="100%">
							<Image src={PROJECTS[currentIndex].image} height={300} />
						</HStack>

						<Box height={0} />

						<VStack alignItems="start">
							<Text fontSize="5xl" fontWeight={550}>
								{PROJECTS[currentIndex].title}
							</Text>

							<Text fontSize="xl" noOfLines={2}>
								{PROJECTS[currentIndex].description}
							</Text>

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
				</GridItem>

				<GridItem
					colSpan={10}
					ml="10rem"
					as={motion.div}
					initial={{ x: 500, opacity: 0 }}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: { ease: 'easeOut', duration: 0.7 },
					}}
				>
					<HStack justify="end" spacing={5}>
						<Text textAlign="right" fontSize="4xl" fontWeight={600}>
							Hey, check out my project
						</Text>

						<motion.div
							style={{ fontSize: '48px' }}
							animate={{ y: [-10, 5] }}
							transition={{
								yoyo: Infinity,
							}}
						>
							<AiFillDownCircle color="white" size={32} />
						</motion.div>
					</HStack>

					<Divider borderColor="white" m="2rem 0 1rem" />

					<VStack
						alignItems="end"
						h="100vh"
						overflow="hidden"
						divider={<Divider borderColor="white" />}
					>
						{PROJECTS.map(({ title }, index) => {
							return (
								<Text
									key={title}
									fontSize="3xl"
									textAlign="right"
									cursor="pointer"
									onMouseOver={() => setCurrentIndex(index)}
								>
									{title}
								</Text>
							);
						})}
					</VStack>
				</GridItem>
			</Grid>

			<VStack
				h="100vh"
				overflow="hidden"
				style={{ marginTop: 200 }}
				display={['flex', null, null, null, 'none']}
				as={motion.div}
				initial={{ x: -500, opacity: 0 }}
				whileInView={{
					x: 0,
					opacity: 1,
					transition: { ease: 'easeOut', duration: 0.7 },
				}}
			>
				<HStack justify="end" spacing={5}>
					<Text textAlign="right" fontSize="4xl" fontWeight={600}>
						Hey, check out my project
					</Text>

					<motion.div
						style={{ fontSize: '48px' }}
						animate={{ y: [-10, 5] }}
						transition={{
							yoyo: Infinity,
						}}
					>
						<AiFillDownCircle color="white" size={32} />
					</motion.div>
				</HStack>

				<Divider borderColor="white" m="20px 0" />

				<Box h=".2rem" />

				<HStack
					divider={<Divider orientation="vertical" borderColor="white" />}
					overflowX="scroll"
					overflowY="hidden"
					spacing="1rem"
					whiteSpace="nowrap"
					width="90vw"
					css={{
						'&::-webkit-scrollbar': {
							width: '4px',
						},
						'&::-webkit-scrollbar-track': {
							width: '6px',
						},
						'&::-webkit-scrollbar-thumb': {
							borderRadius: '24px',
						},
					}}
				>
					{PROJECTS.map(({ title }, index) => {
						return (
							<Text
								key={title}
								cursor="pointer"
								fontSize="2xl"
								onClick={() => setCurrentIndex(index)}
							>
								{title}
							</Text>
						);
					})}
				</HStack>

				<Box
					bg="whiteAlpha.200"
					borderTopRightRadius="6rem"
					overflow="hidden"
					p="3rem"
					height="100%"
					as={motion.div}
					initial={{ x: -500, opacity: 0 }}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: { ease: 'easeOut', duration: 0.7 },
					}}
				>
					<VStack spacing={7} as={motion.div} animate={projectSummaryControl}>
						<HStack justify="center" w="100%">
							<Image src={PROJECTS[currentIndex].image} height={250} />
						</HStack>

						<Box height={0} />

						<VStack alignItems="start" spacing={0}>
							<Text fontSize="4xl" fontWeight={550}>
								{PROJECTS[currentIndex].title}
							</Text>

							<Text fontSize="lg" noOfLines={2}>
								{PROJECTS[currentIndex].description}
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
				</Box>
			</VStack>
		</Box>
	);
};

export default OrganisHomepageProjectSection;
