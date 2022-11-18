import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box, HStack, VStack, Image, Grid, GridItem, Text, Divider } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillDownCircle } from 'react-icons/ai';

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
		<Box height="100vh" id="project-section" overflow="hidden" pr="5rem">
			<Grid
				gap={4}
				h="100vh"
				overflow="hidden"
				templateColumns="repeat(24, 1fr)"
				style={{ marginTop: 200 }}
			>
				<GridItem
					borderTopRightRadius="6rem"
					colSpan={14}
					bg="whiteAlpha.200"
					overflow="hidden"
					p="5rem"
				>
					<VStack spacing={10} as={motion.div} animate={projectSummaryControl}>
						<HStack justify="center" w="100%">
							<Image src={PROJECTS[currentIndex].image} height={350} />
						</HStack>

						<VStack alignItems="start">
							<Text fontSize="5xl" fontWeight={550}>
								{PROJECTS[currentIndex].title}
							</Text>
							<Text fontSize="xl">{PROJECTS[currentIndex].description}</Text>
						</VStack>
					</VStack>
				</GridItem>

				<GridItem colSpan={10} ml="10rem">
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
		</Box>
	);
};

export default OrganisHomepageProjectSection;
