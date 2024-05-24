<template>
  <div class="container home__wrapper">
    <NuxtImg :src="randomMovieQuery.posterUrl" alt="movie" />
    {{randomMovieQuery}}
  </div>
</template>

<script setup lang="ts">
const { data: randomMovieQuery, suspense: randomMovieSuspense } = useQuery({
  queryKey: ['randomMovie'],
  queryFn: () => useNuxtApp().$apiFetch('movie/random')
})

const top10MovieQuery = useQuery({
  queryKey: ['top10movie'],
  queryFn: () => useNuxtApp().$apiFetch('movie/top10')
})

onServerPrefetch(async () => {
  await randomMovieSuspense,
  await top10MovieQuery.suspense()
})

</script>

<style scoped lang="scss">
.home {
  &__wrapper {
    position: relative;
  }
}
</style>