import React, { useState } from 'react';

import { Col, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import Drawer from '../../atoms/header/drawer';
import HeaderMenu from '../../atoms/header/menu-link';

const Header = () => {
	const [state, setstate] = useState({ isDrawerVisible: false });

	const closeDrawer = () => setstate({ ...state, isDrawerVisible: false });
	const showDrawer = () => setstate({ ...state, isDrawerVisible: true });

	return (
		<>
			<Row
				align="middle"
				className="white pa4 pa5-l w-100 fixed"
				justify="space-between">
				<Col className="f4 fw7 pointer">
					<span className="f3-l">
						<span className="gray">Raka</span>
						{'  '}
						<span>Pratama</span>
					</span>
				</Col>
				<Col className="pointer dn-l" onClick={() => showDrawer()}>
					<MenuOutlined className="f3" />
				</Col>
				<Col className="pointer dn db-l" span="12">
					<Row gutter={96} justify="end">
						<HeaderMenu to="resume" label="Resume" />
						<HeaderMenu to="works" label="Works" />
						<HeaderMenu to="blog" label="Blog" />
					</Row>
				</Col>
			</Row>

			<Drawer
				closeDrawerHandler={closeDrawer}
				isDrawerVisible={state.isDrawerVisible}
			/>
		</>
	);
};

export default Header;
