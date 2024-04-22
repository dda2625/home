/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'vatsca1': '#43c6e7',
				'vatsca2': '#1a475f',
				'vatsca3': '#011328',
				'snow': '#dfebeb',
				'success': '#41826e',
				'danger': '#b63f3f'
			}
		}
	},
	darkMode: "class",
  	plugins: [nextui(),require("daisyui")]
}
