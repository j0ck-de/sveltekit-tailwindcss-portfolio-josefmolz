<script>
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
</script>

<div class="hero-heading">
	<Heading textColor="primary" size="big" text="Hi" uppercase />
	<div>
		<Heading full bgColor="teritary" textColor="primary" size="medium" text="Ich" />
		<Heading full bgColor="brand" textColor="secondary" size="medium" text="bin" />
		<Heading full bgColor="primary" textColor="brand" size="medium" text="Jock" />
	</div>
	<div>
		<Heading size="extra-small" text="Front-End Webentwickler" />
		<Heading size="extra-small" text="UX / UI Designer" />
		<Heading size="extra-small" text="Human" />
	</div>
	<div class="hero-heading__text">
		<Paragraph>
			... Autodidakt in sämtlichen Lebenslagen, kreativer Problemlöser, strukturierter Denker und
			ein herzlicher Mensch, gepaart mit einem bewussten Willen.
		</Paragraph>
	</div>
</div>

<style>
	.hero-heading {
		@apply my-medium flex shrink flex-col gap-y-extra-small text-center;
		@apply xl:flex-1;
	}

	.hero-heading__text {
		@apply mt-extra-small;
		@apply xl:px-large;
	}
</style>
