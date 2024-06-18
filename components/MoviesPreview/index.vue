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

const { top10MovieIsPending, top10MovieQuery } = useTop10Movie();

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