import React, { FC, ReactElement } from 'react';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

import { AtomMouseScrollAnimate } from '@/components/atoms';

const OrganismHomepageHeroSection: FC = (): ReactElement => {
	const [text] = useTypewriter({
		loop: true,
		delaySpeed: 2000,
		typeSpeed: 50,
		deleteSpeed: 10,
		words: [
			'I am Software Engineer 💻',
			'Also loves develop Front End apps 💛',
			'But also loves creamy latte without sugar ☕️',
		],
	});

	return (
		<Box height="100vh" position="relative" overflow="hidden" id="hero-section">
			<Center height="100%">
				<VStack spacing={0}>
					<Text
						fontSize={['20px', null, null, '25px']}
						fontWeight="hairline"
						mb={0}
						as={motion.p}
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { ease: 'easeOut', duration: 0.5, delay: 0.4 },
						}}
					>
						{(text as string).toUpperCase()}|.
					</Text>

					<Text
						fontSize={['90px', null, '100px', '110px', '120px']}
						fontWeight="bold"
						mb={0}
						as={motion.p}
						initial={{ y: 500, opacity: 0 }}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeOut', duration: 0.5, delay: 0.2 },
						}}
						exit={{
							y: 500,
							opacity: 0,
							transition: { ease: 'easeOut', duration: 0.5 },
						}}
					>
						TAMAGOSSI
					</Text>

					<HStack
						bottom={5}
						justifyContent="center"
						position="absolute"
						width="100%"
						as={motion.div}
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { ease: 'easeOut', duration: 0.5, delay: 0.2 },
						}}
						initial={{ opacity: 0, scale: 0 }}
					>
						<VStack spacing={5}>
							<AtomMouseScrollAnimate />

							<Text fontSize="xl">Scroll down slowly</Text>
						</VStack>
					</HStack>
				</VStack>
			</Center>
		</Box>
	);
};

export default OrganismHomepageHeroSection;
