import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

const MoleculeExperienceBox = () => {
	return (
		<Box
			bg="linear-gradient(123.86deg, #710441 28.07%, #5F0136 83.79%)"
			padding="2rem"
			borderRadius="2xl"
			width={['400px', null, '500px', '600px']}
		>
			<VStack alignItems="start" spacing="1rem">
				<VStack alignItems="start" spacing={0}>
					<Text fontSize="2xl" fontWeight={600}>
						Staffinc
					</Text>
					<Text fontSize="sm">April 2022 - Now</Text>
				</VStack>

				<ul style={{ marginLeft: 15 }}>
					<li>
						<Text fontSize="sm">
							Write modern, performant, maintainable code for a diverse array of
							client and internal projects
						</Text>
					</li>
					<li>
						<Text fontSize="sm">
							Work with a variety of different languages, platforms, frameworks, and
							content management systems such as JavaScript, TypeScript, Gatsby,
							React, Craft, WordPress, Prismic, and Netlify
						</Text>
					</li>
					<li>
						<Text fontSize="sm">
							Communicate with multi-disciplinary teams of engineers, designers,
							producers, and clients on a daily basis
						</Text>
					</li>
				</ul>
			</VStack>
		</Box>
	);
};

export default MoleculeExperienceBox;
