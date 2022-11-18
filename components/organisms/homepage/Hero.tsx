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
				<VStack>
					<Text
						as={motion.p}
						fontSize={['20px', null, null, '25px']}
						fontWeight="hairline"
						mb={0}
						whileInView={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0 }}
						transitionDuration=".5s"
						transitionDelay=".5s"
					>
						{(text as string).toUpperCase()}|.
					</Text>

					<Text
						as={motion.p}
						fontSize={['90px', null, '100px', '110px', '120px']}
						fontWeight="bold"
						mb={0}
						whileInView={{ y: 0, opacity: 1 }}
						initial={{ y: 500, opacity: 0 }}
						exit={{ y: 500, opacity: 0, transition: { duration: 0.5 } }}
						transitionDuration=".2s"
					>
						TAMAGOSSI
					</Text>

					<HStack
						as={motion.div}
						whileInView={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0 }}
						transitionDuration=".2s"
						transitionDelay=".2s"
						bottom={5}
						justifyContent="center"
						position="absolute"
						width="100%"
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
