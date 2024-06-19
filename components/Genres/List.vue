<template>
  <ul v-if="!isLoading && genres" class="genres__list">
    <li v-for="(genre, index) in genres" :key="index">
      <NuxtLink class="genres__list-link" :to="{name: 'genre', params: { genre }}">
        {{ genre }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>

const { genres, isLoading, isPending } = useGenres()

definePageMeta({
    name: 'genres'
})

</script>

<style scoped lang="scss">
.genres__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 40px;

  &-link {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bg_color;
    border-radius: 24px;
    box-shadow: 0px 0px 80px 0px #FFFFFF54;
    transition: transform .2s ease;
    cursor: pointer;
    color: $font_color;
    text-decoration: none;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>