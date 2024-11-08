import flowbitePlugin from "flowbite/plugin";
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
theme: {
		extend: {
			
		},
	},


  plugins: [forms, flowbitePlugin]
} satisfies Config;
