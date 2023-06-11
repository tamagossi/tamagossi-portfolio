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

export const useDeleteExperienceById = (options?: MutationOptions) => {
	const client = useQueryClient();
	const toast = useToast();

	return useMutation<any, Error, any>(
		async (id: string): Promise<any> => {
			try {
				const service = new ExperienceService();
				const response = await service.deleteExperienceById(id);

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
					description: 'You succesfully delete experience',
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
	params: Record<any, string | number>;
	options?: QueryOpts<any>;
}) => {
	return useQuery<{ data: Experience[]; meta: Meta }, Error>(
		[QUERY_KEYS.EXPERIENCES, params.page, params.limit],
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

export const useGetExperienceById = ({ id, options }: { id: string; options?: QueryOpts<any> }) => {
	return useQuery<{ data: Experience }, Error>(
		[QUERY_KEYS.EXPERIENCES, id],
		async () => {
			try {
				const service = new ExperienceService();
				const response = await service.getExperienceById(id);

				return response;
			} catch (error: any) {
				throw Error(error);
			}
		},
		generateQueryOptions(options)
	);
};
