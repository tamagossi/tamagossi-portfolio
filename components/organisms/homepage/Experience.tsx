import React, { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const EXPERIENCES = [
	{
		title: 'Software Engineer',
		location: 'Staffinc Group',
		startYear: 2019,
		endYear: 'Present',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Front End Engineer Freelance',
		location: '99 Group',
		startYear: 2018,
		endYear: 2019,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Team Lead Software Engineer',
		location: 'Smooets',
		startYear: 2018,
		endYear: 2019,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Front-End Engineer',
		location: 'Smooets',
		startYear: 2018,
		endYear: 2018,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
];

const OrganisHomepageBioSection: FC = (): ReactElement => {
	return (
		<Center height="100vh" id="bio-section" overflow="hidden" px="5rem">
			<VStack
				as={motion.div}
				initial={{ opacity: 0, scale: 0.8 }}
				w="100%"
				spacing={10}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { ease: 'easeOut', duration: 0.5 },
				}}
			>
				<HStack justify="start" w="60%">
					<Text
						fontSize="7xl"
						fontWeight="black"
						wordBreak="break-word"
						lineHeight="shorter"
					>
						Professional Experience
					</Text>
				</HStack>

				<Accordion
					allowToggle
					w="60%"
					maxH="27vw"
					overflowY="auto"
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
					<VStack spacing={5}>
						{EXPERIENCES.map((experience, index) => {
							const { title, location, startYear, endYear, description } = experience;

							return (
								<AccordionItem w="100%" key={title + index}>
									{({ isExpanded }) => (
										<>
											<AccordionButton
												bg="pink.500"
												_hover={{ bg: 'pink.400' }}
												px={7}
												py={5}
												borderRadius="1rem"
											>
												<Box flex="1" textAlign="left">
													<Text fontSize="2xl" color="whiteAlpha.800">
														{title} at <strong>{location}</strong>
													</Text>
												</Box>

												<HStack spacing={10}>
													<Text
														fontSize="xl"
														fontWeight={550}
														color="whiteAlpha.800"
													>
														{startYear} - {endYear}
													</Text>

													{isExpanded ? (
														<MinusIcon
															fontSize="20px"
															color="whiteAlpha.600"
														/>
													) : (
														<AddIcon
															fontSize="20px"
															color="whiteAlpha.600"
														/>
													)}
												</HStack>
											</AccordionButton>

											<AccordionPanel
												mt={5}
												pb={4}
												fontSize="2xl"
												bg="pink.900"
												p={10}
												borderRadius="1rem"
											>
												{description}
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
							);
						})}
					</VStack>
				</Accordion>
			</VStack>
		</Center>
	);
};

export default OrganisHomepageBioSection;
