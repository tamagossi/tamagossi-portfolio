import React, { FC, ReactElement } from 'react';

import { ExperienceForm, ExperienceFormValue, Layout } from '@/components';
import { useRouter } from 'next/router';

import { useAddExperienceMutation, useGetExperienceById } from '@/hooks';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const getServerSideProps: GetServerSideProps<{
	experience_id?: string;
}> = async (context: GetServerSidePropsContext) => {
	const { query } = context;

	const props: Record<string, any> = {};
	if (query.experience_id) {
		props.experience_id = query.experience_id;
	}

	return {
		props,
	};
};

const ExperienceCreatePage: FC<{ experience_id: string }> = ({ experience_id }): ReactElement => {
	const { push } = useRouter();

	const experienceMtn = useAddExperienceMutation();
	const experience = useGetExperienceById({
		id: experience_id,
		options: { enabled: typeof experience_id !== 'undefined' },
	});

	const create = async (value: ExperienceFormValue) => {
		if (value.id) {
			delete value.id;
		}
		experienceMtn.mutate(value, {
			onSuccess: () => push('/dashboard/experiences'),
		});
	};

	return (
		<Layout backable title="Add New Experience">
			{!experience.isLoading && (
				<ExperienceForm
					buttonLabel="Create"
					onSubmit={create}
					defaultValues={experience.data as unknown as ExperienceFormValue}
				/>
			)}
		</Layout>
	);
};

export default ExperienceCreatePage;
