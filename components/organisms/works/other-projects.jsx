import React, { useRef } from 'react';
import { Carousel, Col, Row, Typography } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';

import WorkItem from '../../molecules/works/work-item';

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
	const carouselRef = useRef();

	const next = () => carouselRef.current.next();
	const prev = () => carouselRef.current.prev();

	const renderWorks = () => {
		const nodes = [];

		for (let i = 0; i < works.length; i = i + 2) {
			nodes.push(
				<div key={`key-${i}`}>
					<WorkItem
						name={works[i].name}
						corp={works[i].corp}
						desc={works[i].desc}
						url={works[i].url}
					/>
					<div className="dib" style={{ width: '4%' }}></div>
					{typeof works[i + 1] !== 'undefined' ? (
						<WorkItem
							name={works[i + 1].name}
							corp={works[i + 1].corp}
							desc={works[i + 1].desc}
							url={works[i + 1].url}
						/>
					) : null}
				</div>
			);
		}

		return nodes.map((node) => node);
	};

	return (
		<div style={{ marginTop: '6rem' }}>
			<Row justify="space-between">
				<Col>
					<Typography.Title style={{ margin: 0 }}>
						<span className="moon-gray">Works</span>
					</Typography.Title>
				</Col>
				<Col className="dn db-l">
					<div className="dib" onClick={() => prev()}>
						<CaretLeftFilled className="f2 white pointer hover-dark-pink" />
					</div>
					&nbsp; &nbsp;
					<div className="dib" onClick={() => next()}>
						<CaretRightFilled className="f2 white pointer hover-dark-pink" />
					</div>
				</Col>
			</Row>
			<Carousel autoplay ref={carouselRef} dots={false}>
				{renderWorks()}
			</Carousel>
		</div>
	);
};

export default OtherProject;
