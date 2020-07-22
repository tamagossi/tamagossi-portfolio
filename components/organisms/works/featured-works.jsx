import React from 'react';
import { Row, Typography } from 'antd';

import FeaturedWorkItem from '../../molecules/works/featured-work-item';

const featuredWorks = [
	{
		name: 'Cartalog',
		image: 'images/apps-cartalog.png',
		corp: 'Cloud Ace',
		desc:
			'Develop server side application of this apps. ' +
			'And also help the FE team to add, and enhance some features. and ' +
			'fix some bugs',
		url: 'https://cartalog.id/',
	},
	{
		name: 'Genflix',
		image: 'images/apps-genflix.png',
		corp: 'Sinarmas Mining',
		desc:
			'Help team to develop server side application of this apps. ' +
			'And also help to develop and fix some bugs on FE side',
		url: 'https://genflix.co.id/',
	},
	{
		name: 'Sampingan Reseller Webview',
		image: 'images/app-reseller-webview.png',
		corp: 'Sampingan Mitra Indonesia',
		desc:
			'Succesfully refactor, enhance, and revamp previous version of ' +
			'this apps, so the it has better user experience',
		url:
			'https://play.google.com/store/apps/details?id=com.sampingan.agentapp&hl=en',
	},
	{
		name: 'Sampingan Web Portal',
		image: 'images/apps-sampingan-portal.png',
		corp: 'Sampingan Mitra Indonesia',
		desc:
			'Succesfully create and develop variety of web portal ' +
			`for each particular Sampingan's business`,
		url: 'https://kerjaan.co.id/',
	},
];

const FeaturedWorks = () => {
	return (
		<div>
			<Typography.Title>
				<span className="moon-gray">Featured Projects</span>
			</Typography.Title>
			<Row justify="space-between pt4">
				{featuredWorks.map((work, index) => (
					<FeaturedWorkItem
						corp={work.corp}
						desc={work.desc}
						image={work.image}
						key={`key-${index}`}
						name={work.name}
						url={work.url}
					/>
				))}
			</Row>
		</div>
	);
};

export default FeaturedWorks;
