import React from 'react';

const TestimonialItem = (props) => {
	return (
		<div
			className="dib mt3 pa4 my-bg-dark-gray ba my-moon-white-border"
			style={{ ...props.styles }}>
			<div className="moon-gray f3">{props.name}</div>
			<div
				className="hot-pink f5 fw6"
				style={{ height: '22px', overflowY: 'auto' }}>
				{props.role}
			</div>
			<div
				className="mt3 mt4-l moon-gray f5 f4-l"
				style={{ height: '100px', overflowY: 'auto' }}>
				{props.text}
			</div>
		</div>
	);
};

export default TestimonialItem;
