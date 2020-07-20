import React from 'react';
import Router from 'next/router';
import { Button, Col, Row } from 'antd';

import MainLayout from '../components/layouts/main-layout';
import TextLoop from '../components/atoms/text-loop';

const HomePage = () => {
	const toResume = () => {
		Router.replace('/resume');
	};

	return (
		<MainLayout>
			<Row align="middle" className="white" style={{ height: '100vh' }}>
				<Col xs={{ span: 24 }} lg={{ span: 12, push: 5 }}>
					<div className="tc tl-l">
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
							<a
								href="https://docs.google.com/document/d/1qM2x5Y_MOhtsSOamVNSig4Iv63j1YY2i8rprDwJ55L0/edit?usp=sharing"
								target="_blank">
								<Button
									className="bg-transparent ba b--dark-pink bw1 dark-pink hover-bg-white hover-dark-pink hover-b--none"
									size="large">
									View CV and Portfolio
								</Button>
							</a>
						</Col>
						<Col>
							<Button
								className="bg-dark-pink white b--none hover-bg-white hover-dark-pink"
								onClick={() => toResume()}
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
