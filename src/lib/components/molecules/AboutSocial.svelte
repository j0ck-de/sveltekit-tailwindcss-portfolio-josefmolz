<script>
	import Heading from '../atoms/Heading.svelte';
	import Image from '../atoms/Image.svelte';
	import SocialsBand from './SocialsBand.svelte';
</script>

<div class="about-social">
	<Heading size="big" text="Jock" />
	<SocialsBand />
	<Image src="astro-1.png" />
</div>

<style>
	.about-social {
		@apply flex flex-col gap-y-small  py-medium;
	}
</style>
