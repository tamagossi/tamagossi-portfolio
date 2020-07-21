import React from 'react';

import { Col } from 'antd';

const OverviewItem = (props) => {
	return (
		<Col
			className="tc tl-l f4 f3-l"
			xs={{ span: 24 }}
			lg={{ span: 12 }}
			xl={{ span: 8 }}>
			<span className="dark-pink fw6">{props.label}</span>
			<br />
			{props.content}
		</Col>
	);
};

export default OverviewItem;
