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
			<Footer />
			<div className="pb3">{props.children}</div>
		</div>
	);
};

export default MainLayout;
