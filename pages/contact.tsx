import React from 'react';
import { NextPage } from 'next';
import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react';

import { OrganismFooter, OrganismContactForm } from '@/components/organisms';
import { MoleculeNavbar } from '@/components/molecules';

const ContactPage: NextPage = () => {
	return (
		<Box
			bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
			h="100vh"
			overflowY="scroll"
			position="relative"
			sx={{ zIndex: 1 }}
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
			<MoleculeNavbar stickOnTop />

			<Image
				alt="Abstract Image"
				height="290px"
				position="absolute"
				src="/images/abstract-purple-square.svg"
				sx={{
					left: -150,
					bottom: -100,
					filter: `blur(60px)`,
					zIndex: -4,
				}}
			/>

			<Box h="100vh" overflow="hidden" position="relative" sx={{ zIndex: 1 }} w="100%">
				<Image
					alt="Abstract Image"
					height="290px"
					position="absolute"
					src="/images/abstract-purple-square.svg"
					sx={{
						right: -20,
						top: 0,
						filter: `blur(60px)`,
					}}
				/>

				<Box
					height="100vh"
					id="contact-section"
					overflow="hidden"
					position="relative"
					sx={{
						zIndex: 3,
					}}
				>
					<Center
						height="100%"
						justifyContent={['center', null, 'space-between']}
						px={['3rem', null, '8rem']}
					>
						<VStack spacing={16} alignItems={['center', null, 'self-start']}>
							<Text
								fontSize={['40px', null, '48px']}
								fontWeight="bold"
								letterSpacing="tighter"
								lineHeight="normal"
								mb={0}
								textAlign={['center', null, 'start']}
								w={['80vw', null, '60vw', null, '45vw']}
							>
								Ready to discuss your project with me?
							</Text>

							<OrganismContactForm />
						</VStack>

						<VStack
							alignItems={['center', null, 'self-start']}
							bg="rgba(24, 24, 24, 0.1)"
							pb={6}
							pt={16}
							px={10}
							spacing={10}
							sx={{
								boxShadow: `inset 16px -16px 48px rgba(147, 147, 147, 0.1), inset -16px -16px 48px rgba(19, 19, 19, 0.9), inset 16px 16px 60px rgba(15, 15, 15, 0.9)`,
								borderRadius: '30px',
							}}
						>
							<Text
								fontSize={['14px', null, '16px']}
								fontWeight={400}
								letterSpacing="tighter"
								mb={0}
								textAlign={['center', null, 'start']}
								w={['initial', null, '23vw']}
							>
								If you&apos;re looking for a skilled software engineer who can help
								you bring your project to life, you&apos;ve come to the right place!
								Need help with your project? I&apos;m here to help. Contact me today
								to discuss your project and learn more about my expertise.
							</Text>

							<HStack spacing={5}>
								<Image
									alt="User Avatar"
									borderRadius="full"
									boxSize="86px"
									src="https://bit.ly/dan-abramov"
								/>

								<VStack alignItems="start">
									<Text fontWeight={600}>
										Tama
										<Text fontSize={14} fontWeight="normal">
											Your lovely{' '}
											<span style={{ fontWeight: 600 }}>
												software engineer
											</span>
										</Text>
									</Text>
								</VStack>
							</HStack>
						</VStack>
					</Center>
				</Box>
			</Box>

			<OrganismFooter />
		</Box>
	);
};

export default ContactPage;
