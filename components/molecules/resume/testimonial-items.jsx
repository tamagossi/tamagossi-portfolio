import React from 'react';

const TestimonialItem = (props) => {
	return (
		<div className="dib mt5 pa4 my-bg-dark-gray ba my-moon-white-border w-48">
			<div className="moon-gray f3">{props.name}</div>
			<div className="hot-pink f5 fw6">{props.role}</div>
			<div
				className="mt4 moon-gray f4"
				style={{ height: '100px', overflowY: 'auto' }}>
				{props.text}
			</div>
		</div>
	);
};

export default TestimonialItem;
