<script>
	import Heading from '../atoms/Heading.svelte';
	import Image from '../atoms/Image.svelte';
	import SocialsBand from './SocialsBand.svelte';
</script>

<div class="about-social">
	<div class="about-social__heading">
		<Heading size="big" text="Jock" textColor="brand" />
	</div>

	<SocialsBand />
	<div class="about-social__image">
		<Image src="astro-1.png" />
	</div>
</div>

<style>
	.about-social {
		@apply flex flex-col;
	}
	.about-social__heading {
		@apply py-medium;
	}
	.about-social__image {
		@apply mx-auto flex items-center justify-center;
	}
</style>
