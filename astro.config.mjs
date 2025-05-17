// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";
import remarkAlert from "./src/plugins/markdown_alert/index.ts";
import { mermaid } from "./src/plugins/markdown_mermaid/index.ts";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		remarkPlugins: [remarkAlert, mermaid],
	},
	integrations: [vue()],
});
