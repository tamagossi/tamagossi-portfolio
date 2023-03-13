import React, { FC, ReactElement } from 'react';
import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';
import { useTypewriter } from 'react-simple-typewriter';
import { AtomAnimatedTextWord, AtomButton } from '@/components/atoms';

const OrganismHomepageHeroSection: FC = (): ReactElement => {
	const [text] = useTypewriter({
		loop: true,
		delaySpeed: 2000,
		typeSpeed: 50,
		deleteSpeed: 10,
		words: ['am Software Engineer 💻', 'loves built Website 💛'],
	});

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
				px={['3rem', null, '8rem']}
			>
				<VStack spacing={5} alignItems={['center', null, 'self-start']}>
					<Text
						fontSize={['32px', null, '54px']}
						fontWeight="bold"
						letterSpacing="tighter"
						lineHeight="normal"
						mb={0}
						textAlign={['center', null, 'start']}
						w="90vw"
					>
						Hi, Tama is here!
						<br />I {text as string}|.
					</Text>

					<Text
						fontSize={['16px', null, '21px']}
						fontWeight={400}
						letterSpacing="tighter"
						lineHeight="shorter"
						mb={0}
						textAlign={['center', null, 'start']}
						w={['initial', null, '50vw']}
					>
						I’m a software engineer specializing in building (and occasionally
						designing) exceptional digital experiences.
					</Text>

					<AtomButton>Get In Touch</AtomButton>
				</VStack>
			</Center>
		</Box>
	);
};

export default OrganismHomepageHeroSection;
