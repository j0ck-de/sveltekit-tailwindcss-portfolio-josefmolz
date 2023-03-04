<script>
	import { onMount, onDestroy } from 'svelte';
	export let images = null;

	let [currentImage, timeinSeconds, timeoutId] = [0, 10, null];

	const nextImage = () => {
		currentImage = (currentImage + 1) % images.length;
		timeoutId = setTimeout(nextImage, timeinSeconds * 1000);
	};

	onMount(() => {
		timeoutId = setTimeout(() => {
			currentImage = (currentImage + 1) % images.length;
			timeoutId = setTimeout(nextImage, timeinSeconds * 1000);
		}, timeinSeconds * 1000);
	});

	onDestroy(() => clearTimeout(timeoutId));
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="image-slider"
	style="background-image: url({images[currentImage].src})"
	on:click={nextImage}
/>

<style>
	.image-slider {
		@apply h-full w-full bg-gray-900 bg-cover bg-center text-white;
		@apply xl:flex-1;
	}
</style>
