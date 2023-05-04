import React from 'react';
import Link from 'next/link';
import { Box, Text, VStack } from '@chakra-ui/react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

type SOCIAL = {
	Icon: any;
	url: string;
};

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

const SocialMedia = () => {
	return (
		<>
			<VStack
				id="nav-social-media"
				bottom="0"
				display={['none', null, 'flex']}
				left="10"
				position="fixed"
				spacing="2rem"
				zIndex="tooltip"
				transitionDuration="1s"
				as={motion.div}
				initial={{ x: -200, opacity: 0 }}
				animate={{
					x: 0,
					opacity: 1,
					transition: { ease: 'easeOut', duration: 1 },
				}}
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
				id="nav-eamail"
				position="fixed"
				spacing="8.5rem"
				display={['none', null, 'flex']}
				bottom="0"
				transitionDuration="1s"
				right="-20"
				zIndex="tooltip"
				as={motion.div}
				initial={{ x: 200, opacity: 0 }}
				animate={{
					x: 0,
					opacity: 1,
					transition: { ease: 'easeOut', duration: 1 },
				}}
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

export default SocialMedia;
