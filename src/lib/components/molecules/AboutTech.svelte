<script>
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import SkillsCard from './SkillsCard.svelte';
</script>

<div class="about-tech">
	<Heading size="medium" text="Tech I Use" />
	<Paragraph
		>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit veniam reprehenderit
		voluptatum similique! Voluptatem maxime alias praesentium repellat fugit?</Paragraph
	>
	<div class="about-tech__skills-card">
		<SkillsCard />
	</div>
</div>

<style>
	.about-tech {
		@apply flex flex-col gap-small py-medium;
	}

	.about-tech__skills-card {
		@apply flex flex-col gap-small px-small;
		@apply lg:flex-row;
	}
</style>
