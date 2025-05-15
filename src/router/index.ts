import {
	createRouter,
	createMemoryHistory,
	createWebHistory,
	RouteRecordRaw,
} from "vue-router";

// Importamos las páginas
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: () => import("../pages/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../pages/About.vue"),
	},
	// Agregar más rutas según sea necesario
];

// Exportamos una función que crea el router (importante para SSR)
export function createAppRouter(isServer: boolean) {
	return createRouter({
		history: isServer ? createMemoryHistory() : createWebHistory(),
		routes,
	});
}
