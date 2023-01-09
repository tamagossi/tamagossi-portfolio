import React, { FC, ReactElement, useState } from 'react';
import { Box, HStack, VStack, Text, Grid, GridItem, Tag } from '@chakra-ui/react';

import { AtomProjectInfo, AtomButton } from '@/components/atoms';
import { MoleculeProjectCard, MoleculeProjectHighlight } from '@/components/molecules';

const PROJECTS = [
	{
		name: 'Skrillex',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '1 Month',
		id: 'a',
	},
	{
		name: 'Chalatix Agency',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '2 Month',
		id: 'b',
	},
	{
		name: 'Same Different',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '3 Month',
		id: 'c',
	},
	{
		name: 'Class:y',
		scope: 'Web Development',
		category: 'Man Power',
		stack: 'Front End',
		duration: '4 Month',
		id: 'd',
	},
];

const OrganisHomepageProjectSection: FC = (): ReactElement => {
	const [activeProject, setActiveProject] = useState('a');

	const selectedProject = PROJECTS.find((project) => project.id === activeProject);

	return (
		<VStack p="7rem" px={['1rem', null, null, '7rem']} spacing="3rem">
			<Text fontSize="36px" fontWeight="bold" textAlign="center">
				Things I&apos;ve built
			</Text>

			<Grid templateColumns="repeat(24, 1fr)" display={['none', null, null, 'grid']}>
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
									<Text fontSize="22px" fontWeight={700} sx={{ m: 0 }}>
										{selectedProject?.name}
									</Text>
								</VStack>

								<AtomProjectInfo title="ROLE" content={selectedProject?.stack!} />
								<AtomProjectInfo
									title="PROJECT CATEGORIES"
									content={selectedProject?.scope!}
								/>
								<AtomProjectInfo
									title="DURATION"
									content={selectedProject?.duration!}
								/>
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
						{PROJECTS.map((project) => {
							const { id } = project;

							return (
								<MoleculeProjectCard
									{...project}
									active={activeProject === id}
									key={project.name}
									onClick={(id) => setActiveProject(id)}
								/>
							);
						})}

						<Box h="1rem" />

						<AtomButton>See More Project</AtomButton>
					</VStack>
				</GridItem>
			</Grid>

			<VStack display={['flex', null, null, 'none']} justifyContent="center" spacing="1rem">
				<HStack
					overflow="scroll"
					scrollBehavior="smooth"
					scrollSnapType="x mandatory"
					w="100vw"
					spacing={5}
					px="12rem"
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
					{PROJECTS.map((project) => {
						return (
							<Box scrollSnapAlign="center" scrollSnapStop="always" key={project.id}>
								<MoleculeProjectHighlight {...project} />
							</Box>
						);
					})}
				</HStack>

				<AtomButton>See More Project</AtomButton>
			</VStack>
		</VStack>
	);
};

export default OrganisHomepageProjectSection;
