import { createPinia } from "pinia";

// Exportamos una función que crea la instancia de Pinia (importante para SSR)
export function createAppStore() {
	const pinia = createPinia();
	return pinia;
}
