import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

import Head from 'next/head';

const MainLayout = (props) => {
	const [headerStyle, setHeaderStyle] = useState({
		transition: 'all 200ms ease-in',
	});

	useScrollPosition(({ currPos }) => {
		const isScrolled = currPos.y <= -200;

		const shouldBeStyle = {
			background: isScrolled ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
			transition: `all 200ms ${isScrolled ? 'ease-in' : 'ease-out'}`,
		};

		setHeaderStyle(shouldBeStyle);
	});

	return (
		<div
			className="main-background"
			style={{
				backgroundImage: 'url(images/background.jpg)',
				backgroundSize: '100%',
				backgroundRepeat: 'repeat',
			}}>
			<Head>
				<title>{props.pageTitle} | Tamagossi</title>
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
			<Header style={headerStyle} />
			<Footer />
			<div className="pb3">{props.children}</div>
		</div>
	);
};

export default MainLayout;
