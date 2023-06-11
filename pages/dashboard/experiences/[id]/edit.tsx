import React, { FC, ReactElement } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { ExperienceForm, ExperienceFormValue, Layout } from '@/components';
import { useRouter } from 'next/router';

import { useGetExperienceById, useUpdateExperience } from '@/hooks';
import { VStack } from '@chakra-ui/react';

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

const ExperienceEditPage: FC<{ experience_id: string }> = ({ experience_id }): ReactElement => {
	const { back } = useRouter();
	const experience = useGetExperienceById({ id: experience_id });
	const updateExpMtn = useUpdateExperience();

	const edit = async (value: ExperienceFormValue) => {
		if (value.id) {
			delete value.id;
		}

		updateExpMtn.mutate(
			{ id: experience_id, payload: value },
			{
				onSuccess: () => {
					setTimeout(() => {
						back();
					}, 700);
				},
			}
		);
	};

	return (
		<Layout backable title="Experience Detail">
			{typeof experience.data === 'undefined' ? null : (
				<VStack spacing={5} w="100%">
					<ExperienceForm
						buttonLabel="Edit"
						onSubmit={edit}
						defaultValues={experience.data as unknown as ExperienceFormValue}
					/>
				</VStack>
			)}
		</Layout>
	);
};

export default ExperienceEditPage;
