<script>
	import Image from '../atoms/Image.svelte';
	import HeroHeading from '../molecules/HeroHeading.svelte';
</script>

<div class="hero">
	<HeroHeading />
	<Image src="astro-1.png" />
</div>

<style>
	.hero {
		@apply flex h-screen flex-col bg-secondary;
	}
</style>
