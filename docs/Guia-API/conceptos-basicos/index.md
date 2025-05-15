# Conceptos básicos

Esta sección cubre los conceptos fundamentales de la API de ClarifyJS.

## Estructura de archivos

ClarifyJS asume una estructura de archivos específica:

- Cada carpeta representa una sección
- Los archivos `index.md` son las páginas principales
- Los archivos `.md` ordinarios son subsecciones

## Configuración

La configuración de ClarifyJS se realiza mediante un objeto con las siguientes propiedades:

| Propiedad | Tipo     | Descripción                          |
| --------- | -------- | ------------------------------------ |
| `source`  | `string` | Ruta a los archivos Markdown         |
| `output`  | `string` | Ruta donde se generará el sitio      |
| `theme`   | `string` | Tema visual (por defecto: 'minimal') |
