<script>
	import IconGroup from './IconGroup.svelte';

	const socials = [
		{
			name: 'Github',
			src: 'github.svg',
			url: 'https://www.github.com/jockgeerts'
		},
		{
			name: 'LinkedIn',
			src: 'linkedin.svg',
			url: 'https://www.linkedin.com/in/jock-geerts-5b1b3b1b3/'
		},
		{
			name: 'Xing',
			src: 'xing.svg',
			url: 'https://www.xing.com/profile/Jock_Geerts/cv'
		}
	];
</script>

<div class="socials-band">
	{#each socials as social}
		<div class="socials-band__item">
			<IconGroup url={social.url} name={social.name} src={social.src} />
		</div>
	{/each}
</div>

<style>
	.socials-band {
		@apply flex flex-row justify-center gap-x-small bg-secondary text-primary;
	}

	.socials-band__item {
		@apply flex flex-col items-center justify-center gap-y-extra-small py-extra-small;
	}
</style>
