import React from 'react';
import { Col, Row } from 'antd';

import CodingSkills from '../components/organisms/resume/coding-skills';
import ExperienceAndEducation from '../components/organisms/resume/experiences-and-education';
import MainLayout from '../components/layouts/main-layout';
import Overview from '../components/organisms/resume/overview';
import ProgrammingSkills from '../components/organisms/resume/programming-languages';
import Services from '../components/organisms/resume/services';
import Testimonials from '../components/organisms/resume/testimonials';

const Resume = () => {
	// if (typeof window !== 'undefined') {
	// 	window.scrollTo(0, document.body.scrollHeight);
	// }

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

			<Row
				className="main-margin"
				justify="space-between"
				style={{ marginTop: '6rem' }}>
				<Col className="mt5 mt0-l" xs={{ span: 24 }} lg={{ span: 11 }}>
					<ExperienceAndEducation title="Experience" />
				</Col>
				<Col className="mt5 mt0-l" xs={{ span: 24 }} lg={{ span: 11 }}>
					<ExperienceAndEducation title="Education" />
				</Col>
			</Row>

			<ProgrammingSkills />

			<CodingSkills />

			<Testimonials />

			<Row className="pb6"></Row>
		</MainLayout>
	);
};

export default Resume;
