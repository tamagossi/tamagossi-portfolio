import React from 'react';
import { Typography } from 'antd';

import ExperienceAndEducationItem from '../../molecules/resume/experience-item';
import Section from '../../molecules/section';

const educations = [
	{
		years: '2015-2018',
		institution: 'Bandung State Polytechnic',
		website: 'https://www.polban.ac.id/en/home/',
		description: 'Majoring Informatic Engineering ',
	},
	{
		years: '2012-2015',
		institution: '1 Garut Senior High School',
		website: 'https://sman1garut.sch.id/',
		description: 'Majoring Science',
	},
];
const experiences = [
	{
		years: 'since 04/2020',
		institution: 'Software Engineer - PT. Sampingan Mitra Indonesia',
		website: 'https://www.sampingan.co.id/',
		description:
			'Help the team ' +
			'create, enhance, refactor, revamp Sampingan business application',
	},
	{
		years: '07/19 - 03/20',
		institution: 'Technical Lead - PT. Smooets Technology Outsourcing',
		website: 'https://www.linkedin.com/company/smooets/',
		description:
			'Lead the team to create robust application ' +
			'to deliver to client and supervising the team ' +
			'have better development experience',
	},
	{
		years: '10/18 - 6/19',
		institution: 'Front End Developer - PT. Smooets Technology Outsourcing',
		website: 'https://www.linkedin.com/company/smooets/',
		description:
			'Developed plant management system used by one of the ' +
			'biggest business group in Indonesia for their palm-oil tree business',
	},
];

const ExperienceAndEducation = (props) => {
	const items =
		props.title.toLowerCase() === 'experience' ? experiences : educations;

	return (
		<Section title={props.title}>
			{items.map((item, index) => (
				<ExperienceAndEducationItem
					description={item.description}
					institution={item.institution}
					key={`key-${index}`}
					years={item.years}
					website={item.website}
				/>
			))}
		</Section>
	);
};

export default ExperienceAndEducation;
