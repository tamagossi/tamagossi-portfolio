import React from 'react';
import { Row } from 'antd';

import Experience from '../components/organisms/resume/experiences';
import MainLayout from '../components/layouts/main-layout';
import Overview from '../components/organisms/resume/overview';
import Services from '../components/organisms/resume/services';

const Resume = () => {
	if (window) {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<MainLayout>
			<Row
				align="middle"
				className="white"
				justify="center"
				style={{ height: '100vh' }}>
				<div className="white resume-title fw6">Resume</div>
			</Row>

			<Overview />

			<Services />

			<Experience />

			<Row className="pb6"></Row>
		</MainLayout>
	);
};

export default Resume;
