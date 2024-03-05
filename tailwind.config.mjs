/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'vatsca1': '#43c6e7',
				'vatsca2': '#1a475f',
				'vatsca3': '#011328',
				'snow': '#dfebeb',
			}
		}
	},
	plugins: [],
}
