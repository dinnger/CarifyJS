// filepath: c:\Users\WO199\OneDrive\Documents\projects\ClarifyJS\src\services\markdownService.js
// Archivo proxy para seleccionar la implementación correcta según el entorno

// Detectar si estamos en el navegador o en el servidor
const isBrowser = typeof window !== "undefined";

// Importar la implementación adecuada
let implementation;

if (isBrowser) {
	// En el navegador, importamos la implementación del cliente
	implementation = await import("./markdownService.client.js");
} else {
	// En el servidor, importamos la implementación del servidor
	implementation = await import("./markdownService.server.js");
}

// Exportar todas las funciones de la implementación seleccionada
export const {
	readMarkdownFile,
	renderMarkdown,
	generateNavigation,
	generateSidebar,
	extractHeadings,
	getMarkdownPathFromUrl,
} = implementation;

// Exportación por defecto
export default implementation.default;
