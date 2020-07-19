import React, { useState } from 'react';
import TextLoop from 'react-text-loop';

import { Col, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import Drawer from '../../atoms/header/drawer';

const Header = () => {
	const [state, setstate] = useState({ isDrawerVisible: false });

	const closeDrawer = () => setstate({ ...state, isDrawerVisible: false });
	const showDrawer = () => setstate({ ...state, isDrawerVisible: true });

	return (
		<>
			<Row align="middle" className="white pa4" justify="space-between">
				<Col className="f4 fw7 pointer">
					<span>
						<span className="gray">Raka</span>
						{'  '}
						<span>Pratama</span>
					</span>
					{/* <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
						<span>
							<span className="gray">Raka</span>
							{'  '}
							<span>Pratama</span>
						</span>
						<span>Download CV</span>
					</TextLoop> */}
				</Col>
				<Col className="pointer dn-l" onClick={() => showDrawer()}>
					<MenuOutlined className="f3" />
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
