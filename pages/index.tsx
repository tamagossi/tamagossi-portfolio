import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import {
	AboutSection,
	ExperienceSection,
	CursorFollow,
	FooterSection,
	HeroSection,
	Navbar,
	ProjectSection,
	SocialMedia,
} from '@/components';
import { MouseProvider } from '@/context';

import PROJECTS from 'constants/projects';
import { Experience } from 'interface/experience.interface';
import { Project } from 'interface/project.interface';
import { useGetExperiences } from '@/hooks';

const HomePage: NextPage<{ experiences: Experience[]; projects: Project[] }> = ({ projects }) => {
	const experiences = useGetExperiences({ params: { limit: 10, page: 1 } });

	return (
		<MouseProvider>
			<CursorFollow />

			<Box
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
				cursor="none"
				h="100vh"
				overflowY="scroll"
				position="relative"
				scrollSnapType="y mandatory"
				scrollBehavior="smooth"
				zIndex="docked"
			>
				<NextSeo
					title="Tamagossi | Software Front-End Engineer Portfolio"
					description="Welcome to Tamagossi's website! As a seasoned Software Engineer with over 5 years of experience, I specialize in creating high-performing websites and developing software solutions that meet the needs of my clients. My skills include programming languages such as JavaScript, Dart, Golang, and PHP, and frameworks such as ReactJS, NextJS, React Native, Flutter, and Laravel. With a track record of delivering high-quality work in a timely and efficient manner, I have successfully created numerous websites with great performance and user experience for my current company and freelance clients. As a collaborative team player with excellent communication skills, I strive to always deliver dynamic and responsive web applications. In addition to web development, I am also a skilled Mobile App Developer, specializing in creating visually appealing, intuitive, and seamless mobile user experiences using React Native and Flutter. If you're looking for a dedicated and experienced Software Engineer who can deliver high-quality web development and mobile app solutions, look no further. Contact me today to see how I can help you achieve your goals!"
					canonical="www.tamagossi.dev"
					openGraph={{
						url: 'www.tamagossi.dev',
						site_name: 'Tamagossi | Software Front-End Engineer Portfolio',
					}}
				/>

				<SocialMedia />

				<Navbar />

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

				{!experiences.isLoading && (
					<Box
						h="100vh"
						scrollSnapAlign="center"
						scrollSnapStop="always"
						w="100%"
						position="relative"
						overflow="hidden"
					>
						<ExperienceSection experiences={experiences.data?.data!} />
					</Box>
				)}

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
		</MouseProvider>
	);
};

export async function getStaticProps() {
	return {
		props: {
			projects: PROJECTS,
		},
	};
}

export default HomePage;
