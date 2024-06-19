export const useGenres = () => {
	const {
		data,
		suspense: genresSuspense,
		isPending,
		isLoading
	} = useQuery({
		queryKey: ['genres'],
		queryFn: () => useNuxtApp().$apiFetch<string[]>('movie/genres'),
    staleTime: 120_000
	});

	const genres = toRef(data, 'value');

	genresSuspense();

	return {
		genres,
		isPending,
		isLoading,
	};
};
