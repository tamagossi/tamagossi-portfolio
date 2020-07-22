import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { MailOutlined, WhatsAppOutlined } from '@ant-design/icons';

const WorkWithMe = () => {
	return (
		<Row justify="center mt6 z-999" gutter={24}>
			<Col span={24} className="mb4">
				<Typography.Title className="tc">
					<span className="moon-gray" style={{ fontSize: '5rem' }}>
						Work With Me?
					</span>
				</Typography.Title>
			</Col>
			<Col span={5}>
				<a
					href={
						'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&' +
						'to=mgf.prauliyatama@gmail.com&su=Lets+Work+Together'
					}
					target="_blank">
					<Button
						block
						className="dark-gray bg-moon-gray hover-dark-red"
						size="large">
						<MailOutlined className="f4 mr2" />
						<span className="f4 fw6">Mail Me</span>
					</Button>
				</a>
			</Col>
			<Col span={5}>
				<a
					href={
						'https://api.whatsapp.com/send?phone=' +
						'6285951372394&text=Hai%20Tama,' +
						'%20Let%27s%20work%20together&source=&data=&app_absent='
					}
					target="_blank">
					<Button
						block
						className="dark-gray bg-moon-gray hover-dark-green "
						size="large">
						<WhatsAppOutlined className="f4 mr2" />
						<span className="f4 fw6">Whatsapp Me</span>
					</Button>
				</a>
			</Col>
		</Row>
	);
};

export default WorkWithMe;
