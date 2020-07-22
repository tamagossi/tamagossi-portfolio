import './../assets/styles/custom.css';
import 'antd/dist/antd.css';
import 'nprogress/nprogress.css';
import 'tachyons';

import App from 'next/app';
import NProgress from 'nprogress';
import React from 'react';
import Router from 'next/router';

import { PageTransition } from 'next-page-transitions';
import { Provider } from 'mobx-react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
						#nprogress .spinner-icon {
							border-top-color: #ff41b4;
							border-left-color: #ff41b4;
						}
						#nprogress .bar {
							background: #ff41b4;
						}
						#nprogress .peg {
							box-shadow: 0 0 10px #ff41b4, 0 0 5px #ff41b4;
						}
					`}
				</style>
			</Provider>
		);
	}
}

export default MyApp;
