import React, { FC, ReactElement } from 'react';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';

import { MoleculeSkillCard } from '@/components/molecules';
import { motion } from 'framer-motion';

const SKILLS = [
	<MoleculeSkillCard
		description="Creating highly responsive and visually appealing user interfaces. At the moment, I also work as a Front-End engineer in startup company to create their website using NextJS"
		image="/icons/front-end.png"
		key="skill-1"
		techs={['ReactJS', 'NextJS', 'VueJS', 'Flutter']}
		title="Front-End Development"
	/>,
	<MoleculeSkillCard
		description="Creating robust and scalable server-side applications mostly using Go and Node.js. Have a good understanding of database management, including SQL and NoSQL."
		image="/icons/back-end.png"
		key="skill-2"
		techs={['ExpressJS', 'Go', 'Laravel']}
		title="Back-End Development"
	/>,
];

const OrganismHomepageAboutSection: FC = (): ReactElement => {
	return (
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
				px={['0rem', null, null, '8rem']}
			>
				<VStack
					w="100vw"
					spacing={3}
					alignItems="center"
					as={motion.div}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 1,
							type: 'spring',
							stiffness: 50,
						},
					}}
				>
					<VStack spacing={-1}>
						<Text
							fontSize={['14px', null, '18px']}
							fontWeight={400}
							textAlign={['center', null, 'start']}
						>
							ABOUT
						</Text>

						<Text
							fontSize="30px"
							fontWeight={700}
							textAlign={['center', null, 'start']}
						>
							Developer
						</Text>
					</VStack>

					<Text
						fontSize="14px"
						fontWeight={400}
						textAlign="center"
						px={['0px', '3rem', '6rem', '9rem', '12rem']}
					>
						Experienced software engineer with a focus on Front-End development,
						proficient in Javascript, Go, and Dart. Skilled in using frameworks such as
						NextJS, ReactJS, and Flutter. Strong foundation in computer science, with 4+
						years of industry experience.
					</Text>

					<Box h={['1rem', null, null, '3rem']} />

					<HStack
						alignItems="center"
						display={['none', null, 'flex']}
						flexWrap="wrap"
						gap={5}
						justifyContent="center"
					>
						{SKILLS[0]}
						{SKILLS[1]}
					</HStack>

					<HStack
						overflow="scroll"
						scrollBehavior="smooth"
						scrollSnapType="x mandatory"
						w="100vw"
						spacing={5}
						display={['flex', null, 'none']}
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
						<Box scrollSnapAlign="center" scrollSnapStop="always">
							{SKILLS[0]}
						</Box>

						<Box scrollSnapAlign="center" scrollSnapStop="always">
							{SKILLS[1]}
						</Box>
					</HStack>
				</VStack>
			</Center>
		</Box>
	);
};

export default OrganismHomepageAboutSection;
