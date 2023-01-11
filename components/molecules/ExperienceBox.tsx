import React, { FC, ReactElement } from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { Experience } from 'interface/experience.interface';

const MoleculeExperienceBox: FC<Experience> = ({
	id,
	title,
	company,
	company_url,
	start_date,
	end_date,
	descriptions,
}): ReactElement => {
	console.log(descriptions);

	return (
		<Box
			bg="linear-gradient(123.86deg, #710441 28.07%, #5F0136 83.79%)"
			padding="2rem"
			borderRadius="2xl"
			width={['400px', null, '500px']}
			height="400px"
		>
			<VStack alignItems="start" spacing="1rem">
				<VStack alignItems="start" spacing={0}>
					<Text fontSize="2xl" fontWeight={600}>
						{company}
					</Text>
					<Text fontSize="sm">
						{start_date} - {end_date}
					</Text>
				</VStack>

				{descriptions && (
					<ul style={{ marginLeft: 15 }}>
						<VStack>
							{descriptions.map((desc) => {
								return (
									<li key={desc}>
										<Text fontSize="sm">{desc}</Text>
									</li>
								);
							})}
						</VStack>
					</ul>
				)}
			</VStack>
		</Box>
	);
};

export default MoleculeExperienceBox;
