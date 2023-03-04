<script>
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import IconGroup from './IconGroup.svelte';

	const skills = [
		{
			title: 'Coding',
			text: 'I love to code. I have been coding for 5 years now. I have worked with many different languages',
			icons: {
				advanced: [
					{
						name: 'Html',
						src: 'html5.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Css',
						src: 'css3.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Sass',
						src: 'sass.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Tailwind',
						src: 'tailwindcss.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'JavaScript',
						src: 'javascript.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Svelte',
						src: 'svelte.svg',
						url: 'https://www.google.de'
					}
				],
				basic: [
					{
						name: 'Vue',
						src: 'vuedotjs.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'React',
						src: 'react.svg',
						url: 'https://www.google.de'
					},

					{
						name: 'Node',
						src: 'nodedotjs.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Npm',
						src: 'npm.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Git',
						src: 'git.svg',
						url: 'https://www.google.de'
					}
				]
			}
		},
		{
			title: 'UX / UI Design',
			text: 'I love to code. I have been coding for 5 years now. I have worked with many different language',
			icons: {
				advanced: [
					{
						name: 'Figma',
						src: 'figma.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Photoshop',
						src: 'adobephotoshop.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'InDesign',
						src: 'adobeindesign.svg',
						url: 'https://www.google.de'
					}
				],
				basic: [
					{
						name: 'XD',
						src: 'adobexd.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Illustrator',
						src: 'adobeillustrator.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Photo',
						src: 'affinityphoto.svg',
						url: 'https://www.google.de'
					},
					{
						name: 'Designer',
						src: 'affinitydesigner.svg',
						url: 'https://www.google.de'
					}
				]
			}
		},
		{
			title: 'Video Editing',
			text: 'I love to code. I have been coding for 5 years now. I have worked with many different language',
			icons: {
				advanced: [
					{
						name: 'Premiere',
						src: 'adobepremierepro.svg',
						url: 'https://www.google.de'
					}
				],
				basic: [
					{
						name: 'After Effects',
						src: 'adobeaftereffects.svg',
						url: 'https://www.google.de'
					}
				]
			}
		}
	];
</script>

{#each skills as skill}
	<div class="card">
		<div class="card__header">
			<Heading size="small" text={skill.title} />
			<Paragraph>
				{skill.text}
			</Paragraph>
		</div>
		<div class="card__skills-container">
			<div>
				<hr class="card__divider" />
				<Heading size="extra-small" text="Advanced" />
				<div class="card__icons">
					{#each skill.icons.advanced as icon}
						<div class="card__icon">
							<IconGroup url={icon.url} src={icon.src} name={icon.name} />
						</div>
					{/each}
				</div>
			</div>

			<div>
				<hr class="card__divider" />
				<Heading size="extra-small" text="Basic" />
				<div class="card__icons">
					{#each skill.icons.basic as icon}
						<div class="card__icon">
							<IconGroup url={icon.url} src={icon.src} name={icon.name} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/each}

<style>
	.card {
		@apply flex flex-1 flex-col rounded-lg bg-brand py-small text-secondary shadow-sm;
	}

	.card__header {
		@apply flex flex-col gap-y-small;
	}

	.card__skills-container {
		@apply flex flex-col justify-center gap-x-small;
		@apply md:flex-row;
		@apply lg:flex-col;
	}

	.card__skills-container > div {
		@apply flex-1;
	}

	.card__icons {
		@apply mt-small flex flex-row flex-wrap justify-center gap-y-small gap-x-small px-small;
	}

	.card__icon {
		@apply flex flex-col items-center;
	}

	.card__divider {
		@apply mx-auto my-small w-4/5 border-0 border-b-2 border-gray-900;
	}
</style>
