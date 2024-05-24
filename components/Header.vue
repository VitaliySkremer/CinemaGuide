<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <Logo />
        <Navigation />
        <UIInput
          v-model="search"
          placeholder="Поиск"
          class="header__search"
        />
        <UISimpleButton>
          Войти
        </UISimpleButton>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const search = ref('');
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: $header_bg_color;

  &__content {
    padding: 24px 0;
    display: flex;
    align-items: center;
    gap: 80px;
  }

  &__search {
    flex: 1 1 auto;
  }
}
</style>
