import React from 'react';

import { Col, Progress } from 'antd';

const CircularBar = (props) => {
	const isSmall = typeof window !== 'undefined' && window.innerWidth <= 600;

	return (
		<Col
			className="mt5"
			xs={{ span: 12 }}
			md={{ span: 8 }}
			lg={{ span: 6 }}>
			<div className="tc">
				<Progress
					format={() => (
						<span className="f5 f3-l dark-pink">{props.text}</span>
					)}
					id={props.value}
					percent={props.value}
					strokeColor={{
						'0%': '#ff80cc',
						'100%': '#d5008f',
					}}
					strokeLinecap="square"
					type="circle"
					width={isSmall ? '90px' : '150px'}
				/>
				<div className="tc mt4 f4 f3-l white">{props.title}</div>
			</div>
		</Col>
	);
};

export default CircularBar;
