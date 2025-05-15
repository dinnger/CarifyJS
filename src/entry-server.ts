import { renderToString } from "@vue/server-renderer";
import { createApp } from "./main";

export async function render(url: string) {
	const { app, router, pinia } = createApp();

	// Configurar la ruta en el router
	await router.push(url);
	await router.isReady();

	// passing SSR context object which will be available via useSSRContext()
	// @vitejs/plugin-vue injects code into a component's setup() that registers
	// itself on ctx.modules. After the render, ctx.modules would contain all the
	// components that have been instantiated during this render call.
	const ctx = {};
	const html = await renderToString(app, ctx);

	// Hydratación del estado de Pinia para el cliente
	const state = JSON.stringify(pinia.state.value);
	const head = `<script>window.__INITIAL_STATE__=${state}</script>`;

	return { html, head };
}
