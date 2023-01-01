import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { NextPage } from 'next';

import { MoleculeNavbar } from '@/components/molecules';
import { OrganismHomepageHeroSection } from '@/components/organisms';

const HomePage: NextPage = () => {
	return (
		<Box
			h="100vh"
			overflowY="scroll"
			position="relative"
			scrollBehavior="smooth"
			scrollSnapType="y mandatory"
			zIndex="docked"
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
			<MoleculeNavbar />
			<Box
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				sx={{ zIndex: 1 }}
				position="relative"
				overflow="hidden"
			>
				<Image
					src="/icons/hero-icon.svg"
					alt="hero"
					position="absolute"
					sx={{ zIndex: 2, bottom: -10, right: 0 }}
				/>

				<OrganismHomepageHeroSection />
			</Box>

			<Box
				bg="blue.500"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
			></Box>
		</Box>
	);
};

export default HomePage;
