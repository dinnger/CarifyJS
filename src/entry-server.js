// Archivo de entrada para SSR
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { createRouter, createMemoryHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router/routes";

export async function render(url, manifest) {
	// Crear app y router para cada solicitud
	const app = createSSRApp(App);

	// Usar createMemoryHistory en lugar de createWebHistory en el servidor
	const router = createRouter({
		history: createMemoryHistory(),
		routes,
	});

	app.use(router);

	// Establecer la URL del servidor
	await router.push(url);
	await router.isReady();

	// Renderizar app a HTML
	const appContent = await renderToString(app);

	return { appContent };
}
