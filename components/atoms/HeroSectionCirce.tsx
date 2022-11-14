import React, { FC, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const AtomHeroSectionCirce: FC = (): ReactElement => {
	return (
		<Box id="circle-pattern">
			<motion.div
				animate={{ width: ['0px', '500px', '0px'], height: ['0px', '500px', '0px'] }}
				transition={{
					yoyo: Infinity,
					ease: 'easeInOut',
					duration: 3,
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

			{['800px', '1100px', '1400px', '1700px'].map((size) => {
				return (
					<Box
						border="1px"
						borderColor="whiteAlpha.500"
						borderRadius="full"
						height={size}
						key={size}
						left="50%"
						position="absolute"
						top="50%"
						width={size}
						sx={{
							transform: 'translate(-50%, -50%)',
						}}
					/>
				);
			})}
		</Box>
	);
};

export default AtomHeroSectionCirce;
