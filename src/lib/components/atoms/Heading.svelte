<script>
	export let text = 'Sample Text';
	export let uppercase = null;
	export let full = null;
	export let half = null;
	export let bgColor = null;
	export let textColor = null;
	export let size = null;
</script>

{#if size === 'big'}
	<span
		class={uppercase ? 'uppercase' : ''}
		class:heading-big={size === 'big'}
		class:heading-text--primary={textColor === 'primary'}
		class:heading-text--secondary={textColor === 'secondary'}
		class:heading-text--teritary={textColor === 'brand'}
		class:heading-text--brand={textColor === 'brand'}
	>
		{text}
	</span>
{:else if size === 'medium'}
	<div class:heading-medium={size === 'medium'}>
		<span
			class="heading-background"
			class:heading-background--primary={bgColor === 'primary'}
			class:heading-background--secondary={bgColor === 'secondary'}
			class:heading-background--teritary={bgColor === 'teritary'}
			class:heading-background--brand={bgColor === 'brand'}
			class:heading-background--full={full}
			class:heading-background--half={half}
		/>

		<span
			class="heading-text"
			class:heading-text--primary={textColor === 'primary'}
			class:heading-text--secondary={textColor === 'secondary'}
			class:heading-text--teritary={textColor === 'teritary'}
			class:heading-text--brand={textColor === 'brand'}
		>
			{text}
		</span>
	</div>
{:else if size === 'small'}
	<span class:heading-small={size === 'small'}>{text}</span>
{:else if size === 'extra-small'}
	<span class:heading-extra-small={size === 'extra-small'}>{text}</span>
{/if}

<style>
	.heading-big {
		@apply block h-heading-big font-secondary text-heading-big font-text-big leading-heading-big;
	}
	.heading-medium {
		@apply relative z-0 mx-auto inline-block  w-fit px-1  font-primary text-heading-medium font-text-medium leading-heading-medium tracking-heading-medium;
	}
	.heading-small {
		@apply block font-primary text-heading-small font-text-small uppercase  leading-heading-small tracking-heading-small;
	}
	.heading-extra-small {
		@apply block font-primary text-heading-extra-small font-text-extra-small uppercase italic leading-heading-small tracking-heading-small;
	}
	.heading-background {
		@apply absolute;
	}
	.heading-background--full {
		@apply -inset-x-[0.1rem] h-full;
	}
	.heading-background--half {
		@apply -inset-[0.1rem] top-auto h-1/2;
	}
	.heading-background--primary {
		@apply bg-primary;
	}
	.heading-background--secondary {
		@apply bg-secondary;
	}
	.heading-background--teritary {
		@apply bg-teritary;
	}
	.heading-background--brand {
		@apply bg-brand;
	}
	.heading-text {
		@apply relative;
	}
	.heading-text--primary {
		@apply text-primary;
	}
	.heading-text--secondary {
		@apply text-secondary;
	}
	.heading-text--teritary {
		@apply text-teritary;
	}
	.heading-text--brand {
		@apply text-brand;
	}
</style>
