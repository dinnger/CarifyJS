import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import markdownService from "../services/markdownService";

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Si hay un hash en la URL (enlace a un encabezado), desplazarse a él
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
			};
		}

		// Si se usa el botón atrás/adelante, restaurar la posición guardada
		if (savedPosition) {
			return savedPosition;
		}

		// De lo contrario, ir al principio de la página
		return { top: 0 };
	},
});

export default router;
