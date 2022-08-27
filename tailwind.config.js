/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#79C5E7',
				'secondary-blue': '#1D4ED8'
			}
		}
	},
	plugins: []
};
