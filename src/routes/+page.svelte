<script>
	import Quote from '../lib/components/molecules/Quote.svelte';
	import Hero from '../lib/components/organisms/Hero.svelte';
	import About from '../lib/components/organisms/About.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
</script>

<Hero />
<div class="my-small lg:my-medium">
	<Quote id="0" />
</div>
<About />
<div class="my-small lg:my-medium">
	<Quote id="1" />
</div>
<Projects />
