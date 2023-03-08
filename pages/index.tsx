import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { NextPage } from 'next';

import { MoleculeNavbar } from '@/components/molecules';
import {
	OrganismFooter,
	OrganismHomepageAboutSection,
	OrganismHomepageExperienceSection,
	OrganismHomepageHeroSection,
	OrganismHomepageProjectSection,
} from '@/components/organisms';

const HomePage: NextPage = () => {
	return (
		<Box
			bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
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
					sx={{ bottom: -10, right: 0 }}
				/>

				<OrganismHomepageHeroSection />
			</Box>

			<Box
				bg="linear-gradient(137.05deg, #80054A 20.62%, #80054A 75.9%)"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
			>
				z <OrganismHomepageAboutSection />
			</Box>

			<Box
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				position="relative"
				overflow="hidden"
			>
				<Image
					src="/images/waves-pink.svg"
					alt="hero"
					width="100%"
					height="100px"
					position="absolute"
				/>

				<OrganismHomepageProjectSection />
			</Box>

			<Box
				bg="linear-gradient(137.05deg, #80054A 20.62%, #80054A 75.9%)"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
			>
				<OrganismHomepageExperienceSection />
			</Box>

			<Box
				bg="linear-gradient(137.05deg, #80054A 20.62%, #80054A 75.9%)"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
			>
				<Image
					src="/images/waves-pink-2.svg"
					alt="hero"
					width="100%"
					height="200px"
					position="absolute"
				/>

				<OrganismFooter />
			</Box>
		</Box>
	);
};

export default HomePage;
