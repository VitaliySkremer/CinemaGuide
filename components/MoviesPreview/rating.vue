<template>
	<div class="rating">
		{{ rating }}
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ rating: number }>();
</script>

<style scoped lang="scss">
.rating {
	background-color: $font_color;
	color: $purple;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 24px;
	border-radius: 50px;
}
</style>
