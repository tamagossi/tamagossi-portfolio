import React, { FC, ReactElement } from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const OrganisHomepageBioSection: FC = (): ReactElement => {
	return (
		<HStack
			height="100vh"
			id="bio-section"
			justify={['center', null, null, null, 'start']}
			overflow="hidden"
			px="5rem"
		>
			<VStack w={['100%', null, null, null, '50%']} alignItems="start" spacing={5}>
				<Text
					fontSize={['40px', null, null, null, '55px']}
					fontWeight="bold"
					mb={0}
					as={motion.p}
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transitionDuration=".2s"
				>
					Hey, let me tell you something..
				</Text>

				<Text
					fontSize={['xl', null, null, null, '2xl']}
					mb={0}
					as={motion.p}
					initial={{ x: 200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transitionDuration=".4s"
					lineHeight="short"
				>
					I am software engineer with 3+ years experienced software engineer with strong
					expertise in Javascript technologies such as React, React Native, and Node.js.
					Besides, also have a good grasp of Dart and a good knowledge of great-to-have
					theory to software engineering field
				</Text>
			</VStack>
		</HStack>
	);
};

export default OrganisHomepageBioSection;
