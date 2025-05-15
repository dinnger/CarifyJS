// Funciones específicas del cliente
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

// Inicializar el procesador de Markdown (común para cliente y servidor)
const md = new MarkdownIt({
	html: true,
	linkify: true,
	typographer: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, { language: lang }).value;
			} catch (__) {}
		}
		return ""; // Usar resaltado externo por defecto
	},
});

/**
 * Renderiza contenido Markdown a HTML
 * @param {string} markdownContent - Contenido en formato Markdown
 * @returns {string} - HTML renderizado
 */
export const renderMarkdown = (markdownContent) => {
	return md.render(markdownContent || "");
};

/**
 * Extrae los encabezados de un contenido HTML
 * @param {string} html - Contenido HTML
 * @returns {Array} - Lista de encabezados con su nivel, texto e ID
 */
export const extractHeadings = (html) => {
	const headings = [];

	// Usamos una expresión regular para encontrar encabezados HTML
	const headingRegex = /<h([1-6])(?:\s[^>]*)?>(.*?)<\/h\1>/g;
	let match;

	while ((match = headingRegex.exec(html)) !== null) {
		const level = Number.parseInt(match[1]);
		const text = match[2].replace(/<[^>]*>/g, ""); // Eliminar etiquetas HTML internas
		const id = text.toLowerCase().replace(/[^\w]+/g, "-");

		headings.push({ level, text, id });
	}

	return headings;
};

// Mock de las funciones del servidor para el cliente
export const readMarkdownFile = async () => {
	return "";
};

export const generateNavigation = async () => {
	return [];
};

export const generateSidebar = async () => {
	return [];
};

export const getMarkdownPathFromUrl = async () => {
	return "";
};

export default {
	readMarkdownFile,
	renderMarkdown,
	generateNavigation,
	generateSidebar,
	extractHeadings,
	getMarkdownPathFromUrl,
};
