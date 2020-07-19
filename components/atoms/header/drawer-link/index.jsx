import Link from 'next/link';
import React from 'react';

const DrawerLink = (props) => {
	return (
		<Link href={props.to}>
			<div className="mb2 f5 dim">{props.label}</div>
		</Link>
	);
};

export default DrawerLink;
