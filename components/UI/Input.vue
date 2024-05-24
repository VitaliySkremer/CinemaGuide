<template>
  <input
    class="input"
    :class="[`input--${color}`]"
    :placeholder="placeholder"
    :style="{ backgroundImage: `url(${icon})` }"
    type="text"
    v-model="model"
  />
</template>

<script lang="ts" setup>
type styleType = 'default' | 'white';

interface IInput {
  placeholder: string;
  color?: styleType;
  icon?: string;
}

const props = withDefaults(defineProps<IInput>(), {
  placeholder: '',
  color: 'default',
  icon: '/img/Search.svg'
});

const model = defineModel();
</script>

<style scoped lang="scss">
.input {
  border: none;
  padding: 12px 16px 12px 52px;
  border-radius: 8px;
  font-size: 1.125rem;
  line-height: 1.5rem;
  outline: none;
  background-size: 24px 24px;
  background-position: 16px center;
  background-repeat: no-repeat;

  &--white {
    background-color: white;
    color: $bg_secondary;
    &::placeholder {
      color: $content_placeholder;
    }
  }

  &--default {
    background-color: $bg_secondary;
    color: $font_color;
    &::placeholder {
      color: $color_content_disabled;
    }
  }
}
</style>
