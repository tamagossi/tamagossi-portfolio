import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box, HStack, VStack, Image, Grid, GridItem, Text, Divider, Badge } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

import { AtomCheckoutProjectTitle } from '@/components/atoms';
import { MoleculeProjectSummary } from '@/components/molecules';

type PROJECT = {
	image: string;
	title: string;
	description: string;
};

const PROJECTS: PROJECT[] = [
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
				display={['none', null, null, null, 'grid']}
				gap={4}
				h="100vh"
				overflow="hidden"
				style={{ marginTop: 200 }}
				templateColumns="repeat(24, 1fr)"
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
					<Box as={motion.div} animate={projectSummaryControl}>
						<MoleculeProjectSummary
							description={PROJECTS[currentIndex].description}
							image={PROJECTS[currentIndex].image}
							title={PROJECTS[currentIndex].title}
						/>
					</Box>
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
					<AtomCheckoutProjectTitle />

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
				<AtomCheckoutProjectTitle />

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
					<Box as={motion.div} animate={projectSummaryControl}>
						<MoleculeProjectSummary
							description={PROJECTS[currentIndex].description}
							image={PROJECTS[currentIndex].image}
							title={PROJECTS[currentIndex].title}
						/>
					</Box>
				</Box>
			</VStack>
		</Box>
	);
};

export default OrganisHomepageProjectSection;
