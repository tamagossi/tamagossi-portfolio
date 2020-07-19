import Link from 'next/link';
import React from 'react';
import { Button, Row, Col, Typography, message } from 'antd';

import MainLayout from '../layouts/main';
import MoleculeSalesReportCard from '../components/molecules/salesReportCard';
import OrganismDatatable from '../components/organisms/datatable';

import SaleService from '../services/saleService';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.mock = [
			{
				id: 1,
				orderClosedCount: 2019,
				productGroupCount: 12,
				supplierName: 'PT. Agnesia',
			},
			{
				id: 2,
				orderClosedCount: 2019,
				productGroupCount: 12,
				supplierName: 'PT. Agensia',
			},
			{
				id: 3,
				orderClosedCount: 2019,
				productGroupCount: 12,
				supplierName: 'PT. Agnesia',
			},
		];

		this.state = {
			saleSummaries: [],
		};

		this.tableColumns = [
			{
				title: 'Supplier ID',
				dataIndex: 'id',
				sorter: false,
			},
			{
				title: 'Nama Supplier',
				dataIndex: 'supplierName',
				sorter: false,
			},
			{
				title: 'Product Group Count',
				dataIndex: 'productGroupCount',
				sorter: false,
			},
			{
				title: 'Total Closed Order',
				dataIndex: 'orderClosedCount',
				sorter: false,
			},
			{
				title: 'View',
				dataIndex: 'id',
				sorter: false,
				render: (id) => (
					<Link href={`sales/detail?saleID=${id}`}>
						<span
							className="still-de-grain"
							style={{ color: '#f4c55f', cursor: 'pointer' }}>
							View
						</span>
					</Link>
				),
			},
			{
				title: 'Action Button',
				dataIndex: 'id',
				sorter: false,
				render: (id) => (
					<Row gutter={8}>
						<Col>
							<Button className="ant-btn-jungle ant-btn-primary">
								Edit
							</Button>
						</Col>
						<Col>
							<Button
								className="ant-btn-geranium ant-btn-primary"
								onClick={() => this.deleteSale(id)}>
								Delete
							</Button>
						</Col>
					</Row>
				),
			},
		];

		this.saleService = new SaleService();
		this.tableRef = React.createRef();
	}

	async componentDidMount() {
		await this.getSaleSummaries();
	}

	getSaleSummaries = async () => {
		try {
			const saleSummaries = await this.saleService.getSaleSummaries(0);
			this.setState({ ...this.state, saleSummaries });
		} catch (error) {
			message.error(error.message);
		}
	};

	deleteSale = async (saleID) => {
		try {
			await this.saleService.deleteSale(saleID);
			message.success('Berhail menghapus data penjualan');

			this.tableRef.current.refetchData();
		} catch (error) {
			message.error(error.message);
		}
	};

	render() {
		return (
			<MainLayout>
				<Row>
					<Col xxl={12} xl={12} lg={16}>
						<Typography.Title level={2}>
							Hi, PT. Agnesia
						</Typography.Title>
						<Typography.Text>
							Ini adalah update terbaru mu.
						</Typography.Text>
					</Col>
				</Row>

				<Row>
					<Col span={24} className="separator">
						<hr />
					</Col>
				</Row>

				<Row>
					<Col xxl={12} xl={12} lg={16}>
						<Typography.Title level={2}>
							Laporan Penjualan
						</Typography.Title>
						<Typography.Text>
							Ini adalah update terbaru mu.
						</Typography.Text>
					</Col>
				</Row>

				<Row gutter={12} style={{ margin: '15px 0px' }}>
					{this.state.saleSummaries.map((summary, index) => (
						<Col key={`key-${index}`}>
							<MoleculeSalesReportCard
								revenue={summary.revenueAmount}
							/>
						</Col>
					))}
				</Row>
				<OrganismDatatable
					emptyDataState={{
						title: 'Belum ada produk',
						message: 'Ayo tambahkan produkmu di platfom kami.',
					}}
					dataColumns={this.tableColumns}
					dataSourceURL={`${process.env.API_ENDPOINT}/`}
					mock={this.mock}
					pageSize={8}
					ref={this.tableRef}
					withoutSearchForm
				/>
			</MainLayout>
		);
	}
}
