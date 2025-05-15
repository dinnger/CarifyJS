// Archivo proxy para seleccionar la implementación correcta según el entorno
// Este archivo detecta si estamos en un entorno de cliente o servidor
// y carga la implementación adecuada para cada caso

// Detectar si estamos en el navegador o en el servidor
const isBrowser = typeof window !== "undefined";

// Importación dinámica adaptada al entorno
let service;

// En tiempo de ejecución, cargamos la implementación adecuada
if (isBrowser) {
	// Estamos en el navegador
	service = await import("./markdownService.client.js");
} else {
	// Estamos en el servidor
	service = await import("./markdownService.server.js");
}

// Exportar las funciones de la implementación
export const readMarkdownFile = service.readMarkdownFile;
export const renderMarkdown = service.renderMarkdown;
export const generateNavigation = service.generateNavigation;
export const generateSidebar = service.generateSidebar;
export const extractHeadings = service.extractHeadings;
export const getMarkdownPathFromUrl = service.getMarkdownPathFromUrl;

// Exportación por defecto
export default {
	readMarkdownFile,
	renderMarkdown,
	generateNavigation,
	generateSidebar,
	extractHeadings,
	getMarkdownPathFromUrl,
};
