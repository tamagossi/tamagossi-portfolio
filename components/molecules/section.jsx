import React from 'react';

import SectionTitle from '../atoms/section-title';

const Section = (props) => {
	return (
		<div className="tc tl-ns">
			<SectionTitle>{props.title}</SectionTitle>
			{props.children}
		</div>
	);
};

export default Section;
