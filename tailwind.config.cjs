/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#353839',
				secondary: '#fff',
				teritary: '#eee',
				brand: '#e94e4d'
			},
			fontFamily: {
				primary: ['Inter', 'sans-serif'],
				secondary: ['Skranji', 'cursive']
			},
			height: {
				header: '5vh',
				hero: 'calc(100vh - theme("height.header"))',
				// hero: 'calc(100vh - 5vh)',
				'heading-big': '7.2rem',
				'heading-medium': '2.6rem',
				'heading-small': '0.9rem'
			},
			fontSize: {
				'heading-big': '9rem',
				'heading-medium': '3.5rem',
				'heading-extra-small': '1rem',
				'heading-small': '1.25rem',
				'icon-big': '2.5rem',
				'icon-text': '0.75rem'
			},
			lineHeight: {
				'heading-big': '8.5rem',
				'heading-medium': '2.8rem',
				'heading-small': '1rem'
			},
			spacing: {
				'primary-mobile': '2rem',
				'extra-small': '0.5rem',
				small: '1.75rem',
				medium: '3.5rem'
			},
			letterSpacing: {
				'heading-medium': '-0.15rem',
				'heading-small': '-0.025rem'
			},
			fontWeight: {
				'heading-big': '900',
				'heading-medium': '900',
				'heading-small': '700',
				'heading-extra-small': '500'
			},
			backgroundImage: {
				hero: "url('/astro-1.png')"
			}
		}
	},
	plugins: []
};
