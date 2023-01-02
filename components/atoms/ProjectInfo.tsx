import React, { FC, ReactElement } from 'react';
import { Text, VStack } from '@chakra-ui/react';

interface AtomProjectInfoPropsInterface {
	title: string;
	content: string;
}

const AtomProjectInfo: FC<AtomProjectInfoPropsInterface> = ({ title, content }): ReactElement => {
	return (
		<VStack justifyContent="flex-start">
			<VStack spacing={1} alignItems="start">
				<Text fontWeight={500} fontSize={14} color="#FF008C">
					{title}
				</Text>
				<Text fontSize={14} fontWeight={500}>
					{content}
				</Text>
			</VStack>
		</VStack>
	);
};

export default AtomProjectInfo;
