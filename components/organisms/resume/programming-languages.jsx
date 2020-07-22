import React from 'react';
import { Row, Typography } from 'antd';

import LineBar from '../../atoms/line-progressbar';

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
		<div style={{ marginTop: '6rem' }}>
			<Typography.Title>
				<span className="moon-gray">Programming Languages</span>
			</Typography.Title>
			<Row
				className="my-bg-dark-gray ph5 pb5 ba my-moon-white-border"
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
		</div>
	);
};

export default ProgrammingSkills;
