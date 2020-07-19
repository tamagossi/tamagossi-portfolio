import React from 'react';
import { Col, Row } from 'antd';

import MainLayout from '../components/layouts/main-layout';
import TextLoop from '../components/atoms/text-loop';

const HomePage = () => {
	return (
		<MainLayout>
			<Row align="bottom" className="white">
				<Col xs={{ span: 24 }} xl={{ span: 13 }}>
					<div
						style={{
							backgroundImage: 'url(images/home-background.png)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '78vh',
						}}
					/>
				</Col>
				<Col
					className="mb6-l"
					xs={{ span: 18, offset: 2 }}
					xl={{ span: 8, offset: 0, pull: 2 }}>
					<span className="f4 fw4 f2-l">
						Hello, I’m{' '}
						<span className="dark-pink">Raka Pratama</span>,
						Front-End Developer Based in Bandung, Indonesia
					</span>
				</Col>
				<Col xs={{ span: 0 }} xl={{ span: 24 }}>
					<TextLoop
						style={{
							fontSize: '5rem',
							fontWeight: 700,
							marginLeft: '200px',
						}}
					/>
				</Col>
			</Row>
		</MainLayout>
	);
};

export default HomePage;
