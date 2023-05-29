import React from 'react';

import { Form, Layout, SelectInput, TextAreaInput, TextArrayInput, TextInput } from '@/components';
import { useForm } from 'react-hook-form';
import { VStack } from '@chakra-ui/react';
import { PROJECT_CATEGORY_ENUM, PROJECT_CATEGORY_LABEL } from '@/constants';

const ProjectCreatePage = () => {
	const form = useForm();

	return (
		<Layout title="Add New Project">
			<Form form={form}>
				<VStack w="100%" spacing={5}>
					<TextInput
						name="title"
						label="Project Name"
						rules={{ required: 'Tidak boleh kosong' }}
						placeholder="Staffinc - Staffinc Jobs"
					/>

					<SelectInput
						name="category"
						label="Project Category"
						placeholder="Web Application"
						rules={{ required: 'Tidak boleh kosong' }}
						options={[
							{
								label: PROJECT_CATEGORY_LABEL.WEB,
								value: PROJECT_CATEGORY_ENUM.WEB,
							},
							{
								label: PROJECT_CATEGORY_LABEL.MOBILE,
								value: PROJECT_CATEGORY_ENUM.MOBILE,
							},
							{
								label: PROJECT_CATEGORY_LABEL.DESKTOP,
								value: PROJECT_CATEGORY_ENUM.DESKTOP,
							},
						]}
					/>

					<TextAreaInput
						name="description"
						label="Description"
						rules={{ required: 'Tidak boleh kosong' }}
						placeholder="This Project is ..."
					/>

					<TextArrayInput
						name="responsibilities"
						label="Responsibilities"
						placeholder="Responsibilites"
						rules={{ required: 'Tidak boleh kosong' }}
					/>
				</VStack>
			</Form>
		</Layout>
	);
};

export default ProjectCreatePage;
