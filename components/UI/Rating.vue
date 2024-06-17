<template>
  <div class="rating">
    <Star />
    <p>
      {{ rating }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import Star from '~/public/img/star.svg'

defineProps<{rating: number}>()

</script>

<style lang="scss" scoped>
.rating {
  border-radius: 16px;
  padding: 4px 12px 4px 12px;
  background-color: $green;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
}
</style>