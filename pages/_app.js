import App from 'next/app';
import React from 'react';

import { PageTransition } from 'next-page-transitions';
import { Provider } from 'mobx-react';

import 'antd/dist/antd.css';
import 'tachyons';
import './../assets/styles/custom.css';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Provider>
				<PageTransition timeout={300} classNames="page-transition">
					<Component {...pageProps} />
				</PageTransition>

				<style jsx global>
					{`
						.page-transition-enter {
							opacity: 0;
						}
						.page-transition-enter-active {
							opacity: 1;
							transition: opacity 300ms;
						}
						.page-transition-exit {
							opacity: 1;
						}
						.page-transition-exit-active {
							opacity: 0;
							transition: opacity 300ms;
						}
					`}
				</style>
			</Provider>
		);
	}
}

export default MyApp;
