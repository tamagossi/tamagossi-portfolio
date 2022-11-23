import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { MoleculeNavbar } from '@/components/molecules';
import {
	OrganismHomepageBioSection,
	OrganisMHomepageExperienceSection,
	OrganismHomepageHeroSection,
	OrganismHomepageProjectSection,
} from '@/components/organisms';

const HomePage: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>Tamagossi</title>
			</Head>

			<MoleculeNavbar />

			<div className="snap-y smooth-scrolling snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden bg-black">
				<div className="snap-center">
					<OrganismHomepageHeroSection />
				</div>

				<div className="snap-center">
					<OrganismHomepageBioSection />
				</div>

				<div className="snap-center">
					<OrganismHomepageProjectSection />
				</div>

				<div className="snap-center">
					<OrganisMHomepageExperienceSection />
				</div>
			</div>
		</Box>
	);
};

export default HomePage;
