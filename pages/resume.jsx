import React from 'react';
import { Avatar, Col, Row } from 'antd';

import MainLayout from '../components/layouts/main-layout';

const Resume = () => {
	return (
		<MainLayout>
			<Row
				align="middle"
				className="white"
				justify="center"
				style={{ height: '100vh' }}>
				<div className="white resume-title fw6">Resume</div>
			</Row>

			<Row
				className="my-bg-dark-gray main-margin pa5 ba my-moon-white-border"
				justify={{ xs: 'center', md: 'start' }}>
				<Col className="tc tl-l" xs={{ span: 24 }} md={{ span: 6 }}>
					<Avatar
						className="w-80 h-inherit"
						src="images/resume.jpg"
						shape="square"
					/>
				</Col>
				<Col xs={{ span: 24 }} md={{ span: 18 }}>
					<Row>
						<Col span={24}>
							<div className="gray mt4 mt0-l f4 f3-l fw3 tc tl-l">
								Software engineer with 3+ years experience in
								designing, developing, enhancing Javascript
								applications with various libraries and
								frameworks such as React, React Native, Vue,
								Angular. Also capable to do development using
								Python, and Dart
							</div>
						</Col>
						<Col className="mt4" span="24">
							<Row
								className="gray"
								gutter={16}
								justify={{ xs: 'center', md: 'start' }}>
								<Col
									className="tc tl-l f4 f3-l"
									xs={{ span: 24 }}
									md={{ span: 8 }}>
									<span className="dark-pink fw6">Age: </span>
									<br />
									22
								</Col>
								<Col
									className="tc tl-l f4 f3-l"
									xs={{ span: 24 }}
									md={{ span: 8 }}>
									<span className="dark-pink fw6">
										Phone:{' '}
									</span>
									<br />
									(+62) 8595 137 2394
								</Col>
								<Col
									className="tc tl-l f4 f3-l"
									xs={{ span: 24 }}
									md={{ span: 8 }}>
									<span className="dark-pink fw6">
										Email:{' '}
									</span>
									<br /> mgf.prauliyatama@gmail.com
								</Col>
								<Col
									className="tc tl-l f4 f3-l"
									xs={{ span: 24 }}
									md={{ span: 8 }}>
									<span className="dark-pink fw6">
										Residence:{' '}
									</span>
									<br />
									Bandung, ID
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row className="pb6"></Row>
		</MainLayout>
	);
};

export default Resume;
