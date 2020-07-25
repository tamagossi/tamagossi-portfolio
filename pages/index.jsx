import React from 'react';
import Router from 'next/router';
import { Button, Col, Row, Typography } from 'antd';

import MainLayout from '../components/layouts/main-layout';
import TextLoop from '../components/atoms/text-loop';

const HomePage = () => {
	const toResume = () => Router.replace('/resume');
	const buttonJustify =
		typeof window !== 'undefined' && window.innerWidth <= 576
			? 'center'
			: 'start';

	return (
		<MainLayout pageTitle="Home">
			<Row align="middle" className="mh4" style={{ height: '100vh' }}>
				<Col
					xs={{ span: 24 }}
					lg={{ span: 20, push: 3 }}
					xl={{ span: 14, push: 5 }}
					xxl={{ span: 12, push: 5 }}>
					<div className="tc tl-l">
						<Typography.Text className="white tc tl-m f3 f1-l fw5">
							Hello, I’m{' '}
							<span className="dark-pink">Raka Pratama</span>,
							Front-End Developer Based in Bandung, Indonesia
						</Typography.Text>
					</div>

					<div className="dn mt4 db-l">
						<TextLoop
							style={{
								fontSize: '1.5rem',
								fontWeight: 500,
							}}
						/>
					</div>

					<Row
						className="mt4 home-button"
						justify={buttonJustify}
						gutter={24}>
						<Col>
							<a
								className="db w-100 tc tl-ns"
								href="https://docs.google.com/document/d/1qM2x5Y_MOhtsSOamVNSig4Iv63j1YY2i8rprDwJ55L0/edit?usp=sharing"
								target="_blank">
								<Button
									className="bg-transparent dark-pink ba b--dark-pink bw1 hover-bg-white hover-dark-pink hover-b--none"
									size="large">
									View CV and Portfolio
								</Button>
							</a>
						</Col>
						<Col className="mt3 mt0-ns tc tl-ns">
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
