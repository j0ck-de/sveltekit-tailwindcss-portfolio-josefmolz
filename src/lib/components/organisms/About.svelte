<script>
	import AboutDescription from '../molecules/AboutDescription.svelte';
	import AboutSocial from '../molecules/AboutSocial.svelte';
	import AboutTech from '../molecules/AboutTech.svelte';
</script>

<div class="about">
	<AboutDescription />
	<AboutTech />
	<AboutSocial />
</div>

<style>
	.about {
		@apply bg-primary text-center text-secondary;
	}
</style>
