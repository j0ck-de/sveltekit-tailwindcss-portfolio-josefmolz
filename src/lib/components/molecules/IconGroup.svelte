<script>
	import Icon from '../atoms/Icon.svelte';

	export let src;
	export let name;
	export let url;
</script>

<a href={url} class="icon-group">
	<Icon icon={src} />
	<span class="icon-group__name">{name}</span>
</a>

<style>
	.icon-group {
		@apply flex cursor-pointer flex-col items-center gap-y-extra-small;
	}

	.icon-group__name {
		@apply text-icon-text;
		@apply md:text-base;
	}
</style>
