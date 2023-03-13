import React from 'react';
import { Box, Center, Image, VStack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import { MoleculeNavbar } from '@/components/molecules';

import PROJECTS from 'constants/projects';
import { Project } from 'interface/project.interface';
import { AtomButton } from '@/components/atoms';

const HomePage: NextPage<{ projects: Project[] }> = ({ projects }) => {
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
					src="/images/project-bg.svg"
					alt="hero"
					position="absolute"
					width="70%"
					sx={{ bottom: 0, right: 0 }}
				/>

				<Box
					height="100vh"
					position="relative"
					overflow="hidden"
					id="hero-section"
					sx={{ zIndex: 3 }}
				>
					<Center
						height="100%"
						justifyContent={['center', null, 'start']}
						px={['3rem', null, '8rem']}
					>
						<VStack spacing={5} alignItems={['center', null, 'self-start']}>
							<Text
								fontSize={['32px', null, '54px']}
								fontWeight="bold"
								letterSpacing="tighter"
								lineHeight="normal"
								mb={0}
								textAlign={['center', null, 'start']}
								w="40vw"
							>
								Turn coffe into next level digital product
							</Text>

							<Text
								fontSize={['16px', null, '18px']}
								fontWeight={400}
								letterSpacing="tighter"
								lineHeight="shorter"
								mb={0}
								textAlign={['center', null, 'start']}
								w={['initial', null, '30vw']}
							>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam,eaque.
							</Text>
						</VStack>
					</Center>
				</Box>
			</Box>
		</Box>
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
