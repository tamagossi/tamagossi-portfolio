import RequestAdapterService from './requestAdapter.service';
import { Meta } from 'interface/shared.interface';
import { Experience } from 'interface/experience.interface';
import { EXPERIENCES } from '@/constants';

export default class ExperienceService extends RequestAdapterService {
	async getExperiences(): Promise<Experience[]> {
		return await EXPERIENCES;
	}
}
