/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Tema estrictamente blanco y negro
				white: "#FFFFFF",
				black: "#000000",
				// Escala de grises para diferenciación sutil
				gray: {
					100: "#F7F7F7",
					200: "#E5E5E5",
					300: "#D4D4D4",
					400: "#A3A3A3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
				},
			},
			maxWidth: {
				"3xl": "48rem",
				"5xl": "64rem",
			},
		},
	},
	plugins: [],
};
