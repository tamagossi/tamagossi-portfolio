import React, { FC, ReactElement, useState } from 'react';
import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiCursorClick } from 'react-icons/hi';

import { AtomCircleBackground } from '@/components/atoms';
import { useOnScreen } from '@/hooks';

const OrganisHomepageBioSection: FC = (): ReactElement => {
	const [isShowBio, setIsShowBio] = useState<boolean>(false);
	const [isOnScreen, onScreenRef] = useOnScreen<HTMLDivElement>();

	return (
		<Box
			height="100vh"
			bg="black"
			position="relative"
			overflow="hidden"
			id="bio-section"
			ref={onScreenRef}
		>
			<AtomCircleBackground />

			<Center height="100%">
				<AnimatePresence>
					{isOnScreen && !isShowBio && (
						<VStack
							as={motion.div}
							position="relative"
							exit={{ x: 2000, transition: { duration: 0.5 } }}
						>
							<Text
								as={motion.p}
								initial={{ y: -1000, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transitionDuration=".2s"
								cursor="pointer"
								fontSize={['90px', null, '100px', '110px', '120px']}
								fontWeight="bold"
								mb={0}
								onClick={() => setIsShowBio(true)}
								_hover={{ color: 'pink.500' }}
							>
								TAMAGOSSI
							</Text>

							<motion.div
								style={{ top: 0, right: -30, position: 'absolute' }}
								animate={{ opacity: 1, scale: 1 }}
								initial={{ opacity: 0, scale: 0 }}
								transition={{ duration: 1, delay: 0.2 }}
							>
								<motion.div
									style={{ fontSize: '48px' }}
									animate={{
										color: ['#ff00a2', '#ff9edc'],
									}}
									transition={{
										yoyo: Infinity,
									}}
								>
									<HiCursorClick size={48} />
								</motion.div>
							</motion.div>
						</VStack>
					)}
				</AnimatePresence>
			</Center>
		</Box>
	);
};

export default OrganisHomepageBioSection;
