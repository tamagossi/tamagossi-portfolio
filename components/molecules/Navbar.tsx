import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type MENU = {
	label: string;
	url: string;
};

const MENUS: MENU[] = [
	{ label: 'Home', url: '/' },
	{ label: 'Experiences', url: '/' },
	{ label: 'Projects', url: '/' },
	{ label: 'Contact', url: '/' },
];

const MoleculeNavbar: FC = (): ReactElement => {
	return (
		<HStack
			id="navbar"
			justifyContent={['center', null, null, 'space-between']}
			left="0"
			position="fixed"
			px={['10rem', null, null, null, '20rem']}
			py="3rem"
			top="0"
			w="100%"
			zIndex="tooltip"
		>
			<Link href="/">
				<Text
					_hover={{ color: 'pink.500' }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					as={motion.h1}
					cursor="pointer"
					fontSize="4xl"
					initial={{ x: -500, opacity: 0, scale: 0.5 }}
					transition="1.5s"
				>
					{`<T />.`}
				</Text>
			</Link>

			<HStack
				animate={{ x: 0, opacity: 1 }}
				as={motion.div}
				display={['none', null, null, 'flex']}
				initial={{ x: 500, opacity: 0 }}
				spacing="2rem"
				transition="1.5s"
			>
				{MENUS.map((menu: MENU) => {
					const { label, url } = menu;

					return (
						<Link key={url} href={url}>
							<Text fontSize="xl" cursor="pointer" _hover={{ color: 'pink.500' }}>
								{label}
							</Text>
						</Link>
					);
				})}
			</HStack>
		</HStack>
	);
};

export default MoleculeNavbar;
