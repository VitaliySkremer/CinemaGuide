<template>
	<div class="container home__page">
		<RandomMovie />
		<MoviesPreview />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.home__page {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

</style>