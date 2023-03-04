<script>
	import Paragraph from '../atoms/Paragraph.svelte';

	export let id;
	export let coding = false;
	export let design = false;
	let data;

	const projects = {
		coding: [
			{
				id: 1,
				title: 'Coding',
				description:
					'I am a full-stack developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, PHP, and WordPress. I am currently learning Svelte and React.',
				img: '/img1.png',
				tags: ['HTML']
			},
			{
				id: 2,
				title: 'UX/UI Design',
				description:
					'I am a full-stack developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, PHP, and WordPress. I am currently learning Svelte and React.',
				img: '/img2.png',
				tags: ['HTML', 'CSS', 'JavaScript']
			}
		],
		design: [
			{
				id: 1,
				title: 'UX UI Design',
				description:
					'I am a full-stack developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, PHP, and WordPress. I am currently learning Svelte and React.',
				img: '/img3.png',
				tags: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'Svelte']
			},
			{
				id: 2,
				title: 'Sepp',
				description:
					'I am a full-stack developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, PHP, and WordPress. I am currently learning Svelte and React.',
				img: '/img4.png',
				tags: ['HTML', 'CSS', 'JavaScript']
			}
		]
	};

	if (coding) data = projects.coding;
	if (design) data = projects.design;
</script>

<!-- CARD -->
<div class="project">
	<img class="project__image" src={data[id].img} alt="" />
	<h4 class="project__heading">{data[id].title}</h4>
	<Paragraph>
		{data[id].description}
	</Paragraph>
	<ul class="project__tag-list">
		{#each data[id].tags as tag}
			<li class="project__tag-item">{tag}</li>
		{/each}
	</ul>
</div>

<style>
	.project {
		@apply rounded-lg p-4 text-center font-extralight shadow-sm;
	}
	.project__image {
		@apply h-40 w-full object-cover;
	}
	.project__heading {
		@apply my-2 text-lg font-semibold;
	}
	.project__tag-list {
		@apply mt-4 flex flex-row flex-wrap items-center justify-center gap-1 md:items-start md:justify-start;
	}
	.project__tag-item {
		@apply mx-0.5 rounded bg-primary px-2 py-1 text-center text-white;
	}
</style>
