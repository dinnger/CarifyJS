import { defineConfig } from "vite";
import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import vike from "vike/plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		vike(),
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		md({}),
	],
	build: {
		target: "es2022",
	},
});
