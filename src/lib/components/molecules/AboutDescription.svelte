<script>
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import Video from '../atoms/Video.svelte';
</script>

<div class="about-description">
	<div class="about-description__heading">
		<Heading size="big" text="Ich" uppercase />
		<Heading size="big" text="bin" uppercase />
	</div>
	<div class="about-description__text">
		<Paragraph>
			... ein Marketingspezialist, Tech-Nerd und Front-End-Entwickler aus Niederbayern. Ich habe
			eine große Leidenschaft für UI-Effekte und die Erstellung intuitiver, dynamischer
			Benutzererfahrungen. Gut organisierter Mensch und Problemlöser mit viel Liebe zum Detail. Fan
			von Outdoor-Aktivitäten, Sport, und Gitarre. Familienmensch. Interesse am gesamten
			Frontend-Spektrum und an der Arbeit an anspruchsvollen Projekten mit positiven Menschen.
		</Paragraph>
	</div>
	<div class="about-description__video">
		<Video />
	</div>
</div>

<style>
	.about-description {
		@apply flex flex-col gap-y-small py-medium;
	}

	.about-description__heading {
		@apply flex flex-row flex-wrap justify-center;
	}

	.about-description__video {
		@apply block;
	}

	.about-description__text {
		@apply block;
	}
</style>
