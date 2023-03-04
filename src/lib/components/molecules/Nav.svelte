<script>
	import Burger from '$lib/components/atoms/Burger.svelte';
	export let links;
</script>

<nav class="nav">
	<ul class="nav__list">
		{#each links as link}
			<li class="nav__list-item">
				<a href={link.id}>{link.name}</a>
			</li>
		{/each}
	</ul>
	<Burger {links} />
</nav>

<style>
	.nav {
		@apply flex h-full justify-end bg-primary px-4 shadow-sm;
	}

	.nav__list {
		@apply hidden w-full items-center justify-end bg-primary text-xl font-bold  text-secondary;
		@apply sm:flex;
	}
	.nav__list-item {
		@apply px-4 py-2 hover:text-brand;
	}
</style>
