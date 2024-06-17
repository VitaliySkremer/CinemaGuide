<template>
	<button class="button" :class="[`button-${props.colorStyle}`, `button-form-${props.form}`]">
		<slot />
	</button>
</template>

<script lang="ts" setup>
type colorStyle = 'default' | 'secondary';
type form = 'default' | 'round';
interface IButtonProps {
	colorStyle?: colorStyle;
  form?: form;
}

const props = withDefaults(defineProps<IButtonProps>(), {
	colorStyle: 'default',
  form: 'default',
});
</script>

<style scoped lang="scss">
.button {
	border-radius: 50px;
	border: none;
	cursor: pointer;
	color: $font_color;
	font-size: 24px;
	line-height: 32px;
	transition: color 0.2s ease;
  height: 64px;
	padding: 16px 48px;

	&-default {
		background-color: $brand_active;
	}

	&-secondary {
		background-color: $bg_secondary;
	}

  &-form-round {
    padding: 16px 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
