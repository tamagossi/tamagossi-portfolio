import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Center, Divider, HStack, Tag, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { SectionIndicator } from '@/components';

interface SkillCardPropsInterface {
	description: string;
	image: string;
	techs: string[];
	title: string;
}

const SkillCard: FC<SkillCardPropsInterface> = ({
	description,
	image,
	techs,
	title,
}): ReactElement => {
	return (
		<VStack
			width="24rem"
			background="#80054A"
			borderRadius="3xl"
			boxShadow="1px 1px 2px rgba(143, 6, 83, 0.3), -1px -1px 2px rgba(113, 4, 65, 0.5), inset -26px 26px 52px rgba(113, 4, 65, 0.2), inset 26px -26px 52px rgba(113, 4, 65, 0.2), inset -26px -26px 52px rgba(143, 6, 83, 0.9), inset 26px 26px 65px rgba(113, 4, 65, 0.9);"
			p={10}
			spacing={3}
		>
			<Avatar src={image} size="xl" />

			<Text fontWeight={600}>{title}</Text>

			<Text fontWeight={400} letterSpacing="tighter" textAlign="center" fontSize="14px">
				{description}
			</Text>

			<Box h=".1rem" />

			<Text fontWeight={600} letterSpacing="tight" textAlign="center" fontSize="14px">
				Common techs that I use:
			</Text>

			<HStack spacing={1}>
				{techs.map((tech) => (
					<Tag fontSize="11px" key={tech}>
						{tech}
					</Tag>
				))}
			</HStack>
		</VStack>
	);
};

const SKILLS = [
	<SkillCard
		description="Creating highly responsive and visually appealing user interfaces. At the moment, I also work as a Front-End engineer in startup company to create their website using NextJS"
		image="/icons/front-end.png"
		key="skill-1"
		techs={['ReactJS', 'NextJS', 'VueJS', 'Flutter']}
		title="Front-End Development"
	/>,
	<SkillCard
		description="Creating robust and scalable server-side applications mostly using Go and Node.js. Have a good understanding of database management, including SQL and NoSQL."
		image="/icons/back-end.png"
		key="skill-2"
		techs={['ExpressJS', 'Go', 'Laravel']}
		title="Back-End Development"
	/>,
];

const AboutSection: FC = (): ReactElement => {
	return (
		<Center
			h="100vh"
			id="about-section"
			px={['0rem', null, null, '8rem', '30rem']}
			justifyContent={['center', null, 'start']}
			w="100%"
		>
			<VStack
				spacing={5}
				alignItems="center"
				as={motion.div}
				initial={{ opacity: 0, y: 100 }}
				exit={{ opacity: 0, y: 100 }}
				mt={['5rem', null, null, null, '0rem']}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 2,
						type: 'spring',
						stiffness: 50,
					},
				}}
			>
				<SectionIndicator indicator="01." title="About Me" position="end" />

				<Text
					className="font-poppins"
					fontSize="14px"
					color="gray.300"
					fontWeight={400}
					textAlign="center"
					px={['1rem', '3rem', '6rem', '9rem', '12rem']}
				>
					Hi 👋 my name is Raka Pratama (brand myself as Tamagossi), experienced software
					engineer with a focus on Front-End development, proficient in Javascript, Go,
					and Dart. Skilled in using frameworks such as NextJS, ReactJS, and Flutter.
					Strong foundation in computer science, with 5+ years of industry experience.
				</Text>

				<Box h={[0, null, '.5rem']} />

				<HStack
					alignItems="center"
					display={['none', null, 'flex']}
					flexWrap="wrap"
					gap={5}
					justifyContent="center"
				>
					{SKILLS[0]}
					{SKILLS[1]}
				</HStack>

				<HStack
					display={['flex', null, 'none']}
					px="4rem"
					spacing={5}
					w="90vw"
					overflow="scroll"
					scrollBehavior="smooth"
					scrollSnapType="x mandatory"
				>
					<Box scrollSnapAlign="center" scrollSnapStop="always">
						{SKILLS[0]}
					</Box>
					<Box scrollSnapAlign="center" scrollSnapStop="always">
						{SKILLS[1]}
					</Box>
				</HStack>
			</VStack>
		</Center>
	);
};

export default AboutSection;
