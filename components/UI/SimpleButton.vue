<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: $font_color;
  font-size: 24px;
  line-height: 32px;
  transition: color .2s ease;

  &:hover {
    color: $purple;
  }
}
</style>