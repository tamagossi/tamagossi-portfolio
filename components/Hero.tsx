import React, { FC, ReactElement } from 'react';
import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { COLORS } from '@/constants';

const OrganismHeroSection: FC = (): ReactElement => {
	return (
		<Box
			height="100vh"
			overflow="hidden"
			id="hero-section"
			sx={{ zIndex: 3 }}
			as={motion.div}
			initial={{ y: 400, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { ease: 'easeOut', duration: 1 },
			}}
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
			<Center
				height="100%"
				justifyContent={['center', null, 'start']}
				px={['2rem', null, '8rem']}
			>
				<VStack spacing={[5, null, 2]} alignItems={['center', null, 'start']} w="100vw">
					<Text
						className="font-fira"
						color={COLORS.pink}
						fontSize="lg"
						fontWeight="light"
						letterSpacing="tighter"
						textAlign={['center', null, 'start']}
					>
						Hi mate.. I am
					</Text>

					<VStack spacing={-1} alignItems={['center', null, 'start']}>
						<Text
							className="font-poppins"
							fontSize={['4xl', null, '6xl']}
							fontWeight={700}
							letterSpacing="tight"
							textAlign={['center', null, 'start']}
							transitionDuration="1s"
						>
							Tamagossi ,
						</Text>

						<Text
							className="font-poppins"
							color="gray.400"
							fontSize={['4xl', null, '6xl']}
							fontWeight={700}
							letterSpacing="tight"
							lineHeight="shorter"
							textAlign={['center', null, 'start']}
							transitionDuration="1s"
						>
							your lovely software engineer 💻
						</Text>
					</VStack>

					<Text
						className="font-poppins"
						color="gray.300"
						fontSize={['14px', null, '16px']}
						fontWeight={400}
						pt={4}
						textAlign={['center', null, 'start']}
						transitionDuration="1s"
						w={['initial', null, '50vw']}
					>
						I’m software engineer specializing in building web and mobile application.
						Currently, helping{' '}
						<a
							href="http://www.staffinc.co"
							target="_blank"
							rel="noreferrer"
							style={{ color: COLORS.pink }}
						>
							Staffinc
						</a>{' '}
						to create stunning client-facing web application.
					</Text>
				</VStack>
			</Center>
		</Box>
	);
};

export default OrganismHeroSection;
