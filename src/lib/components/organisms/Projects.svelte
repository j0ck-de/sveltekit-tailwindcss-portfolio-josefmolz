<script>
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Project from '$lib/components/molecules/Project.svelte';
</script>

<section class="projects " id="projects">
	<div class="projects__container projects__container--primary">
		<Heading size="medium" text="Coding" half textColor="primary" bgColor="teritary" />

		<div class="projects__list">
			<Project id={'0'} coding />
			<Project id={'1'} coding />
		</div>
	</div>
	<div class="projects__container projects__container--secondary">
		<Heading size="medium" text="UI / UX Design" half textColor="secondary" bgColor="primary" />

		<div class="projects__list">
			<Project id={'0'} design />
			<Project id={'1'} design />
		</div>
	</div>
</section>

<style>
	.projects {
		@apply flex flex-col;
		@apply xl:flex-row;
	}
	.projects__container {
		@apply flex flex-col gap-medium bg-secondary py-medium text-center;
	}
	.projects__container--primary {
		@apply bg-secondary;
	}
	.projects__container--secondary {
		@apply bg-brand;
	}

	.projects__list {
		@apply mx-4 grid gap-4;
		@apply md:flex;
		@apply lg:mx-16;
		@apply xl:flex-col;
		@apply 2xl:flex-row;
	}
</style>
