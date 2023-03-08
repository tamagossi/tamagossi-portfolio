import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { AtomButton } from '../atoms';

const OrganismFooter = () => {
	return (
		<Box bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)" h="100vh">
			<VStack justifyContent="center" h="100vh" spacing="2rem">
				<VStack spacing={0}>
					<Text fontWeight={500}>WHAT&apos;S NEXT?</Text>
					<Text fontWeight={700} fontSize="4xl">
						Get in Touch
					</Text>
				</VStack>

				<Text textAlign="center" px={['3rem', null, '10rem', '15rem']}>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
					doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
					veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</Text>

				<AtomButton>CONTACT ME</AtomButton>

				<Text>© 2023 Raka Pratama</Text>
			</VStack>
		</Box>
	);
};

export default OrganismFooter;
