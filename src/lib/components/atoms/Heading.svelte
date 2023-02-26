<script>
	export let text;
	export let uppercase;
	export let size = 'big' || 'medium' || 'small' || 'extra-small';
</script>

<span
	class={uppercase ? 'uppercase' : ''}
	class:heading-big={size === 'big'}
	class:heading-medium={size === 'medium'}
	class:heading-small={size === 'small'}
	class:heading-extra-small={size === 'extra-small'}
>
	{text}
</span>

<style>
	.heading-big {
		@apply block h-heading-big font-secondary text-heading-big font-heading-big leading-heading-big;
	}

	.heading-medium {
		@apply inline-block  h-heading-medium px-1  font-primary text-heading-medium font-heading-medium  leading-heading-medium tracking-heading-medium;
	}
	.heading-small {
		@apply block font-primary text-heading-small font-heading-small uppercase italic leading-heading-small tracking-heading-small;
	}
	.heading-extra-small {
		@apply block font-primary text-heading-extra-small font-heading-extra-small uppercase italic leading-heading-small tracking-heading-small;
	}
</style>
