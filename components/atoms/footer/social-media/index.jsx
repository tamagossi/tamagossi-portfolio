import React from 'react';
import { Col } from 'antd';

const SocialMedia = (props) => {
	return (
		<a className="db white mt3 f3 f2-l" href={props.href}>
			{props.children}
		</a>
	);
};

export default SocialMedia;
