<script>
	import Paragraph from './Paragraph.svelte';

	export let title;
	export let text;
</script>

<li class="list-item">
	<span class="list-item__title">{title}</span>
	<Paragraph class="list-item__text">{text}</Paragraph>
</li>

<style>
	.list-item {
		@apply flex w-full flex-col gap-y-extra-small bg-brand p-small;
	}

	.list-item__title {
		@apply w-fit bg-primary py-extra-small px-extra-small pr-large font-bold uppercase leading-heading-small text-secondary;
	}

	.list-item__text {
		@apply block px-extra-small;
	}
</style>
