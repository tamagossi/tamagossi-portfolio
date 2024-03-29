import HTTPAdapterService from './adapter.service';
import { Experience, Meta } from 'interface';

class ExperienceService extends HTTPAdapterService {
	public async addExperince(payload: Experience): Promise<Experience> {
		try {
			const { data } = await this.sendPostRequest('/api/experiences', payload);

			return data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	public async deleteExperienceById(id: string): Promise<any> {
		try {
			const { data } = await this.sendDeleteRequest(`/api/experiences/${id}`);

			return data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	public async getExperienceById(id: string): Promise<{ data: Experience }> {
		try {
			const { data } = await this.sendGetRequest(`/api/experiences/${id}`);

			return data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	public async getExperiences(
		params?: Record<string, any>
	): Promise<{ data: Experience[]; meta: Meta }> {
		try {
			const { data } = await this.sendGetRequest('/api/experiences', { ...params });

			return data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	public async updateExperience(id: string, payload: Experience): Promise<any> {
		try {
			const { data } = await this.sendPutRequest(`/api/experiences/${id}`, payload);

			return data;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}

export default ExperienceService;
