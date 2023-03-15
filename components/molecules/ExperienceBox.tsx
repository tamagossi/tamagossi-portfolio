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
			width={['450px', null, null, '500px', '600px']}
			height="400px"
			overflowY="auto"
			css={{
				'&::-webkit-scrollbar': {
					width: '1px',
				},
				'&::-webkit-scrollbar-track': {
					width: '1px',
				},
				'&::-webkit-scrollbar-thumb': {
					background: 'trasnparent',
					borderRadius: '24px',
				},
			}}
		>
			<VStack alignItems="start" spacing="1rem">
				<VStack alignItems="start" spacing={0}>
					<a href={company_url}>
						<Text fontSize="xl" fontWeight={700}>
							{company}
						</Text>
					</a>

					<Text fontSize="xs">{title.toUpperCase()}</Text>

					<Text fontSize="xs">
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
