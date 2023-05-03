import React, { FC, ReactElement, useState } from 'react';
import { Box, HStack, VStack, Text, Grid, GridItem, Center } from '@chakra-ui/react';
import { FaEgg } from 'react-icons/fa';

import { SectionIndicator } from '@/components';

import { Experience } from 'interface/experience.interface';
import { COLORS } from '@/constants';

const ExperienceBox: FC<Experience> = ({
	id,
	title,
	company,
	company_url,
	start_date,
	end_date,
	descriptions,
}): ReactElement => {
	return (
		<Box
			borderRadius="2xl"
			width={['450px', null, null, '500px', '600px']}
			height="400px"
			overflowY="auto"
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
			<VStack alignItems="start" spacing="1rem">
				<VStack alignItems="start" spacing={0}>
					<a href={company_url}>
						<Text fontSize="xl" fontWeight={700} color={COLORS.pink}>
							{company}
						</Text>
					</a>

					<Text fontSize="xs">{title.toUpperCase()}</Text>

					<Text fontSize="xs" color="gray.400">
						{start_date} - {end_date}
					</Text>
				</VStack>

				{descriptions && (
					<VStack>
						{descriptions.map((desc) => {
							return (
								<HStack key={desc} spacing={4}>
									<Box>
										<FaEgg color={COLORS.pink} size={12} />
									</Box>

									<Text fontSize="sm" color="gray.400" className="font-poppins">
										{desc}
									</Text>
								</HStack>
							);
						})}
					</VStack>
				)}
			</VStack>
		</Box>
	);
};

const ExperienceTitle: FC<{
	experiences: Experience[];
	setActiveExperience: (index: number) => void;
	activeExperience: number;
}> = ({ experiences, setActiveExperience, activeExperience }) => {
	return (
		<>
			{experiences.map((experience: Experience, index: number) => {
				const isActive = index === activeExperience;

				return (
					<VStack
						alignItems="start"
						key={experience.id}
						height="50px"
						spacing={-1}
						onClick={() => setActiveExperience(index)}
						borderBottom={[2, null, 0]}
						borderBottomStyle="solid"
						borderBottomColor={isActive ? COLORS.pink : COLORS.semiblack}
						transitionDuration="1s"
					>
						<Text
							fontSize="md"
							fontWeight={600}
							w="160px"
							cursor="pointer"
							transitionDuration="1s"
							color={isActive ? COLORS.pink : 'white'}
						>
							{experience.company}
						</Text>

						<Text
							color="gray.400"
							cursor="pointer"
							fontSize="xs"
							fontWeight={400}
							transitionDuration="1s"
						>
							{experience.title.toUpperCase()}
						</Text>
					</VStack>
				);
			})}
		</>
	);
};

interface ExperienceSectionPropsInterface {
	experiences: Experience[];
}

const ExperienceSection: FC<ExperienceSectionPropsInterface> = ({ experiences }): ReactElement => {
	const [activeExperience, setActiveExperience] = useState<number>(0);

	return (
		<Center h="100vh" px={['0rem', null, null, '8rem']} mt="3rem">
			<VStack w="100%" spacing={10}>
				<SectionIndicator indicator="02." title="Where I've Worked" position="center" />

				<HStack
					display={['none', null, 'flex']}
					spacing={['2rem', null, null, null, '5rem']}
					overflow="hidden"
				>
					<HStack spacing="1rem">
						<Box
							width="3px"
							height={`${experiences.length * 54}px`}
							borderRadius="3xl"
							bgColor={COLORS.semiblack}
							position="relative"
						>
							<Box
								width="3px"
								height="50px"
								borderRadius="3xl"
								bgColor="#FF008C"
								position="absolute"
								left={0}
								top={`${activeExperience * 54}px`}
								transitionDuration="1s"
							/>
						</Box>

						<VStack spacing={1} alignItems="start">
							<ExperienceTitle
								experiences={experiences}
								setActiveExperience={setActiveExperience}
								activeExperience={activeExperience}
							/>
						</VStack>
					</HStack>

					<Box
						alignItems="center"
						justifyContent="center"
						position="relative"
						height="400px"
						w={['90vw', null, '45vw']}
					>
						{experiences.map((experience: Experience, index: number) => {
							return (
								<Box
									key={experience.id}
									onClick={() => setActiveExperience(index)}
									left={index === activeExperience ? 0 : 150}
									opacity={index === activeExperience ? 1 : 0}
									position="absolute"
									transitionDuration="1s"
								>
									<ExperienceBox {...experience} />
								</Box>
							);
						})}
					</Box>
				</HStack>

				<VStack display={['flex', null, 'none']} spacing={5} overflow="hidden">
					<HStack w="100vw" overflow="scroll" px="1.5rem">
						<ExperienceTitle
							experiences={experiences}
							setActiveExperience={setActiveExperience}
							activeExperience={activeExperience}
						/>
					</HStack>

					<Box
						alignItems="center"
						justifyContent="center"
						position="relative"
						height="400px"
						w={['90vw', null, '45vw']}
					>
						{experiences.map((experience: Experience, index: number) => {
							return (
								<Box
									key={experience.id}
									onClick={() => setActiveExperience(index)}
									left={index === activeExperience ? 0 : 150}
									opacity={index === activeExperience ? 1 : 0}
									position="absolute"
									transitionDuration="1s"
								>
									<ExperienceBox {...experience} />
								</Box>
							);
						})}
					</Box>
				</VStack>
			</VStack>
		</Center>
	);

	return (
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
					<Text fontSize="30px" fontWeight="bold" textAlign="center">
						Where I&apos;ve worked
					</Text>
				</GridItem>

				<GridItem colSpan={[24, null, null, 19]}>
					<HStack spacing={['2rem', null, null, null, '5rem']} overflow="hidden">
						<HStack spacing="1rem">
							<Box
								width="8px"
								height={`${experiences.length * 54}px`}
								borderRadius="3xl"
								bgColor="#5B0334"
								position="relative"
							>
								<Box
									width={2}
									height="50px"
									borderRadius="3xl"
									bgColor="#FF008C"
									position="absolute"
									left={0}
									top={`${activeExperience * 54}px`}
									transitionDuration="1s"
								/>
							</Box>

							<VStack spacing={1} alignItems="start">
								{experiences.map((experience: Experience, index: number) => {
									return (
										<VStack
											alignItems="start"
											key={experience.id}
											height="50px"
											spacing={-1}
											onClick={() => setActiveExperience(index)}
										>
											<Text
												fontSize="md"
												fontWeight={600}
												cursor="pointer"
												transitionDuration="1s"
												color={
													index === activeExperience ? '#FF008C' : 'white'
												}
											>
												{experience.company}
											</Text>

											<Text
												fontSize="xs"
												fontWeight={400}
												cursor="pointer"
												transitionDuration="1s"
												color={
													index === activeExperience ? '#FF008C' : 'white'
												}
											>
												{experience.title.toUpperCase()}
											</Text>
										</VStack>
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
										<ExperienceBox {...experience} />
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
					{experiences.map((experience: Experience) => {
						return (
							<Box
								scrollSnapAlign="center"
								scrollSnapStop="always"
								key={experience.id}
							>
								<ExperienceBox {...experience} />
							</Box>
						);
					})}
				</HStack>
			</VStack>
		</>
	);
};

export default ExperienceSection;
