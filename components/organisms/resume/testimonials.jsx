import React, { useRef } from 'react';
import { Carousel, Col, Row, Typography } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';

import TestimonialItem from '../../molecules/resume/testimonial-items';

const testimonials = [
	{
		name: 'Afiani Fauziah',
		role: 'Web Developer - Smooets Technology Outsourcing',
		text:
			'Raka has great programming skills and really good in working in team. He can ' +
			'manage well and be counted on. Working with Raka is so pleasing, he is careful ' +
			'and decent.',
	},
	{
		name: 'Stephanus Arya Pratama',
		role: 'Software Engineer - Cloud Ace',
		text:
			'‘Javascript Ninja’ is the phrase that comes to mind when I think about Tama. ' +
			'I worked with Tama for six months on an automotive e-commerce app. I was impressed by ' +
			'his ability to handle frontend or backend tasks in a tight deadline. Tama would be an ' +
			'asset to any company.',
	},
	{
		name: 'Rio Novirdian',
		role: 'Android Developer - Mamang Indonesia',
		text: 'A person with good communication and analytical skill',
	},
	{
		name: 'Novilawati ',
		role: 'Backend Developer - Kazee',
		text:
			'He has good programming skills, and also good variety of knowledge of software development. ' +
			'With experienced he has, and knowledge he already acquired. He is capable to decide what should ' +
			'the team take when developing software. He also an easy going, cooperative person. Fast learner and ' +
			'dedicated person.',
	},
];

const Testimonials = () => {
	const carouselRef = useRef();

	const next = () => carouselRef.current.next();
	const prev = () => carouselRef.current.prev();

	const renderTestimonials = () => {
		const nodes = [];

		for (let i = 0; i < testimonials.length; i = i + 2) {
			nodes.push(
				<div>
					<TestimonialItem
						name={testimonials[i].name}
						role={testimonials[i].role}
						text={testimonials[i].text}
					/>
					<div className="dib" style={{ width: '4%' }}></div>
					{typeof testimonials[i + 1] !== 'undefined' ? (
						<TestimonialItem
							name={testimonials[i].name}
							role={testimonials[i].role}
							text={testimonials[i].text}
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
						<span className="moon-gray">Testimonials</span>
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
				{renderTestimonials()}
			</Carousel>
		</div>
	);
};

export default Testimonials;
