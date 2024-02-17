/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'blue1': '#0488DF',
			'black': '#000000',
			'grayBg': '#F1F3F0',
			'grayTexts': '#A1A0A8',
			'white':'#fff'
		  },
		extend: {
			
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
