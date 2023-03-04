<script>
	import { onMount } from 'svelte';

	export let links;

	// Modal state
	let isOpen = false;

	// Toggle modal
	function toggleModal() {
		isOpen = !isOpen;
		// Prevent scrolling when modal is open
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	// Close modal on window resize
	onMount(() => {
		window.addEventListener('resize', () => {
			// Close modal if window is resized to desktop size
			if (window.innerWidth >= 576 && isOpen) {
				isOpen = false;
			}
		});
	});
</script>

<!-- BURGER MENU -->
<div class="burger">
	<div class="burger__text group">
		<span>Navigation</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="burger__button-container group" on:click={toggleModal}>
			<div class="{isOpen ? 'fixed' : ''} ">
				<span
					class="block h-1 w-10 origin-center rounded-full  transition-all ease-in-out  {isOpen
						? 'translate-y-1.5 rotate-45 bg-primary group-hover:w-6 group-hover:bg-brand '
						: 'bg-secondary'}"
				/>
				<span
					class="block h-1 origin-center rounded-full bg-brand transition-all ease-in-out  {isOpen
						? '-translate-y-1.5 -rotate-45 group-hover:bg-primary'
						: 'w-6 group-hover:w-10'}"
				/>
			</div>
		</div>
	</div>
</div>
<!-- MODAL NAVIGATION -->
{#if isOpen}
	<div class="burger__modal-container">
		<ul class="burger__modal-nav">
			{#each links as link}
				<li>
					<a on:click={toggleModal} href={link.id} class="burger__modal-nav-link">{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	.burger {
		@apply relative z-50 flex items-center justify-center;
		@apply sm:hidden;
	}
	.burger__text {
		@apply flex flex-row items-center space-x-4 font-black uppercase text-secondary/10;
	}

	.burger__button-container {
		@apply z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg;
	}
	.burger__button-container > div {
		@apply space-y-2;
	}

	.burger__modal-container {
		@apply fixed top-0 left-0 z-40 flex  h-full w-full items-center justify-center overflow-hidden bg-secondary p-6;
	}
	.burger__modal-nav {
		@apply flex select-none flex-col items-center space-y-4 text-4xl font-bold uppercase;
	}
	.burger__modal-nav-link {
		@apply block p-2 text-brand hover:text-primary;
	}
</style>
