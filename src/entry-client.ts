import "./style.css";
import { createApp } from "./main";

const { app, router } = createApp();

// // Si tenemos un estado inicial desde el servidor, lo usamos
// if (window.__INITIAL_STATE__) {
// 	pinia.state.value = JSON.parse(window.__INITIAL_STATE__);
// }

// Esperar a que el router esté listo
router.isReady().then(() => {
	app.mount("#app");
});
