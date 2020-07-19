import React from 'react';
import Link from 'next/link';

import { Col } from 'antd';

const Menu = (props) => {
	return (
		<Link href={props.to}>
			<Col>
				<span className="f4 fw4">{props.label}</span>
			</Col>
		</Link>
	);
};

export default Menu;
