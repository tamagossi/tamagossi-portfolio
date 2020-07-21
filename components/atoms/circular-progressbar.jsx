import React from 'react';

import { Col, Progress } from 'antd';

const CircularBar = (props) => {
	return (
		<Col className="mt5" xs={{ span: 8 }} lg={{ span: 6 }}>
			<div className="tc">
				<Progress
					format={() => (
						<span className="f3 dark-pink">{props.text}</span>
					)}
					id={props.value}
					percent={props.value}
					strokeColor={{
						'0%': '#ff80cc',
						'100%': '#d5008f',
					}}
					strokeLinecap="square"
					type="circle"
					width="150px"
				/>
				<div className="tc mt4 f3 white">{props.title}</div>
			</div>
		</Col>
	);
};

export default CircularBar;
