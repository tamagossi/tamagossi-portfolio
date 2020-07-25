import React from 'react';
import { Carousel } from 'antd';

import WorkItem from '../../molecules/works/work-item';
import Section from '../../molecules/section';

const works = [
	{
		name: 'Sinarmas Biotech',
		corp: 'Sinarmas Agriculture',
		desc: `Sinarmas's oil palm seed management application for oil palm business`,
		url: null,
	},
	{
		name: 'BCA Rental Assets Management',
		corp: 'PT. Bank Central Asia',
		desc: `BCA's assets rental management application within internal BCA corporation `,
		url: null,
	},
	{
		name: 'BCA Vehicle Order Application',
		corp: 'PT. Bank Central Asia',
		desc: `BCA's vehicles order application within internal BCA corporation`,
		url: null,
	},
	{
		name: 'Sinarmas Replanting',
		corp: 'Sinarmas Agriculture',
		desc: `Sinarmas's farmer management application for oil palm business`,
		url: null,
	},
];

const OtherProject = () => {
	const isSmallScreen =
		typeof window !== 'undefined' && window.innerWidth <= 720
			? true
			: false;

	const renderWorks = () => {
		const nodes = [];

		if (isSmallScreen) {
			works.forEach((work, index) => {
				nodes.push(
					<div key={`key-${index}`}>
						<WorkItem
							name={work.name}
							corp={work.corp}
							desc={work.desc}
							url={work.url}
						/>
					</div>
				);
			});
		} else {
			for (let i = 0; i < works.length; i = i + 2) {
				nodes.push(
					<div
						key={`key-${i}`}
						style={{ display: 'flex', alignItems: 'start' }}>
						<WorkItem
							name={works[i].name}
							corp={works[i].corp}
							desc={works[i].desc}
							styles={{ width: '48%' }}
							url={works[i].url}
						/>
						<div className="dib" style={{ width: '4%' }}></div>
						{typeof works[i + 1] !== 'undefined' ? (
							<WorkItem
								name={works[i + 1].name}
								corp={works[i + 1].corp}
								desc={works[i + 1].desc}
								styles={{ width: '48%' }}
								url={works[i + 1].url}
							/>
						) : null}
					</div>
				);
			}
		}

		return nodes.map((node) => node);
	};

	return (
		<Section title="Works">
			<Carousel autoplay dots={false}>
				{renderWorks()}
			</Carousel>
		</Section>
	);
};

export default OtherProject;
