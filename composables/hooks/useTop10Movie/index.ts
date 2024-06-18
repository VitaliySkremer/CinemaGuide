import type { IMovie } from '~/models/film';

export const useTop10Movie = () => {
	const {
		data,
		suspense: top10MovieSuspense,
		isPending: top10MovieIsPending,
	} = useQuery({
		queryKey: ['top10movie'],
		queryFn: () => useNuxtApp().$apiFetch<IMovie[]>('movie/top10'),
	});

	const top10MovieQuery = toRef(data, 'value');

	top10MovieSuspense();

	return {
		top10MovieQuery,
		top10MovieIsPending,
	};
};
