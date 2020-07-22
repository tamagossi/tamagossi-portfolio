import React from 'react';
import { Row, Typography } from 'antd';

import { CodeOutlined, MobileOutlined } from '@ant-design/icons';

import ServiceItem from '../../molecules/resume/service-item';

const Services = () => {
	return (
		<div style={{ marginTop: '6rem' }}>
			<Typography.Title>
				<span className="moon-gray">Services</span>
			</Typography.Title>
			<Row justify="space-between">
				<ServiceItem
					icon={<CodeOutlined />}
					title="Front-End Web Development"
					description="Modern React (or any other SPA Framework)
                        and mobile-ready website that will help you reach
                        all of your marketing."
				/>
				<ServiceItem
					icon={<MobileOutlined />}
					title="Mobile Apps Development"
					description="Hybrid React Native or Flutter application
                        so then your market can access your business anywhere and anytime"
				/>
				<ServiceItem
					icon={<CodeOutlined />}
					title="Back-End Web Development"
					description="Built fast and robust server-side application using
                        Node Express, or Python"
				/>
			</Row>
		</div>
	);
};

export default Services;
