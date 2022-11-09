import React from 'react';
import { OrganismNavbar } from '@/components/organisms';
import { Box, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
	return (
		<Box>
			<OrganismNavbar />

			<Box height={800} width="100%" background="black" />
		</Box>
	);
};

export default HomePage;
