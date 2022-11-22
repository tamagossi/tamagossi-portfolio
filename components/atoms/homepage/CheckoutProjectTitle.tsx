import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiFillDownCircle } from 'react-icons/ai';

const AtomCheckoutProjectTitle = () => {
	return (
		<HStack justify="end" spacing={5}>
			<Text textAlign="right" fontSize="4xl" fontWeight={600}>
				Hey, check out my project
			</Text>

			<motion.div
				style={{ fontSize: '48px' }}
				animate={{ y: [-10, 5] }}
				transition={{
					yoyo: Infinity,
				}}
			>
				<AiFillDownCircle color="white" size={32} />
			</motion.div>
		</HStack>
	);
};

export default AtomCheckoutProjectTitle;
