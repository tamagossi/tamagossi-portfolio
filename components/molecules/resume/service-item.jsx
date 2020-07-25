import React from 'react';
import { Col } from 'antd';

const ServiceItem = (props) => {
	return (
		<Col
			className="mb5 pa4 my-bg-dark-gray tc ba my-moon-white-border"
			xs={{ span: 24 }}
			lg={{ span: 11 }}
			xl={{ span: 7 }}>
			<div className="dark-pink f1">{props.icon}</div>
			<div className="mt3 mt4-l moon-gray f4 f3-l fw6">{props.title}</div>
			<div className="mt3 mt4-l moon-gray f5 f4-l">
				{props.description}
			</div>
		</Col>
	);
};

export default ServiceItem;
