import React from 'react';
import { Button, Col, Typography } from 'antd';

const FeaturedWorkItem = (props) => {
	return (
		<Col
			className="my-bg-dark-gray ba my-moon-white-border mb5 pa4 pa5-m"
			xs={{ span: 24 }}
			lg={{ span: 11 }}>
			<div className="white tc">
				<img alt="Genflix" src={props.image} width="70%" />
				<Typography.Title
					className="white mt4"
					style={{ marginBottom: 0 }}>
					<span className="white f3 f1-m">{props.name}</span>
				</Typography.Title>
				<Typography.Text className="hot-pink f3-m fw5">
					{props.corp}
				</Typography.Text>
				<div className="mt4">
					<Typography.Text
						className="white f3-m"
						style={{
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
