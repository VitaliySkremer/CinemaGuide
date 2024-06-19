import type { IMovie } from '~/models/film';

export const useRandomMovie = () => {
	const {
		data,
		suspense: randomMovieSuspense,
		isPending,
		isLoading,
		isSuccess
	} = useQuery({
		queryKey: ['randomMovie'],
		queryFn: () => useNuxtApp().$apiFetch<IMovie>('movie/random'),
	});

  const randomMovieQuery = toRef(data, 'value')

	randomMovieSuspense();

	return {
		randomMovieQuery,
		isPending,
		isLoading,
		isSuccess
	};
};
