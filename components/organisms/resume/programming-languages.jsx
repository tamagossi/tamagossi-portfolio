import React from 'react';
import { Row } from 'antd';

import LineBar from '../../atoms/line-progressbar';
import Section from '../../molecules/section';

const skills = [
	{
		title: 'Javascript',
		text: 'Expert',
		value: 85,
	},
	{
		title: 'Python',
		text: 'Good',
		value: 60,
	},
	{
		title: 'Dart',
		text: 'Good',
		value: 60,
	},
];

const ProgrammingSkills = () => {
	return (
		<div className="mt5">
			<Section title="Programming Language">
				<Row
					className="my-bg-dark-gray ph3 ph5-l pb5 mt4 ba my-moon-white-border"
					justify="start">
					{skills.map((skill, index) => (
						<LineBar
							key={`key-${index}`}
							text={skill.text}
							title={skill.title}
							value={skill.value}
						/>
					))}
				</Row>
			</Section>
		</div>
	);
};

export default ProgrammingSkills;
