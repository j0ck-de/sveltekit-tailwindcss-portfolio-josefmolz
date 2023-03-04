<script>
	import Nav from '$lib/components/molecules/Nav.svelte';
	import Footer from '$lib/components/molecules/Footer.svelte';
	import '../app.css';
	import FixedScrollOverlay from '$lib/components/atoms/FixedScrollOverlay.svelte';

	const links = [
		{ name: 'Home', url: '/', id: '#home' },
		{ name: 'Über mich', url: '/', id: '#about' },
		{ name: 'Tech I Use', url: '/', id: '#tech' },
		{ name: 'Projekte', url: '/', id: '#projects' }
	];
</script>

<FixedScrollOverlay>
	<div class="layout">
		<div class="layout__nav">
			<Nav {links} />
		</div>

		<slot />
		<div class="layout__footer">
			<Footer />
		</div>
	</div>
</FixedScrollOverlay>

<style>
	.layout {
		@apply flex flex-col;
		@apply xl:mx-12 xl:my-[5vh];

		@apply 3xl:mx-44;
	}
	.layout__nav {
		@apply fixed bottom-0 z-50  h-header w-full;
		@apply sm:static;
	}
	.layout__footer {
		@apply mb-[5vh];
		@apply sm:mb-0;
	}
</style>
