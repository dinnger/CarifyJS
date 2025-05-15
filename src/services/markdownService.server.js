// Funciones específicas del servidor
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { resolve, join, relative } from "node:path";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

// Inicializar el procesador de Markdown
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

// Ruta base para los archivos de documentación
const BASE_PATH = resolve(process.cwd(), "docs");

/**
 * Lee un archivo Markdown y devuelve su contenido
 * @param {string} filePath - Ruta al archivo Markdown
 * @returns {string} - Contenido del archivo
 */
export const readMarkdownFile = (filePath) => {
	const fullPath = resolve(BASE_PATH, filePath);

	try {
		return readFileSync(fullPath, "utf-8");
	} catch (error) {
		console.error(`Error al leer el archivo ${fullPath}:`, error);
		return "";
	}
};

/**
 * Renderiza contenido Markdown a HTML
 * @param {string} markdownContent - Contenido en formato Markdown
 * @returns {string} - HTML renderizado
 */
export const renderMarkdown = (markdownContent) => {
	return md.render(markdownContent || "");
};

/**
 * Genera la estructura de navegación basada en el directorio docs/
 * @returns {Object} - Estructura de navegación
 */
export const generateNavigation = () => {
	try {
		// Leer las carpetas de primer nivel (para el navbar)
		const topLevelFolders = readdirSync(BASE_PATH, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => {
				const name = dirent.name;
				const path = `/${name.toLowerCase()}`;

				return { name, path };
			});

		return topLevelFolders;
	} catch (error) {
		console.error("Error al generar la navegación:", error);
		return [];
	}
};

/**
 * Genera los elementos de la barra lateral para una sección específica
 * @param {string} section - Nombre de la sección (carpeta de primer nivel)
 * @returns {Array} - Elementos para la barra lateral
 */
export const generateSidebar = (section) => {
	try {
		const sectionPath = join(BASE_PATH, section);

		// Función recursiva para leer archivos y carpetas
		const readDirRecursive = (dirPath, basePath) => {
			const entries = readdirSync(dirPath, { withFileTypes: true });
			const result = [];

			// Ordenar: primero index.md, luego carpetas, después otros archivos .md
			entries.sort((a, b) => {
				if (a.name === "index.md") return -1;
				if (b.name === "index.md") return 1;
				if (a.isDirectory() && !b.isDirectory()) return -1;
				if (!a.isDirectory() && b.isDirectory()) return 1;
				return a.name.localeCompare(b.name);
			});

			// Procesar cada entrada
			for (const entry of entries) {
				const entryPath = join(dirPath, entry.name);
				const relativePath = relative(BASE_PATH, entryPath);

				// Crear ruta URL normalizada
				let urlPath = `/${relativePath.replace(/\\/g, "/")}`;
				if (entry.name === "index.md") {
					urlPath = urlPath.replace(/\/index\.md$/, "/");
				} else if (urlPath.endsWith(".md")) {
					urlPath = urlPath.replace(/\.md$/, "");
				}

				// Ignorar archivos que no sean Markdown
				if (!entry.isDirectory() && !entry.name.endsWith(".md")) {
					continue;
				}

				// Procesar carpetas o archivos
				if (entry.isDirectory()) {
					const children = readDirRecursive(
						entryPath,
						join(basePath, entry.name),
					);
					result.push({
						name: entry.name,
						path: urlPath,
						children,
					});
				} else {
					// Es un archivo Markdown
					const name = entry.name.replace(/\.md$/, "");
					result.push({
						name,
						path: urlPath,
						children: [],
					});
				}
			}

			return result;
		};

		// Iniciar el proceso recursivo
		return readDirRecursive(sectionPath, "");
	} catch (error) {
		console.error(
			`Error al generar la barra lateral para la sección ${section}:`,
			error,
		);
		return [];
	}
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

/**
 * Obtiene la ruta completa a un archivo Markdown basado en la URL
 * @param {string} url - URL de la ruta
 * @returns {string} - Ruta al archivo Markdown
 */
export const getMarkdownPathFromUrl = (url) => {
	// Normalizar la URL
	let normalizedUrl = url.replace(/^\/*/, "").replace(/\/*$/, "");

	// Si la URL está vacía, usar la página de inicio
	if (!normalizedUrl) {
		// Buscar un index.md en la raíz del directorio docs
		const rootIndex = join(BASE_PATH, "index.md");
		if (existsSync(rootIndex)) {
			return "index.md";
		}

		// Si no hay index.md en la raíz, usar el primer index.md de una carpeta
		const topLevelFolders = readdirSync(BASE_PATH, {
			withFileTypes: true,
		}).filter((dirent) => dirent.isDirectory());

		if (topLevelFolders.length > 0) {
			normalizedUrl = topLevelFolders[0].name;
		} else {
			return ""; // No hay contenido disponible
		}
	}

	// Convertir la URL a una ruta de archivo
	let filePath = join(BASE_PATH, normalizedUrl);

	// Comprobar si es un directorio
	if (existsSync(filePath) && statSync(filePath).isDirectory()) {
		filePath = join(filePath, "index.md");
	} else {
		// Añadir extensión .md si no es un directorio
		filePath = `${filePath}.md`;
	}

	// Comprobar si el archivo existe
	if (existsSync(filePath)) {
		return relative(BASE_PATH, filePath);
	}

	return ""; // Archivo no encontrado
};

export default {
	readMarkdownFile,
	renderMarkdown,
	generateNavigation,
	generateSidebar,
	extractHeadings,
	getMarkdownPathFromUrl,
};
