import React from 'react';
import { Col, Row } from 'antd';
import {
	GithubOutlined,
	LinkedinFilled,
	TwitterOutlined,
} from '@ant-design/icons';

import SocialMedia from '../../atoms/footer/social-media';
import TextLoop from '../../atoms/text-loop';

const Footer = () => {
	return (
		<>
			<Row
				align="bottom"
				className="white pa4 pa5-l w-100 fixed fixed-bottom"
				justify="space-between"
				style={{ zIndex: '81' }}>
				<Col className="f5 fw3 light-gray dn db-l">
					<div>E: mgf.prauliyatama@gmail.com</div>
					<div>T: (+62) 8595 137 2394</div>
				</Col>
				<Col className="f4 fw7 dn-l">
					<TextLoop />
				</Col>
				<Col className="pointer">
					<Row gutter={12} justify="end">
						<Col>
							<SocialMedia href="#">
								<GithubOutlined
									style={{ marginRight: '1px' }}
								/>
							</SocialMedia>
							<SocialMedia href="#">
								<LinkedinFilled
									style={{ marginRight: '1px' }}
								/>
							</SocialMedia>
							<SocialMedia href="#">
								<TwitterOutlined
									style={{ marginRight: '1px' }}
								/>
							</SocialMedia>
						</Col>

						<Col span="24">
							<div className="f5 fw3 light-gray dn db-l mt4 tr">
								Created with <span className="pink">❤</span>{' '}
								using Next.js
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default Footer;
