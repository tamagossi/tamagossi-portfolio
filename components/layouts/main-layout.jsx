import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

import Head from 'next/head';

const MainLayout = (props) => {
	return (
		<div
			className="main-background"
			style={{
				backgroundImage: 'url(images/background.jpg)',
				backgroundSize: '100%',
				backgroundRepeat: 'repeat',
			}}>
			<Head>
				<title>{props.pageTitle} | Tamagos</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					property="og:title"
					content={props.pageTitle}
					key={props.pageTitle}
				/>
			</Head>
			<Header />
			<Footer />
			<div className="pb3">{props.children}</div>
		</div>
	);
};

export default MainLayout;
