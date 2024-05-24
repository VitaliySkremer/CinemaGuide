<template>
  <NuxtLink class="link" :to="to">
    {{ name }}
  </NuxtLink>
</template>

<script lang="ts" setup>

interface ILink { 
  name: string;
  to: string;
}

defineProps<ILink>()

</script>

<style scoped lang="scss">
.link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: $font_color;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: $purple;
    transform: translateX(calc(-100% - 1px));
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: translateX(0);
  }
}

.router-link-active::after {
  transform: translateX(0);
}
</style>