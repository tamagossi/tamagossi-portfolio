import React from 'react';
import { Button, Col, Row } from 'antd';

import MainLayout from '../components/layouts/main-layout';
import TextLoop from '../components/atoms/text-loop';

const HomePage = () => {
	return (
		<MainLayout>
			<Row align="middle" className="white" style={{ height: '100vh' }}>
				<Col xs={{ span: 24 }} lg={{ span: 12, push: 5 }}>
					<div class="tc tl-l">
						<span className="ph4 ph0-l f2 f1-l fw5">
							Hello, I’m{' '}
							<span className="dark-pink">Raka Pratama</span>,
							<br />
							Front-End Developer Based in Bandung, Indonesia
						</span>
					</div>
					<div className="dn mt4 db-l">
						<TextLoop
							style={{
								fontSize: '1.5rem',
								fontWeight: 500,
							}}
						/>
					</div>
					<Row className="mt4 home-button" gutter={24}>
						<Col>
							<Button
								className="bg-transparent ba b--dark-pink bw1 dark-pink hover-bg-white hover-dark-pink hover-b--none"
								size="large">
								Download My CV
							</Button>
						</Col>
						<Col>
							<Button
								className="bg-dark-pink white b--none hover-bg-white hover-dark-pink"
								size="large">
								Explore More
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</MainLayout>
	);
};

export default HomePage;
