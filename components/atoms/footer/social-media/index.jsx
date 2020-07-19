import React from 'react';

const SocialMedia = (props) => {
	return (
		<a className="db white mt3 f3 f2-l hover-dark-pink" href={props.href}>
			{props.children}
		</a>
	);
};

export default SocialMedia;
