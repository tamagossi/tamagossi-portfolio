import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AtomCircleBackground: FC = (): ReactElement => {
	return (
		<Box id="circle-pattern">
			{[500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300].map((size, index) => {
				return (
					<motion.div
						key={size}
						animate={{ width: [0, size, 0], height: [0, size, 0] }}
						transition={{
							yoyo: Infinity,
							ease: 'easeInOut',
							duration: 5.3,
							delay: (index + 1) * 3.7,
						}}
						style={{
							position: 'absolute',
							transform: 'translate(-50%, -50%)',
							top: '50%',
							left: '50%',
						}}
					>
						<Box
							border="1px"
							borderColor="whiteAlpha.500"
							borderRadius="full"
							height="100%"
							left="50%"
							top="50%"
							width="100%"
						/>
					</motion.div>
				);
			})}
		</Box>
	);
};

export default AtomCircleBackground;
