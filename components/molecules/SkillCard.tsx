import React, { FC, ReactElement } from 'react';
import { Avatar, Box, HStack, Tag, Text, VStack } from '@chakra-ui/react';

interface MoleculeSkillCardPropsInterface {
	description: string;
	image: string;
	techs: string[];
	title: string;
}

const MoleculeSkillCard: FC<MoleculeSkillCardPropsInterface> = ({
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

export default MoleculeSkillCard;
