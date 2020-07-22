import React from 'react';

import { Avatar, Col, Row } from 'antd';

import OverviewItem from '../../molecules/resume/overview-item';

const Overview = () => {
	return (
		<Row
			className="my-bg-dark-gray pa5 ba my-moon-white-border"
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
							applications with various libraries and frameworks
							such as React, React Native, Vue, Angular. Also
							capable to do development using Python, and Dart
						</div>
					</Col>
					<Col span="24">
						<Row
							className="gray"
							gutter={16}
							justify={{ xs: 'center', md: 'start' }}>
							<OverviewItem label="Age: " content="22" />
							<OverviewItem
								label="Phone: "
								content="(+62) 8595 137 2394"
							/>
							<OverviewItem
								label="Email: "
								content="mgf.prauliyatama@gmail.com"
							/>
							<OverviewItem
								label="Residence: "
								content="Bandung, ID"
							/>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Overview;
