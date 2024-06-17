<template>
  <div class="movies">
	<h2 class="title">
		Топ 10 фильмов
	</h2>
	<div class="movies__list">
		<MoviesPreviewItem 
			v-for="(movie, index) in top10MovieQuery"
			:key="movie.id"
			:movie="movie"
			:topPlace="index + 1"
		/>
	</div>
  </div>
</template>

<script lang="ts" setup>
import type { IMovie } from '~/models/film';

const {
	data: top10MovieQuery,
	suspense: top10MovieSuspense,
	isPending: top10MovieIsPending,
} = useQuery({
	queryKey: ['top10movie'],
	queryFn: () => useNuxtApp().$apiFetch<IMovie[]>('movie/top10'),
});

await top10MovieSuspense();

</script>

<style scoped lang="scss">
.movies {
	display: flex;
	flex-direction: column;
	gap: 64px;

	&__list {
		display: grid;
		gap: 40px;
		grid-template-columns: repeat(5, 1fr);
	}
}
</style>