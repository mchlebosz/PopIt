/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				title: ['"Rammetto One"', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: '#ffbf69',
				secondary: '#cbf3f0'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'translate-z': (value) => ({
						'--tw-translate-z': value,
						transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`
					}) // this is actual CSS
				},
				{ values: theme('translate'), supportsNegativeValues: true }
			);
		})
	],
	darkMode: 'class'
};

module.exports = config;
