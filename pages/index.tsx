import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { MoleculeNavbar } from '@/components/molecules';
import { OrganismHomepageBioSection, OrganismHomepageHeroSection } from '@/components/organisms';

const HomePage: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>Tamagossi</title>
			</Head>

			<MoleculeNavbar />

			<div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden bg-black">
				<div className="snap-center w-screen h-screen text-8xl">
					<OrganismHomepageHeroSection />
				</div>

				<div className="snap-center w-screen h-screen text-8xl">
					<OrganismHomepageBioSection />
				</div>

				<div className="snap-center w-screen h-screen text-8xl">
					<OrganismHomepageBioSection />
				</div>
			</div>
		</Box>
	);
};

export default HomePage;
