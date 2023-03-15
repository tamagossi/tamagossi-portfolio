import React, { FC, ReactElement } from 'react';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';

import { MoleculeSkillCard } from '@/components/molecules';
import { motion } from 'framer-motion';

const SKILLS = [
	<MoleculeSkillCard
		description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
		image="/icons/front-end.png"
		key="skill-1"
		techs={['ReactJS', 'VueJS', 'Svelte', 'Angular']}
		title="Front-End Development"
	/>,
	<MoleculeSkillCard
		description="Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium"
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
						Hello! My name is Tama and I enjoy creating things that live on the
						internet. My interest in web development started back in 2017 when I decided
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam.
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
