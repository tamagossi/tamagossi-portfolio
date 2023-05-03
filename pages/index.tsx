import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Navbar, HeroSection, SocialMedia, AboutSection, ExperienceSection } from '@/components';
import { OrganismFooter, OrganismHomepageProjectSection } from '@/components/organisms';

import EXPERIENCES from 'constants/experience';
import PROJECTS from 'constants/projects';
import { Experience } from 'interface/experience.interface';
import { Project } from 'interface/project.interface';

const HomePage: NextPage<{ experiences: Experience[]; projects: Project[] }> = ({
	experiences,
	projects,
}) => {
	return (
		<Box
			bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
			h="100vh"
			overflowY="scroll"
			position="relative"
			scrollSnapType="y mandatory"
			scrollBehavior="smooth"
			zIndex="docked"
		>
			<Navbar />
			<SocialMedia />

			<Box
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				position="relative"
				overflow="hidden"
			>
				<HeroSection />
			</Box>

			<Box
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				position="relative"
				overflow="hidden"
			>
				<AboutSection />
			</Box>

			<Box
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				position="relative"
				overflow="hidden"
			>
				<ExperienceSection experiences={experiences} />
			</Box>

			{/* <Box
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

				<OrganismHomepageProjectSection projects={projects} />
			</Box>

			<Box
				bg="linear-gradient(137.05deg, #80054A 20.62%, #80054A 75.9%)"
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
			>
				<OrganismHomepageExperienceSection experiences={experiences} />
			</Box>

			<Box
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
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
			</Box> */}
		</Box>
	);
};

export async function getStaticProps() {
	return {
		props: {
			experiences: EXPERIENCES,
			projects: PROJECTS,
		},
	};
}

export default HomePage;
