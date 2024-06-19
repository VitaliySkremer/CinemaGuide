import type { IMovie } from '~/models/film';

export const useMoviesByGenre = (genre: string) => {

	const page = ref(1);

	const {
		data,
		suspense: moviesSuspense,
		isPending,
		isLoading,
		isSuccess,
		refetch
	} = useQuery({
		queryKey: ['movies', { genre, page }],
		queryFn: () => useNuxtApp().$apiFetch<IMovie[]>('movie', {
			params:{
				genre,
				count: 15,
				page: page.value
			}
		}),
		staleTime: 60_000
	});

	const movies = toRef(data, 'value');

	moviesSuspense();

	watch(page, () => refetch())

	return {
		movies,
		isPending,
		isLoading,
		isSuccess,
		page
	};
};
