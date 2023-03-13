import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

type MENU = {
	label: string;
	url: string;
};

type SOCIAL = {
	Icon: any;
	url: string;
};

const MENUS: MENU[] = [
	{ label: 'Home', url: '/' },
	{ label: 'Experiences', url: '/experiences' },
	{ label: 'Projects', url: '/projects' },
	{ label: 'Contact', url: '/' },
];

const SOCIALS: SOCIAL[] = [
	{
		Icon: <AiOutlineGithub size={24} color="rgba(255,255,255,0.6)" />,
		url: 'https://github.com/tamagossi',
	},
	{
		Icon: <AiOutlineLinkedin size={24} color="rgba(255,255,255,0.6)" />,
		url: 'https://www.linkedin.com/in/tamagossi/',
	},
	{
		Icon: <AiOutlineInstagram size={24} color="rgba(255,255,255,0.6)" />,
		url: 'https://www.instagram.com/tamago.ssi/',
	},
];

const MoleculeNavbar: FC = (): ReactElement => {
	return (
		<>
			<HStack
				as={motion.div}
				initial={{ y: -200, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 1 } }}
				id="navbar"
				justifyContent="center"
				position="fixed"
				px={['10rem', null, null, null, '20rem']}
				py="2rem"
				spacing="1.5rem"
				top="0"
				w="100%"
				zIndex="tooltip"
			>
				{MENUS.map((menu: MENU) => {
					const { label, url } = menu;

					return (
						<Link key={url} href={url}>
							<Text
								fontSize="14px"
								fontWeight={500}
								cursor="pointer"
								_hover={{ transform: 'scale(1.1)' }}
								transitionDuration=".2s"
							>
								{label.toUpperCase()}
							</Text>
						</Link>
					);
				})}
			</HStack>

			<VStack
				as={motion.div}
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1, transition: { ease: 'easeOut', duration: 1 } }}
				id="nav-social-media"
				bottom="0"
				display={['none', null, 'flex']}
				left="10"
				position="fixed"
				spacing="2rem"
				zIndex="tooltip"
			>
				{SOCIALS.map((social: SOCIAL) => {
					const { Icon, url } = social;

					return (
						<Link key={url} href={url}>
							{Icon}
						</Link>
					);
				})}

				<Box h={20} border="1px" borderColor="whiteAlpha.800" />
			</VStack>

			<VStack
				as={motion.div}
				initial={{ x: 200, opacity: 0 }}
				animate={{ x: 0, opacity: 1, transition: { ease: 'easeOut', duration: 1 } }}
				id="nav-eamail"
				position="fixed"
				spacing="8.5rem"
				display={['none', null, 'flex']}
				bottom="0"
				right="-10"
				zIndex="tooltip"
			>
				<Text
					color="whiteAlpha.700"
					css={{
						transform: 'rotate(90deg)',
					}}
				>
					<a href="mailto:mgf.prauliyatama@gmail.com" style={{ cursor: 'none' }}>
						mgf.prauliyatama@gmail.com
					</a>
				</Text>

				<Box h={20} border="1px" borderColor="whiteAlpha.800" />
			</VStack>
		</>
	);
};

export default MoleculeNavbar;
