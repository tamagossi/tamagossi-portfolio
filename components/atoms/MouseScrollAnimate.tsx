import React, { FC, ReactElement } from 'react';
import { HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MouseScrollAnimate: FC = (): ReactElement => {
	return (
		<HStack
			border="2px"
			borderColor="whiteAlpha.800"
			borderRadius="full"
			height="3rem"
			id="mouse-scroll-animation-icon"
			width="2rem"
			justifyContent="center"
		>
			<motion.p
				style={{ fontSize: '48px' }}
				animate={{ y: [-15, -5] }}
				transition={{
					yoyo: Infinity,
				}}
			>
				.
			</motion.p>
		</HStack>
	);
};

export default MouseScrollAnimate;
