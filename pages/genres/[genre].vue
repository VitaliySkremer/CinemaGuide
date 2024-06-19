<template>
	<div class="container genre__page">
		<NuxtLink class="title genre__page-title" :to="{ name: 'genres' }">
			<Arrow />
			<p>
				{{ route.params.genre }}
			</p>
		</NuxtLink>
    <MoviesByGenreList :genre="(route.params.genre as string)"/>
	</div>
</template>

<script lang="ts" setup>
import Arrow from '~/assets/img/Arrow-left.svg';

const route = useRoute();

definePageMeta({
	name: 'genre',
});
</script>

<style scoped lang="scss">
.genre__page {
	padding: 164px 0 100px 0;

	&-title {
		color: $font_color;
		text-decoration: none;
		font-weight: bold;
		display: flex;
		align-items: center;
		margin-bottom: 64px;

		& svg {
			margin-right: 20px;
			transition: transform 0.2s ease;
		}

		&:hover svg {
			transform: translateX(-10px);
		}
	}
}
</style>
