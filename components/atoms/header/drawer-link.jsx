import Link from 'next/link';
import React from 'react';

const DrawerLink = (props) => {
	return (
		<Link href={props.to}>
			<div className="mb2 fw6 f5 dim hover-dark-pink">{props.label}</div>
		</Link>
	);
};

export default DrawerLink;
