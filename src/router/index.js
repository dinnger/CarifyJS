import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	// Aquí se agregarán las rutas dinámicamente
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
