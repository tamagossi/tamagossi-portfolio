import React, { FC, ReactElement, useState } from 'react';
import { Box, HStack, VStack, Text, Grid, GridItem, Tag } from '@chakra-ui/react';

import AtomProjectInfo from '@/components/atoms/ProjectInfo';
import { MoleculeProjectCard } from '@/components/molecules';
import { AtomButton } from '@/components/atoms';

const OrganisHomepageProjectSection: FC = (): ReactElement => {
	const [activeProject, setActiveProject] = useState('a');

	return (
		<VStack p="7rem" px="7rem" spacing="3rem">
			<Text fontSize="36px" fontWeight="bold">
				Things I&apos;ve built
			</Text>

			<Grid templateColumns="repeat(24, 1fr)">
				<GridItem colSpan={[24, null, null, 13]}>
					<VStack alignItems="start" spacing="2rem">
						<HStack spacing="2rem" alignItems="start">
							<Box
								backgroundImage={`url("/images/background.jpg")`}
								height={280}
								width={363}
								backgroundSize="cover"
								borderRadius={40}
							/>

							<VStack spacing={3} alignItems="start">
								<VStack spacing={0} alignItems="start">
									<Text fontWeight={500}>Website</Text>
									<Text fontSize="28px" fontWeight={700} sx={{ m: 0 }}>
										Skrillex
									</Text>
								</VStack>

								<AtomProjectInfo title="ROLE" content="Full-stack developer" />
								<AtomProjectInfo
									title="PROJECT CATEGORIES"
									content="Sass Business"
								/>
								<AtomProjectInfo title="DURATION" content="2 Month" />
							</VStack>
						</HStack>

						<AtomProjectInfo
							title="PROJECT OVERVIEW"
							content="
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
								eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
								eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
							"
						/>

						<HStack spacing={1}>
							{['ReactJS', 'Ant Design', 'Mobx'].map((tech) => (
								<Tag fontSize="11px" key={tech} background="pink.900">
									{tech}
								</Tag>
							))}
						</HStack>
					</VStack>
				</GridItem>

				<GridItem colSpan={[0, null, null, 11]}>
					<VStack spacing={0} alignItems="start">
						{[
							{
								name: 'Skrillex',
								scope: 'Web Development',
								category: 'Man Power',
								stack: 'Front End',
								id: 'a',
							},
							{
								name: 'Chalatix Agency',
								scope: 'Web Development',
								category: 'Man Power',
								stack: 'Front End',
								id: 'b',
							},
							{
								name: 'Skrillex',
								scope: 'Web Development',
								category: 'Man Power',
								stack: 'Front End',
								id: 'c',
							},
							{
								name: 'Skrillex',
								scope: 'Web Development',
								category: 'Man Power',
								stack: 'Front End',
								id: 'd',
							},
						].map((project) => {
							const { id } = project;

							return (
								<MoleculeProjectCard
									{...project}
									active={activeProject === id}
									key={project.name}
								/>
							);
						})}

						<Box h="1rem" />

						<AtomButton>See More Project</AtomButton>
					</VStack>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default OrganisHomepageProjectSection;
