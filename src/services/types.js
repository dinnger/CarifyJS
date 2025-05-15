/**
 * Definiciones de tipos para el servicio de Markdown
 */

/**
 * Lee un archivo Markdown y devuelve su contenido
 * @param {string} filePath - Ruta al archivo Markdown
 * @returns {string} - Contenido del archivo
 */
export type ReadMarkdownFile = (filePath: string) => string | Promise<string>;

/**
 * Renderiza contenido Markdown a HTML
 * @param {string} markdownContent - Contenido en formato Markdown
 * @returns {string} - HTML renderizado
 */
export type RenderMarkdown = (markdownContent: string) => string;

/**
 * Tipo para los elementos de navegación principal
 */
export interface NavigationItem {
  name: string;
  path: string;
}

/**
 * Genera la estructura de navegación basada en el directorio docs/
 * @returns {NavigationItem[]} - Estructura de navegación
 */
export type GenerateNavigation = () => NavigationItem[] | Promise<NavigationItem[]>;

/**
 * Tipo para los elementos de la barra lateral
 */
export interface SidebarItem {
  name: string;
  path: string;
  children: SidebarItem[];
}

/**
 * Genera los elementos de la barra lateral para una sección específica
 * @param {string} section - Nombre de la sección (carpeta de primer nivel)
 * @returns {SidebarItem[]} - Elementos para la barra lateral
 */
export type GenerateSidebar = (section: string) => SidebarItem[] | Promise<SidebarItem[]>;

/**
 * Tipo para los encabezados extraídos del contenido
 */
export interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extrae los encabezados de un contenido HTML
 * @param {string} html - Contenido HTML
 * @returns {Heading[]} - Lista de encabezados con su nivel, texto e ID
 */
export type ExtractHeadings = (html: string) => Heading[];

/**
 * Obtiene la ruta completa a un archivo Markdown basado en la URL
 * @param {string} url - URL de la ruta
 * @returns {string} - Ruta al archivo Markdown
 */
export type GetMarkdownPathFromUrl = (url: string) => string | Promise<string>;

/**
 * Interfaz del servicio de Markdown
 */
export interface MarkdownService {
  readMarkdownFile: ReadMarkdownFile;
  renderMarkdown: RenderMarkdown;
  generateNavigation: GenerateNavigation;
  generateSidebar: GenerateSidebar;
  extractHeadings: ExtractHeadings;
  getMarkdownPathFromUrl: GetMarkdownPathFromUrl;
}
