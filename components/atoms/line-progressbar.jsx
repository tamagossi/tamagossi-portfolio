import React from 'react';

import { Col, Progress } from 'antd';

const LineBar = (props) => {
	return (
		<Col className="mt5" xs={{ span: 24 }} lg={{ span: 12 }}>
			<div class="tc">
				<div style={{ width: '90%' }}>
					<Progress
						format={() => (
							<span className="f3 dark-pink">{props.text}</span>
						)}
						percent={props.value}
						strokeColor={{
							from: '#ff80cc',
							to: '#d5008f',
						}}
						strokeLinecap="square"
					/>
				</div>
				<div className="tc mt4 f3 white">{props.title}</div>
			</div>
		</Col>
	);
};

export default LineBar;
