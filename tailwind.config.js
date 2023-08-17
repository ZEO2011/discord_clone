/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/*.tsx",
		"./src/components/*.tsx",
		"./src/pages/**/*.tsx",
		"./src/pages/**/**/*.tsx",
	],
	theme: {
		extend: {
			colors: {
				"main-blue": "#5763EC",
				"main-black": "#35363C",
				"main-green": "#23A559",
				"main-white-green": "#26bd64",
			},
			transitionDuration: {
				main: "200ms",
			},
		},
	},
	plugins: [],
}
