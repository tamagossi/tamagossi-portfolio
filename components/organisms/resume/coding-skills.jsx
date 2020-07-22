import React from 'react';
import { Row, Typography } from 'antd';

import CircularBar from '../../atoms/circular-progressbar';

const skills = [
	{
		title: 'React JS',
		text: 'Expert',
		value: 85,
	},
	{
		title: 'React Native',
		text: 'Advanced',
		value: 75,
	},
	{
		title: 'Node Express',
		text: 'Advanced',
		value: 80,
	},
	{
		title: 'Vue',
		text: 'Advanced',
		value: 70,
	},
	{
		title: 'Angular',
		text: 'Good',
		value: 65,
	},
	{
		title: 'Django',
		text: 'Good',
		value: 60,
	},
	{
		title: 'Flutter',
		text: 'Good',
		value: 50,
	},
];

const CodingSkills = () => {
	return (
		<div style={{ marginTop: '6rem' }}>
			<Typography.Title>
				<span className="moon-gray">Frameworks Used</span>
			</Typography.Title>
			<Row
				className="my-bg-dark-gray ph5 pb5 ba my-moon-white-border"
				justify="start">
				{skills.map((skill, index) => (
					<CircularBar
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

export default CodingSkills;
