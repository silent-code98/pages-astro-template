/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1B3764',
				secondary: '#FFCA42',
				'light-blue': '#B4C7E7'
			},
			container: {
				center: true
			},
			boxShadow: {
				light: '0px 35px 25px 0px rgba(4, 11, 20, 0.04)'
			}
		},
		fontFamily: {
			inter: ['Inter', 'ui-sans-serif', 'system-ui'],
			cardo: ['Cardo', 'ui-serif', 'Georgia']
		}
	},
	plugins: []
}
