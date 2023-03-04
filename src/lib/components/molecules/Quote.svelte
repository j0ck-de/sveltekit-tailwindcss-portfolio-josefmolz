<script>
	export let id = 0;
	const quotes = [
		{
			text: 'Alles kann kreativ sein – es ist eine Qualität, die dein Handeln färbt. Handeln selbst ist weder kreativ noch unkreativ. Du kannst auf unkreative Weise malen. Du kannst auf unkreative Weise singen. Du kannst auf kreative Weise einen Fußboden putzen, du kannst auf kreative Weise kochen. Kreativität ist die Qualität, die du deiner Handlung gibst. Sie ist eine Einstellung, eine innere Haltung, wie du die Dinge betrachtest.',
			author: 'Osho'
		},
		{
			text: 'Das, was den großen Maler ausmacht, das ist der Charakter, den er allem verleiht, was er berührt, der Geistesfunke, die Bewegung, die Leidenschaft, denn es gibt eine Klarheit auch in der Leidenschaft.',
			author: 'Paul Cézanne'
		}
	];
</script>

<div class="quote">
	<div class="quote__background">
		<blockquote class="quote__text">{quotes[id].text}</blockquote>
		<div class="quote__text-container">
			<span class="quote__lines" />
			<span class="quote__author">{quotes[id].author}</span>
			<span class="quote__lines" />
		</div>
	</div>
</div>

<style>
	.quote {
		@apply mx-auto;
	}

	.quote__background {
		@apply flex w-full flex-col justify-center bg-teritary px-6 py-8 text-center font-thin italic;
		@apply lg:mx-auto lg:w-3/4 lg:py-16 lg:px-28;
	}

	.quote__text-container {
		@apply mt-4 flex flex-row items-center justify-center;
		@apply xl:mt-8;
	}
	.quote__text {
		@apply text-sm;
		@apply xl:text-lg;
	}

	.quote__author {
		@apply mx-4 text-lg font-light leading-none;
	}

	.quote__lines {
		@apply h-1 w-full bg-brand;
	}
</style>
