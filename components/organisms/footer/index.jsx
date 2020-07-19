import React from 'react';
import TextLoop from 'react-text-loop';
import { Col, Row } from 'antd';
import {
	GithubOutlined,
	LinkedinFilled,
	TwitterOutlined,
} from '@ant-design/icons';

import SocialMedia from '../../atoms/footer/social-media';

const Footer = () => {
	return (
		<>
			<Row
				align="bottom"
				className="white pa4 pa5-l w-100 fixed fixed-bottom"
				justify="space-between">
				<Col className="f4 fw3 gray dn db-l">
					<div>E: mgf.prauliyatama@gmail.com</div>
					<div>T: (+62) 8595 137 2394</div>
				</Col>
				<Col className="f4 fw7 dn-l">
					I do &nbsp;
					<TextLoop
						interval="1500"
						springConfig={{
							stiffness: 180,
							damping: 10,
						}}>
						<span className="dark-pink">website development</span>
						<span className="dark-pink">
							mobile apps development
						</span>
						<span className="dark-pink">
							code robust application
						</span>
					</TextLoop>
				</Col>
				<Col className="pointer">
					<Row gutter={12} justify="end">
						<Col>
							<SocialMedia href="#">
								<GithubOutlined />
							</SocialMedia>
							<SocialMedia href="#">
								<LinkedinFilled />
							</SocialMedia>
							<SocialMedia href="#">
								<TwitterOutlined />
							</SocialMedia>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default Footer;
