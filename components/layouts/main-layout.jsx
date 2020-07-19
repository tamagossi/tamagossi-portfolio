import React from 'react';

import Header from '../organisms/header';

const MainLayout = (props) => {
	return (
		<div className="main-background">
			<Header />
			{props.children}
		</div>
	);
};

export default MainLayout;
