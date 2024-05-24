<template>
  <div class="main__layout">
    <Header />
    <main class="main__layout-main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.main__layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-main {
    flex: 1 1 auto;
  }
}
</style>
