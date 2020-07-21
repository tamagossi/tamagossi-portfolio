import React from 'react';
import { Drawer } from 'antd';

import DrawerLink from './drawer-link';

const HeaderDrawer = (props) => {
	return (
		<Drawer
			bodyStyle={{
				background: 'rgb(27, 27, 27)',
				background: `linear-gradient(
                180deg,
                rgba(27, 27, 27, 1) 0%,
                rgba(0, 0, 0, 1) 100%
            )`,
				color: '#FFFFFF',
			}}
			className="black"
			closable={true}
			headerStyle={{
				background: 'rgb(27, 27, 27)',
				color: '#FFFFFF',
			}}
			onClose={props.closeDrawerHandler}
			placement="right"
			title={
				<>
					<span className="gray">Raka</span>
					{'  '}
					<span className="white">Pratama</span>
				</>
			}
			visible={props.isDrawerVisible}>
			<DrawerLink to="resume" label="Resume" />
			<DrawerLink to="works" label="Works" />
			<DrawerLink to="blog" label="Blog" />
		</Drawer>
	);
};

export default HeaderDrawer;
