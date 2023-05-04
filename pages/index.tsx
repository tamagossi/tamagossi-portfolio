import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import {
	AboutSection,
	ExperienceSection,
	FooterSection,
	HeroSection,
	Navbar,
	ProjectSection,
	SocialMedia,
} from '@/components';

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

			<Box
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				position="relative"
				overflow="hidden"
			>
				<ProjectSection projects={projects} />
			</Box>

			<Box
				h="100vh"
				scrollSnapAlign="center"
				scrollSnapStop="always"
				w="100%"
				position="relative"
				overflow="hidden"
			>
				<FooterSection />
			</Box>
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
