<template>
  <nav class="navigation">
    <NavigationLink
      v-for="route in routes"
      :key="route.name"
      :name="route.name"
      :to="route.to"
    />
  </nav>
</template>

<script lang="ts" setup>
const routes = [
  {
    name: 'Главная',
    to: '/'
  },
  {
    name: 'Жанры',
    to: '/genres'
  }
];
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  gap: 40px;
  align-items: center;
}
</style>
