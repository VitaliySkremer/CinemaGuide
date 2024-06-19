<template>
	<div class="movies" v-if="movies">
		<ul class="movies__list">
			<li v-for="movie in movies" :key="movie.id" class="movie">
				<NuxtLink :to="{ name: 'movie', params: { id: movie.id } }">
					<NuxtImg 
						loading="lazy"
						:src="movie.posterUrl"
						alt="movie-poster"
						class="movie__poster"
						fit="cover"
					/>
				</NuxtLink>
			</li>
		</ul>
		<div class="movies__actions">
			<UIButton v-if="page > 1" @click="page--" class="more__movies">
				Вернуться
			</UIButton>
			<UIButton @click="page++">
				Далее
			</UIButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	genre: string;
}>();

const { movies, isPending, isLoading, isSuccess, page } = useMoviesByGenre(props.genre);
</script>

<style scoped lang="scss">

.movies {
	display: flex;
	flex-direction: column;
	gap: 64px;
}

.movies__list {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 40px;
	list-style: none;
	padding: 0;
	margin: 0;
}

.movie {
	height: 100%;
	min-height: 392px;

	&__poster {
		height: 100%;
		width: 100%;
		border-radius: 24px;
		box-shadow: 0px 0px 80px 0px #FFFFFF54;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.02);
		}
	}
}

.movies__actions {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 28px;
}
</style>
