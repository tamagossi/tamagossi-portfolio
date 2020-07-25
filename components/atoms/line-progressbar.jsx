import React from 'react';

import { Col, Progress } from 'antd';

const LineBar = (props) => {
	const isSmall = typeof window !== 'undefined' && window.innerWidth <= 600;

	return (
		<Col className="mt5 ph3 ph0-l" xs={{ span: 24 }} lg={{ span: 12 }}>
			<div className="tc">
				<div style={{ width: isSmall ? '100%' : '90%' }}>
					<Progress
						format={() => (
							<span className="f3 dark-pink">{props.text}</span>
						)}
						percent={props.value}
						strokeColor={{
							from: '#ff80cc',
							to: '#d5008f',
						}}
						showInfo={isSmall ? false : true}
						strokeLinecap="square"
					/>
				</div>
				<div className="tc mt3 mt4-l f4 white">{props.title}</div>
			</div>
		</Col>
	);
};

export default LineBar;
