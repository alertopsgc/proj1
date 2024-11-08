import flowbitePlugin from "flowbite/plugin";
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					"50": "#fef2e0",
					"100": "#fedeb1",
					"200": "#fcc97f",
					"300": "#fbb24d",
					"400": "#faa227",
					"500": "#f99206",
					"600": "#f58606",
					"700": "#ef7706",
					"800": "#e96706",
					"900": "#df4c05",
				},
			},
		},
	},


  plugins: [forms, flowbitePlugin]
} satisfies Config;
