import React, { FC, ReactElement, useState } from 'react';
import { Box, HStack, VStack, Text, Grid, GridItem } from '@chakra-ui/react';

import { MoleculeExperienceBox } from '@/components/molecules';

import { useExperienceQuery } from '@/hooks';
import { Experience } from 'interface/experience.interface';

const OrganisHomepageProjectSection: FC = (): ReactElement => {
	const { useGetExperiences } = useExperienceQuery();

	const [activeExperience, setActiveExperience] = useState<number>(0);

	const { data: experiences, isLoading } = useGetExperiences({});

	if (isLoading || !experiences) return <></>;

	const selectedExperience = experiences[activeExperience];

	console.log(activeExperience);
	console.log(`${activeExperience * 60}px`);

	return isLoading ? (
		<></>
	) : (
		<>
			<Grid
				alignItems="center"
				templateColumns="repeat(24, 1fr)"
				height="100vh"
				columnGap={10}
				display={['none', null, null, 'grid']}
				px="7rem"
			>
				<GridItem colSpan={[0, null, null, 5]}>
					<Text fontSize="36px" fontWeight="bold" textAlign="center">
						Where I&apos;ve worked
					</Text>
				</GridItem>

				<GridItem colSpan={[24, null, null, 19]}>
					<HStack spacing="5rem" overflow="hidden">
						<HStack spacing="2rem">
							<Box
								width="8px"
								height={`${experiences.length * 60}px`}
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
									top={`${activeExperience * 60}px`}
									transitionDuration="1s"
								/>
							</Box>

							<VStack spacing={0} alignItems="start">
								{experiences.map((experience: Experience, index: number) => {
									return (
										<HStack
											alignItems="center"
											key={experience.id}
											height="60px"
											onClick={() => setActiveExperience(index)}
										>
											<Text
												fontSize="xl"
												fontWeight={500}
												cursor="pointer"
												transitionDuration="1s"
												color={
													index === activeExperience ? '#FF008C' : 'white'
												}
											>
												{experience.company}
											</Text>
										</HStack>
									);
								})}
							</VStack>
						</HStack>

						<Box
							alignItems="center"
							justifyContent="center"
							position="relative"
							height="400px"
							background="blue"
						>
							{experiences.map((experience: Experience, index: number) => {
								console.log(experience);

								return (
									<Box
										key={experience.id}
										onClick={() => setActiveExperience(index)}
										position="absolute"
										top={0}
										left={index === activeExperience ? 0 : 150}
										opacity={index === activeExperience ? 1 : 0}
										transitionDuration="1s"
									>
										<MoleculeExperienceBox {...experience} />
									</Box>
								);
							})}
						</Box>
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
					{experiences!.map((experience: Experience) => {
						return (
							<Box
								scrollSnapAlign="center"
								scrollSnapStop="always"
								key={experience.id}
							>
								<MoleculeExperienceBox {...experience} />
							</Box>
						);
					})}
				</HStack>
			</VStack>
		</>
	);
};

export default OrganisHomepageProjectSection;
