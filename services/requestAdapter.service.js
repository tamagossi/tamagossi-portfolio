import axios from 'axios';

export default class RequestAdapterService {
	constructor() {
		let requestHeader = {
			'Content-Type': 'application/json',
		};

		this.reqClient = axios.create({
			headers: requestHeader,
		});

		this.reqClient.interceptors.request.use(this.interceptRequestAuthToken);

		this.reqClient.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				if (error.response) {
					const status = error.response.status;

					if (status === 401) useAuthStore.setState({ token: null });
				}

				throw error;
			}
		);
	}

	interceptRequestAuthToken(config) {
		const token = useAuthStore.getState().token;

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		} else {
			delete config.headers.authorization;
		}

		return config;
	}

	overrideAuthToken(authToken) {
		this.reqClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
		return true;
	}

	sendGetRequest(URL, params) {
		return this.reqClient.get(URL, { params });
	}

	sendGetRequestForBinary(URL, params) {
		return this.reqClient.get(URL, {
			params,
			responseType: 'arraybuffer',
		});
	}

	sendPostRequest(URL, requestBody) {
		return this.reqClient.post(URL, requestBody);
	}

	sendPutRequest(URL, requestBody) {
		return this.reqClient.put(URL, requestBody);
	}

	sendDeleteRequest(URL, requestBody) {
		return this.reqClient.delete(URL, requestBody);
	}
}
