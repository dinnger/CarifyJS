/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./components/**/*.{vue,js}",
		"./layouts/**/*.{vue,js}",
		"./pages/**/*.{vue,js}",
	],
	theme: {
		extend: {
			colors: {
				"doc360-purple": "#7a2dd8",
				"doc360-light-purple": "#9b4fe9",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark"],
	},
};
