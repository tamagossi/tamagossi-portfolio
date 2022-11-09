import React, { FC, ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	Box,
	HStack,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	VStack,
	Image as ChakraImage,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, useScroll } from 'framer-motion';

const MENUS = [
	{ label: 'Home', url: '/' },
	{ label: 'Experiences', url: '/' },
	{ label: '', url: '/' },
	{ label: 'Projects', url: '/' },
	{ label: 'Contact', url: '/' },
];

const MOBILE_MENU = [...MENUS];
MOBILE_MENU.splice(2, 1);

const OrganismNavbar: FC = (): ReactElement => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const [scrollPosition, setScrollPosition] = useState(0);

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

	console.log(scrollPosition / 100);

	return (
		<Box
			maxWidth="100vw"
			height="100vh"
			backgroundImage="url('/images/background-1.png')"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			position="relative"
			overflow="hidden"
		>
			<Text
				color="whiteAlpha.800"
				fontSize={200}
				fontWeight={800}
				position="absolute"
				top={`${-15 + scrollPosition / 2}%`}
				left="50%"
				style={{ transform: 'translate(-50%, -50%)' }}
				display={['none', null, null, 'block']}
			>
				Tamagossi
			</Text>

			<ChakraImage
				src="/icons/moon.png"
				position="absolute"
				top={`${25 + scrollPosition / 20}%`}
				left="55%"
				width={300}
			/>

			<ChakraImage
				src="/images/background-2.png"
				position="absolute"
				bottom={`${-15 + scrollPosition / 20}%`}
				display={['none', null, null, 'block']}
			/>

			<ChakraImage
				src="/images/background-3.png"
				position="absolute"
				bottom={`${0 - scrollPosition / 40}%`}
				display={['none', null, null, 'block']}
			/>

			<HStack
				py="3.5rem"
				justifyContent="center"
				alignItems="center"
				position="relative"
				display={['none', null, null, 'flex']}
			>
				<HStack
					background="blackAlpha.700"
					borderRadius="full"
					gap={['5rem', null, null, null, '10rem']}
					px={['3rem', null, null, '5rem', '10rem']}
					py={4}
					transition="ease-in-out 0.3s"
				>
					{MENUS.map(({ label, url }: { label: string; url: string }, index: number) => {
						return (
							<Link href={url} key={label}>
								<Text
									color="white"
									fontSize="2xl"
									fontWeight={400}
									sx={{ cursor: 'pointer' }}
									transition="color 0.5s"
									transitionTimingFunction="ease-in-out"
									_hover={{
										color: 'orange',
									}}
								>
									{label}
								</Text>
							</Link>
						);
					})}
				</HStack>

				<Box
					position="absolute"
					top="50%"
					left="50%"
					style={{ transform: 'translate(-50%, -50%)' }}
				>
					<Image src="/icons/logo.png" height={110} width={110} alt="Tamagossi" />
				</Box>
			</HStack>

			<HStack
				display={['block', null, null, 'none']}
				py="2rem"
				px={['3rem', null, null, null, '15rem']}
				justifyContent={['start', null, null, 'space-between']}
				position="relative"
				transition="ease-in-out 0.3s"
			>
				<HStack alignItems="center" spacing={4}>
					<Image src="/icons/logo.png" height={40} width={40} alt="Tamagossi" />

					<Text
						transition="ease-in-out 0.3s"
						color="whiteAlpha.800"
						fontSize="4xl"
						fontWeight="bold"
					>
						Tamagossi
					</Text>
				</HStack>

				<Box
					bg="whiteAlpha.100"
					borderBottomLeftRadius={15}
					borderTopLeftRadius={15}
					p="1rem"
					position="absolute"
					right={0}
					sx={{ cursor: 'pointer' }}
					top="15%"
					translateY="-50%"
					transition="ease-in-out 0.3s"
				>
					<HamburgerIcon
						h={10}
						w={10}
						color="white"
						onClick={() => setIsDrawerOpen(true)}
					/>
				</Box>
			</HStack>

			<Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setIsDrawerOpen(false)}>
				<DrawerOverlay />

				<DrawerContent
					px={10}
					py={10}
					bg="black"
					backgroundImage="url('/icons/drawer-pattern.png')"
					backgroundPosition="top"
					backgroundRepeat="repeat-y"
					backgroundSize="contain"
				>
					<HStack justifyContent="end">
						<CloseIcon
							onClick={() => setIsDrawerOpen(false)}
							color="white"
							sx={{ cursor: 'pointer', background: 'black' }}
						/>
					</HStack>

					<VStack spacing={3} mt={10}>
						{MOBILE_MENU.map(
							({ label, url }: { label: string; url: string }, index: number) => {
								return (
									<Link href={url} key={label}>
										<Text
											bg="blackAlpha.900"
											color="white"
											p={5}
											fontSize="2xl"
											fontWeight={400}
											sx={{ cursor: 'pointer' }}
											transition="color 0.5s"
											transitionTimingFunction="ease-in-out"
											_hover={{
												color: 'orange',
											}}
										>
											{label}
										</Text>
									</Link>
								);
							}
						)}
					</VStack>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default OrganismNavbar;
