import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "url";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), tailwindcss(), vueJsx()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	// Configuración para SSR
	build: {
		// Genera manifest para SSR
		manifest: true,
		rollupOptions: {
			input: "src/main.js",
		},
		// Salida para construcción de cliente/servidor
		outDir: "dist/client",
	},
	// Construir para SSR
	ssr: {
		// Archivo de entrada para SSR
		entry: "src/entry-server.js",
		// Salida para construcción servidor
		outDir: "dist/server",
		// No externalizar módulos de Vue durante SSR
		noExternal: ["vue", "vue-router"],
	},
	// Opciones de servidor de desarrollo
	server: {
		port: 3000,
	},
});
