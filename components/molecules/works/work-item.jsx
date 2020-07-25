import React from 'react';
import { Button, Tooltip } from 'antd';

const WorkItem = (props) => {
	const renderVisitWebsite = () => {
		const button = (
			<Button className="bg-hot-pink white ba b--hot-pink hover-hot-pink">
				Visit Website
			</Button>
		);

		if (props.url) {
			return (
				<a href={props.url} target="_blank">
					{button}
				</a>
			);
		} else {
			return (
				<Tooltip
					title="Website used internally, you can't visit the website"
					color="pink">
					{button}
				</Tooltip>
			);
		}
	};

	return (
		<div
			className="dib mt3 pa4 my-bg-dark-gray ba my-moon-white-border"
			style={{ ...props.styles }}>
			<div className="moon-gray f3">{props.name}</div>
			<div
				className="hot-pink mt2 f6 fw6"
				style={{ height: '25px', overflowY: 'auto' }}>
				{props.corp}
			</div>
			<div
				className="mt4 moon-gray f6 f4-ns"
				style={{ height: '100px', overflowY: 'auto' }}>
				{props.desc}
			</div>

			{renderVisitWebsite()}
		</div>
	);
};

export default WorkItem;
