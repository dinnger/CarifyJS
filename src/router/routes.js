// Definiciones de rutas compartidas entre cliente y servidor
export default [
	{
		path: "/:pathMatch(.*)*",
		name: "Documentation",
		component: () => import("../pages/[..all].vue"),
		// Cargar datos dinámicamente
		props: (route) => {
			return {
				path: route.path,
			};
		},
	},
];
