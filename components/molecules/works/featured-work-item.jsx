import React from 'react';
import { Button, Col, Typography } from 'antd';

const FeaturedWorkItem = (props) => {
	return (
		<Col
			className="my-bg-dark-gray ba my-moon-white-border relative mb5 pa5"
			xs={{ span: 24 }}
			lg={{ span: 11 }}>
			<div className="white tc">
				<img alt="Genflix" src={props.image} width="70%" />
				<Typography.Title
					className="white mt4"
					level={2}
					style={{ marginBottom: 0 }}>
					<span className="white">{props.name}</span>
				</Typography.Title>
				<Typography.Text
					className="hot-pink fw5"
					style={{ fontSize: '1.1rem' }}>
					{props.corp}
				</Typography.Text>
				<div className="mt4">
					<Typography.Text
						className="white"
						style={{
							fontSize: '1.1rem',
							textAlign: 'justify',
							maxHeight: '200px',
							overflowY: 'auto',
						}}>
						{props.desc}
					</Typography.Text>
				</div>
				<a href={props.url} target="_blank">
					<Button className="mt4 bg-hot-pink white ba b--hot-pink hover-hot-pink">
						Visit Website
					</Button>
				</a>
			</div>
		</Col>
	);
};

export default FeaturedWorkItem;
