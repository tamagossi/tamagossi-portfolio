import React from 'react';
import { OrganismNavbar, OrganismProfile } from '@/components/organisms';
import { Box, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
	return (
		<Box>
			<OrganismNavbar />
			<OrganismProfile />
		</Box>
	);
};

export default HomePage;
