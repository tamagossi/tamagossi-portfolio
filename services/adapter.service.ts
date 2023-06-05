import axios, { AxiosInstance } from 'axios';

export default class HTTPAdapterService {
	private client: AxiosInstance;

	constructor() {
		let headers = {
			'Content-Type': 'application/json',
		};

		this.client = axios.create({
			headers,
		});
	}

	public sendGetRequest(URL: string, params?: Record<string, any>) {
		return this.client.get(URL, { params });
	}

	public sendPostRequest(URL: string, requestBody: Record<string, any>) {
		return this.client.post(URL, requestBody);
	}

	public sendPutRequest(URL: string, requestBody: Record<string, any>) {
		return this.client.put(URL, requestBody);
	}

	public sendDeleteRequest(URL: string, requestBody: Record<string, any>) {
		return this.client.delete(URL, requestBody);
	}
}
