<script>
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
</script>

<div class="hero-heading">
	<Heading size="big" text="Hi" uppercase />
	<div>
		<Heading size="medium" text="Ich" />
		<Heading size="medium" text="bin" />
		<Heading size="medium" text="Jock" />
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
		@apply my-medium flex flex-col gap-y-extra-small text-center;
	}

	.hero-heading__text {
		@apply mt-extra-small;
	}
</style>
