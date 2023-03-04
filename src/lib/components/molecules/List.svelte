<script>
	import ListItem from '../atoms/ListItem.svelte';

	export let items;
</script>

<ul class="list">
	{#each items as item}
		<ListItem title={item.title} text={item.text} />
	{/each}
</ul>

<style>
	.list {
		@apply flex flex-col items-start gap-y-extra-small text-left;
	}
</style>
