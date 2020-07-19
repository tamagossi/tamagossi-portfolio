import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

const MainLayout = (props) => {
	return (
		<div className="main-background">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default MainLayout;
