import React from 'react';

const ExperienceAndEducationItem = (props) => {
	return (
		<div className="mt5 pa4 my-bg-dark-gray ba my-moon-white-border">
			<div className="gray f5 mb0">{props.years}</div>
			<div className="mt2 f4 f3-l fw6">
				<a href={props.website ? props.website : '/resume'}>
					<span className="dark-pink">{props.institution}</span>
				</a>
			</div>
			<div className="mt4 moon-gray f5 f4-l">{props.description}</div>
		</div>
	);
};

export default ExperienceAndEducationItem;
