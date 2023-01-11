import { Experience } from 'interface/experience.interface';
import { useQuery } from 'react-query';

import generateQueryOptions from './generateOptions';
import { ExperienceService } from '@/services';

const getExperiences = async (): Promise<Experience[]> => {
	try {
		const service = new ExperienceService();

		return await service.getExperiences();
	} catch (error: any) {
		throw Error(error);
	}
};

const useGetExperiences = ({ options }: { options?: Object }) => {
	return useQuery<Experience[], Error>(
		['experiences'],
		() => getExperiences(),
		generateQueryOptions(options)
	);
};

const useExperienceQuery = () => {
	return {
		useGetExperiences,
	};
};

export default useExperienceQuery;
