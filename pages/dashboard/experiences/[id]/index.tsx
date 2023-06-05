import React, { FC, ReactElement } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Button, ExperienceForm, ExperienceFormValue, Layout } from '@/components';
import { useRouter } from 'next/router';

import { useGetExperienceById } from '@/hooks';
import { Box, HStack, VStack } from '@chakra-ui/react';

export const getServerSideProps: GetServerSideProps<{
	experience_id: string;
}> = async (context: GetServerSidePropsContext) => {
	const { query } = context;

	return {
		props: {
			experience_id: query.id as string,
		},
	};
};

const ExperienceDetail: FC<{ experience_id: string }> = ({ experience_id }): ReactElement => {
	const { push } = useRouter();
	const experience = useGetExperienceById({ id: experience_id });

	return (
		<Layout backable title="Experience Detail">
			{typeof experience.data === 'undefined' ? null : (
				<VStack spacing={5} w="100%">
					<ExperienceForm
						defaultValues={experience.data as unknown as ExperienceFormValue}
						disabled
					/>

					<HStack justify="end" w="100%">
						<Box>
							<Button
								onClick={() =>
									push(
										`/dashboard/experiences/create?experience_id=${experience_id}`
									)
								}
							>
								Duplicate Experience
							</Button>
						</Box>
					</HStack>
				</VStack>
			)}
		</Layout>
	);
};

export default ExperienceDetail;
