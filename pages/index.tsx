import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { MoleculeNavbar } from '@/components/molecules';
import { OrganismHomepageHeroSection } from '@/components/organisms';

const HomePage: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>Tamagossi</title>
			</Head>

			<MoleculeNavbar />

			<OrganismHomepageHeroSection />
		</Box>
	);
};

export default HomePage;
