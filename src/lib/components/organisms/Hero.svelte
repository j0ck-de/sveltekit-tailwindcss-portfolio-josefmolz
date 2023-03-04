<script>
	import BackgroundImage from '../atoms/BackgroundImage.svelte';
	import ImageSlider from '../atoms/ImageSlider.svelte';
	import HeroHeading from '../molecules/HeroHeading.svelte';

	let images = [
		{ src: '/astro-1.png', alt: 'Image 1' },
		{ src: '/astro-2.png', alt: 'Image 1' },
		{ src: '/astro-3.png', alt: 'Image 2' },
		{ src: '/astro-4.png', alt: 'Image 3' },
		{ src: '/astro-5.png', alt: 'Image 3' },
		{ src: '/astro-6.png', alt: 'Image 3' },
		{ src: '/astro-7.png', alt: 'Image 3' },
		{ src: '/astro-8.png', alt: 'Image 3' }
	];
</script>

<div class="hero">
	<HeroHeading />
	<ImageSlider {images} />
</div>

<style>
	.hero {
		@apply flex h-hero flex-col bg-secondary;
		@apply xl:h-hero-xl xl:flex-row;
	}
</style>
