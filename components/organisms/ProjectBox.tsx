import React, { FC, ReactElement } from 'react';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { AtomButton, AtomProjectInfo } from '@/components/atoms';

import { Project } from 'interface/project.interface';

const OrganismProjectBox: FC<Project> = ({
	id,
	thumbnail,
	title,
	role,
	category,
	start_date,
	end_date,
}): ReactElement => {
	const { push } = useRouter();

	const childVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<Box
			bg="#1F1F1F"
			w="100%"
			as={motion.div}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 1, stiffness: 1 } }}
			key={id}
			p="1.4rem"
			borderRadius="1rem"
		>
			<VStack align="start" spacing="2rem">
				<HStack justify="center" bg="rgba(0,0,0,0.1)" p="1rem" borderRadius="1rem">
					<Image alt="project-thumbnail" src={thumbnail as string} height="80%" />
				</HStack>

				<VStack align="start" spacing={0}>
					<Text fontWeight={500} fontSize={['12px', null, null, '14px']}>
						{'Project Name'.toUpperCase()}
					</Text>
					<Text fontSize={['18px', null, null, '24px']} fontWeight={700} sx={{ m: 0 }}>
						{title}
					</Text>
				</VStack>

				<VStack spacing={2} align="start">
					<HStack spacing="1rem">
						<AtomProjectInfo title="Job Role" content={role} />
						<AtomProjectInfo title="Job Category" content={category} />
					</HStack>

					<AtomProjectInfo title="Duration" content={`${start_date} - ${end_date}`} />
				</VStack>

				<AtomButton type="secondary" onClick={() => push(`/projects/${title}`)}>
					See Detail
				</AtomButton>
			</VStack>
		</Box>
	);
};

export default OrganismProjectBox;
