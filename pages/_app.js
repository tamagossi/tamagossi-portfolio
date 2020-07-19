import { Provider } from 'mobx-react';
import App from 'next/app';
import React from 'react';

import 'antd/dist/antd.css';
import './../assets/styles/custom.css';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Provider>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default MyApp;
