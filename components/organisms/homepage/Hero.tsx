import React from 'react';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

import { AtomCircleBackground, AtomMouseScrollAnimate } from '@/components/atoms';

const OrganismHomepageHeroSection = () => {
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
		<Box height="100vh" bg="black" position="relative" overflow="hidden" id="hero-section">
			<AtomCircleBackground />

			<Center height="100%">
				<VStack spacing={0}>
					<Text
						as={motion.p}
						fontSize={['20px', null, null, '25px']}
						fontWeight="hairline"
						mb={0}
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0 }}
						transitionDuration=".5s"
						transitionDelay="1s"
					>
						{(text as string).toUpperCase()}|.
					</Text>

					<Text
						as={motion.p}
						fontSize={['90px', null, '100px', '110px', '120px']}
						fontWeight="bold"
						mb={0}
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0 }}
						transitionDuration=".5s"
						transitionDelay=".5s"
					>
						TAMAGOSSI
					</Text>
				</VStack>
			</Center>

			<HStack
				as={motion.div}
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0 }}
				transitionDuration=".5s"
				transitionDelay="1s"
				bottom={5}
				justifyContent="center"
				position="absolute"
				width="100%"
			>
				<VStack spacing={3} cursor="pointer">
					<AtomMouseScrollAnimate />

					<Text fontSize="xl">Explore more</Text>
				</VStack>
			</HStack>
		</Box>
	);
};

export default OrganismHomepageHeroSection;
