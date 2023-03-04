<script>
	import Heading from '../atoms/Heading.svelte';
	import Image from '../atoms/Image.svelte';
	import Video from '../atoms/Video.svelte';
	import List from '../molecules/List.svelte';

	const aboutDescriptionList = [
		{
			title: 'Frontend-Entwickler',
			text: 'Leidenschaftlicher Frontend-Entwickler mit Fokus auf UI-Effekte und der Erstellung dynamischer Benutzererfahrungen.'
		},
		{
			title: 'Gut organisierter Mensch',
			text: 'Effektiver und gut organisierter Webentwickler mit fundiertem Wissen in BEM, ATOMIC Design, 7.1 Architecture und Best Practices.'
		},
		{
			title: 'Problemlöser',
			text: 'Kompetenter Problemlöser mit umfassendem Verständnis von Code und der Fähigkeit, ihn zu optimieren und zu verbessern.'
		},
		{
			title: 'Privat',
			text: 'In der Freizeit ein aktiver und enthusiastischer Outdoor-Sportler, Musiker und Familienmensch.'
		}
	];
</script>

<div class="about-description" id="about">
	<div class="about-description__heading">
		<Heading size="big" text="Ich" uppercase />
		<Heading size="big" text="bin" uppercase />
	</div>
	<div class="about-description__text">
		<List items={aboutDescriptionList} />
	</div>
	<div class="about-description__image">
		<Image src="/img1.png" />
	</div>
	<div class="about-description__video">
		<Video />
	</div>
</div>

<style>
	.about-description {
		@apply flex flex-col;
		@apply xl:grid xl:grid-cols-2;
	}

	.about-description__heading {
		@apply my-medium flex flex-row flex-wrap justify-center;
		@apply xl:col-span-1 xl:row-start-1;
	}

	.about-description__image {
		@apply hidden;
		@apply xl:col-start-2 xl:row-span-2 xl:block xl:h-full;
	}

	.about-description__video {
		@apply block;
		@apply aspect-video xl:col-span-2;
	}

	.about-description__text {
		@apply mb-small block px-small;
		@apply xl:col-span-1 xl:row-start-2;
	}
</style>
