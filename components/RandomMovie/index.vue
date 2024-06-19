<template>
	<section class="random__movie">
		<div class="random__movie__wrapper" v-if="!isLoading && randomMovieQuery">
			<NuxtImg
				v-if="randomMovieQuery.backdropUrl"
				loading="lazy"
				class="random__movie--poster"
				:src="randomMovieQuery.backdropUrl"
				alt="movie-poster"
			/>
			<RandomMovieInfo :movie="randomMovieQuery" />
      <div class="random__movie--action">
        <UIButton>
          Трейлер
        </UIButton>
        <UIButton color-style="secondary">
          О фильме
        </UIButton>
        <UIButton color-style="secondary" form="round">
          <Like/>
        </UIButton>
        <UIButton color-style="secondary" form="round">
          <Swap/>
        </UIButton>
      </div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import Like from '~/assets/img/Like.svg';
import Swap from '~/assets/img/Swap.svg';

const { randomMovieQuery, isPending, isLoading } = useRandomMovie();
</script>

<style scoped lang="scss">
.random__movie {
	position: relative;
  min-height: 680px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

	&--poster {
		position: absolute;
		z-index: $z-not-1;
		right: 0;
		top: 0;
		object-fit: cover;
		width: 900px;
		height: 680px;
		filter: brightness(90%);
	}

  &--action {
    display: flex;
    align-items: center;
    gap: 25px;
  }
}
</style>
