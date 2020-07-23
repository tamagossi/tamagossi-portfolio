import React from 'react';
import { Row } from 'antd';

import MainLayout from '../components/layouts/main-layout';
import FeaturedWorks from '../components/organisms/works/featured-works';
import WorkWithMe from '../components/organisms/work-with-me';
import OtherProject from '../components/organisms/works/other-projects';

const Resume = () => {
	if (typeof window !== 'undefined') {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<MainLayout pageTitle="Works">
			<Row
				align="middle"
				className="white"
				justify="center"
				style={{ height: '100vh' }}>
				<div className="white resume-title fw6">Works</div>
			</Row>

			<div className="main-margin pb6">
				<FeaturedWorks />

				<OtherProject />

				<WorkWithMe />
			</div>
		</MainLayout>
	);
};

export default Resume;
