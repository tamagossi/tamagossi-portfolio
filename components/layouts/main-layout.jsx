import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

const MainLayout = (props) => {
	return (
		<div
			className="main-background"
			style={{
				backgroundImage: 'url(images/background.jpg)',
				backgroundSize: '100%',
				backgroundRepeat: 'repeat',
			}}>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default MainLayout;
