<template>
  <div class="movie__info">
    <div class="movie__info--top">
      <UIRating :rating="movie.tmdbRating"/>
      <p class="movie__info--top--year">
        {{ movie.releaseYear }}
      </p>
      <p class="movie__info--top--genres">
        {{ movie.genres.join(' ') }}
      </p>
      <p class="movie__info--top--timing">
        {{ useMinuteToHours(movie.runtime) }}
      </p>
    </div>
    <h3 class="title">
      {{ movie.title }}
    </h3>
    <p class="movie__info--description">
      {{ movie.plot }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { IMovie } from '~/models/film';

interface IMovieProps {
  movie: IMovie
}

defineProps<IMovieProps>()
</script>

<style scoped lang="scss">

.movie__info {
  padding-top: 200px;
  display: block;
  max-width: 600px;

  &--top {
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  &--description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 24px;
    line-height: 32px;
  }
}

</style>