import React from 'react';
import { Typography } from 'antd';

const SectionTitle = (props) => {
	const titleSize =
		typeof window !== 'undefined' && window.innerWidth < 600 ? 2 : 1;

	return (
		<Typography.Title level={titleSize}>
			<span className="moon-gray">{props.children}</span>
		</Typography.Title>
	);
};

export default SectionTitle;
