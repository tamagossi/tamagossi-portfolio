import React, { FC, ReactElement } from 'react';
import { Image, VStack, Text, HStack } from '@chakra-ui/react';

import { AtomProjectInfo } from '@/components/atoms';
import { Project } from 'interface/project.interface';

const MoleculeProjectHighlight: FC<Project> = ({
	start_date,
	end_date,
	thumbnail,
	thumbnailSize,
	descriptions,
	category,
	role,
	title,
}): ReactElement => {
	return (
		<VStack spacing="2rem" alignItems="start">
			<HStack width={440} height={340}>
				<Image
					alt="project-thumbnail"
					src={thumbnail as string}
					width={thumbnailSize === 'dekstop' ? '100%' : 'initial'}
					height={thumbnailSize === 'mobile' ? '100%' : 'initial'}
				/>
			</HStack>

			<VStack spacing={3} alignItems="start">
				<VStack spacing={0} alignItems="start">
					<Text fontWeight={500} fontSize="14px" color="#FF008C">
						Website
					</Text>
					<Text fontSize="18px" fontWeight={700} sx={{ m: 0 }}>
						{title}
					</Text>
					<Text fontWeight={500} sx={{ m: 0 }} fontSize="12px">
						{descriptions}
					</Text>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default MoleculeProjectHighlight;
