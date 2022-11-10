import React, { FC, ReactElement, useEffect, useState } from 'react';
import { EmailIcon, DownloadIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import {
	Box,
	Text,
	Avatar,
	useMediaQuery,
	VStack,
	HStack,
	Button,
	Image as ChakraImage,
} from '@chakra-ui/react';

const OrganismProfile: FC = (): ReactElement => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isMobile] = useMediaQuery('(max-width: 920px)', {
		ssr: true,
		fallback: false, // return false on the server, and re-evaluate on the client side
	});

	useEffect(() => {
		const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Box
			maxWidth="100vw"
			height="100vh"
			background="black"
			position="relative"
			overflow="hidden"
		>
			<ChakraImage
				left="50%"
				position="absolute"
				src="/icons/stars-white.png"
				style={{ transform: 'translate(-50%, -50%)' }}
				top="50%"
				width="85%"
			/>

			<ChakraImage
				left="50%"
				position="absolute"
				src="/icons/stars-yellow.png"
				style={{ transform: 'translate(-50%, -50%)' }}
				top="50%"
				width="80%"
			/>

			{[
				{ src: '/icons/moon-white.png', top: 10, left: 90 },
				{ src: '/icons/moon-red.png', bottom: 50, right: 100 },
			].map((items) => {
				const { src, ...position } = items;

				return (
					<motion.div
						key={src}
						animate={{ y: [0, 50, 0] }}
						transition={{
							yoyo: Infinity,
							ease: 'easeInOut',
							duration: 3,
						}}
						style={{
							position: 'absolute',
							width: 300,
							height: 300,
							...position,
						}}
					>
						<ChakraImage src={src} width="100%" />
					</motion.div>
				);
			})}

			{[
				{ src: '/icons/moon-purple-1.png', bottom: 10, left: 400 },
				{ src: '/icons/moon-purple-2.png', top: 50, right: 100 },
			].map((items) => {
				const { src, ...position } = items;

				return (
					<motion.div
						key={src}
						animate={{ y: [50, 0, 50] }}
						transition={{
							yoyo: Infinity,
							ease: 'easeInOut',
							duration: 3,
						}}
						style={{
							position: 'absolute',
							width: 500,
							height: 500,
							...position,
						}}
					>
						<ChakraImage src={src} width="100%" />
					</motion.div>
				);
			})}
			<Text
				fontSize={200 - scrollPosition / 7}
				fontWeight={800 - scrollPosition / 5}
				position="absolute"
				top={`${-20 + scrollPosition / 13.5}%`}
				left="50%"
				style={{ transform: 'translate(-50%, -50%)' }}
			>
				Tamagossi
			</Text>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					type: 'spring',
					stiffness: 50,
				}}
				style={{
					position: 'absolute',
					width: 200,
					height: 200,
					top: '28%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Avatar size="full" />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					type: 'spring',
					stiffness: 50,
				}}
				style={{
					position: 'absolute',
					top: isMobile ? '67%' : '62%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<VStack spacing={5}>
					<Text textAlign="center" fontSize="2xl" lineHeight="shorter">
						Hi!! ✋🏻 I am Raka Pratama, but you can call me <strong>Tama</strong> 🙆🏻‍♂️.
						Professional experienced software engineer with strong expertise in
						Javascript technologies such as React, React Native, and Node.js.
					</Text>

					<HStack spacing={5}>
						<Button
							as="a"
							background="black"
							href="https://docs.google.com/document/d/1F1LpN8UlYY0KEqx3kPPGqsUposzx839dKacHyjn7j4Q/edit?usp=sharing"
							leftIcon={<DownloadIcon />}
							size="lg"
							target="_blank"
						>
							See Tama&apos;s CV
						</Button>

						<Button
							as="a"
							background="purple"
							href="mailto:mgf.prauliyatama@gmail.com?subject=Hey%20Tama,%20Lets%20work%20together!"
							rightIcon={<EmailIcon />}
							size="lg"
							target="_blank"
						>
							Mail Tama
						</Button>
					</HStack>
				</VStack>
			</motion.div>
		</Box>
	);
};

export default OrganismProfile;
