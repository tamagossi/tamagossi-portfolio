import React from 'react';
import TextLoop from 'react-text-loop';

const MyTextLoop = (props) => {
	return (
		<div style={{ ...props.style }}>
			<span className="white">I do </span>
			<TextLoop
				interval="2000"
				springConfig={{
					stiffness: 180,
					damping: 10,
				}}>
				<span className="dark-pink">website development</span>
				<span className="dark-pink">mobile apps development</span>
				<span className="dark-pink">front-end development</span>
			</TextLoop>
		</div>
	);
};

export default MyTextLoop;
