import { MutationOptions, useMutation, useQuery, useQueryClient } from 'react-query';

import { ExperienceService } from '@/services';
import { generateQueryOptions } from '@/helpers';
import { Meta, QueryOpts, Experience } from 'interface';
import { QUERY_KEYS } from '@/constants';
import { useToast } from '@chakra-ui/react';

export const useAddExperienceMutation = (options?: MutationOptions) => {
	const client = useQueryClient();
	const toast = useToast();

	return useMutation<Experience, Error, any>(
		async (payload: Experience): Promise<Experience> => {
			try {
				const service = new ExperienceService();
				const response = await service.addExperince(payload);

				return response;
			} catch (error: any) {
				throw Error(error);
			}
		},
		{
			...options,
			onSuccess: () => {
				toast({
					status: 'success',
					description: 'You succesfully create new experience',
					title: 'Success 😊',
					position: 'bottom-left',
				});

				return client.invalidateQueries({ queryKey: [QUERY_KEYS.EXPERIENCES] });
			},
			onError: (error) => {
				toast({
					status: 'error',
					description: error.message,
					title: 'Something went wrong 😱',
					position: 'bottom-left',
				});
			},
		}
	);
};

export const useGetExperiences = ({
	params,
	options,
}: {
	params: Record<any, string>;
	options?: QueryOpts<any>;
}) => {
	return useQuery<{ data: Experience[]; meta: Meta }, Error>(
		[QUERY_KEYS.EXPERIENCES, { ...params }],
		async () => {
			try {
				const service = new ExperienceService();
				const response = await service.getExperiences(params);

				return response;
			} catch (error: any) {
				throw Error(error);
			}
		},
		generateQueryOptions(options)
	);
};
