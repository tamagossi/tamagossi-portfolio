import React, { FC, ReactElement, useState } from 'react';
import { Box, Button, HStack, Text, TypographyProps, VStack } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { Divide as Hamburger } from 'hamburger-react';

import { COLORS } from '@/constants';
import Image from 'next/image';

type MENU = {
	label: string;
	to: string;
};

const MENUS: MENU[] = [
	{ label: 'About', to: 'about-section' },
	{ label: 'Experiences', to: 'experience-section' },
	{ label: 'Projects', to: 'project-section' },
	{ label: 'Contact', to: 'contact-section' },
];

const Navbar: FC = (): ReactElement => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	const openResume = () => {
		window.open(
			'https://docs.google.com/document/d/1tNpQsj0kmxzONv9CMNXDCsLUnVzyiMVYy03nNETLwBE/edit?usp=sharing',
			'_blank'
		);
	};

	return (
		<>
			<HStack
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
				className="font-fira"
				id="navbar"
				justifyContent="space-between"
				position="fixed"
				px={['1rem', null, '8rem']}
				py="2rem"
				top="0"
				w="100vw"
				zIndex="1800"
				as={motion.div}
				initial={{ y: -200, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { ease: 'easeOut', duration: 1 },
				}}
			>
				<HStack spacing="1.5rem" transitionDuration="1s" display={['none', null, 'flex']}>
					<Links fontSize="12px" />
				</HStack>

				<Button
					variant="outline"
					borderColor={COLORS.pink}
					display={['none', null, 'flex']}
					onClick={openResume}
				>
					<Text color={COLORS.pink} fontWeight={400} fontSize="12px">
						RESUME
					</Text>
				</Button>
			</HStack>

			<Box
				display={['block', null, 'none']}
				position="fixed"
				transitionDuration="1s"
				zIndex={20000}
				top="2"
				left="4"
			>
				<Hamburger
					color={COLORS.pink}
					toggle={setIsDrawerOpen}
					rounded
					size={32}
					toggled={isDrawerOpen}
					duration={1}
				/>
			</Box>

			<Box
				bg="blackAlpha.800"
				display={[isDrawerOpen ? 'flex' : 'none', null, 'none']}
				onClick={() => setIsDrawerOpen(false)}
				h="100vh"
				position="fixed"
				top="0"
				w="100vw"
				zIndex={18999}
				as={motion.div}
				animate={{
					opacity: isDrawerOpen ? 1 : 0,
					transition: { duration: 0.5 },
				}}
			/>

			<VStack
				alignItems="start"
				justifyContent="space-between"
				bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
				display={['flex', null, 'none']}
				h="100vh"
				position="fixed"
				px="2rem"
				py="5rem"
				top="0"
				w="60vw"
				zIndex={19000}
				as={motion.div}
				animate={{ x: isDrawerOpen ? 0 : -460, transition: { duration: 0.5 } }}
			>
				<VStack alignItems="start" spacing="1.5rem">
					<Links fontSize="md" closeDrawer={() => setIsDrawerOpen(false)} />
				</VStack>

				<Button variant="outline" borderColor={COLORS.pink} w="100%" onClick={openResume}>
					<Text color={COLORS.pink} fontWeight={400}>
						RESUME
					</Text>
				</Button>
			</VStack>
		</>
	);
};

const Links: FC<{ closeDrawer?: Function } & Pick<TypographyProps, 'fontSize'>> = ({
	fontSize,
	closeDrawer,
}): ReactElement => {
	const scrollToElement = (to: string) => {
		const element = document.getElementById(to);
		if (element) element.scrollIntoView({ behavior: 'smooth' });
		if (closeDrawer) closeDrawer();
	};

	return (
		<>
			{MENUS.map((menu: MENU, index: number) => {
				const { label, to } = menu;

				return (
					<HStack
						key={to}
						_hover={{ transform: 'scale(1.1)' }}
						transitionDuration=".2s"
						onClick={() => scrollToElement(to)}
					>
						<Text
							_hover={{ transform: 'scale(1.1)' }}
							className="font-fira"
							color={COLORS.pink}
							cursor="pointer"
							fontSize={fontSize}
							fontWeight={500}
							transitionDuration=".2s"
						>
							0{index + 1}.
						</Text>

						<Text
							_hover={{ color: COLORS.pink }}
							cursor="pointer"
							fontSize={fontSize}
							fontWeight={500}
							transitionDuration=".2s"
						>
							{label.toUpperCase()}
						</Text>
					</HStack>
				);
			})}
		</>
	);
};

export default Navbar;
