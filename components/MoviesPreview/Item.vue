<template>
	<div @click="submit" class="movie__wrapper">
		<div class="movie" :style="{ backgroundImage: `url(${movie.posterUrl})` }">
			<NuxtImg
				loading="lazy"
				class="movie__poster"
				:src="movie.posterUrl"
				alt="movie-poster"
			/>
		</div>
		<MoviesPreviewRating class="rating" :rating="topPlace" />
	</div>
</template>

<script lang="ts" setup>
import type { IMovie } from '~/models/film';

const props = defineProps<{
	movie: IMovie;
	topPlace: number;
}>();

const router = useRouter();

const submit = () => {
	router.push({
    name: 'movie',
    params: { id: props.movie.id },
  });
};
</script>

<style scoped lang="scss">
.movie__wrapper {
	position: relative;
  height: 336px;

	.rating {
		content: '';
		position: absolute;
		top: -12px;
		left: -12px;
		height: 48px;
		width: 68px;
	}
}

.movie {
	border-radius: 16px;
	box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
	overflow: hidden;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;
	height: 100%;

	&:hover {
		transform: scale(1.02);
	}

	&__poster {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
