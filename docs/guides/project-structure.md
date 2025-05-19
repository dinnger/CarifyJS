# Estructura del Proyecto

Entender la estructura de un proyecto ClarifyJS (que se basa en Astro) es clave para trabajar eficientemente.

## Estructura Típica de un Proyecto Astro

Un proyecto Astro típico, y por lo tanto un proyecto ClarifyJS, podría verse así:

```
.
├── public/
│   └── favicon.svg
│   └── images/
│       └── logo.png
├── src/
│   ├── components/
│   │   └── MiComponente.astro
│   │   └── OtroComponente.vue
│   ├── content/
│   │   └── docs/  <-- Tus archivos de documentación Markdown usualmente van aquí
│   │       ├── introduction.md
│   │       └── guides/
│   │           └── first-guide.md
│   ├── layouts/
│   │   └── DocsLayout.astro <-- Plantilla para las páginas de documentación
│   ├── pages/
│   │   └── index.astro <-- Página de inicio de tu sitio
│   │   └── api/[...slug].astro <-- Posible ruta para la documentación generada
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Directorios Clave

- **`public/`**: Contiene activos estáticos que se copian directamente a la raíz de tu sitio construido (ej. `favicon.ico`, imágenes, fuentes). Los archivos aquí se sirven desde la raíz (`/`).
- **`src/`**: El corazón de tu aplicación Astro.
  - **`components/`**: Componentes reutilizables de Astro, Vue, React, Svelte, etc., que puedes usar en tus páginas y plantillas.
  - **`content/` (Común con Astro Content Collections)**: Aquí es donde a menudo residen tus colecciones de contenido, como los archivos Markdown para tu documentación. ClarifyJS probablemente leerá desde un subdirectorio aquí (ej. `src/content/docs/`).
  - **`layouts/`**: Componentes de Astro que definen la estructura de la interfaz de usuario para una o más páginas. Por ejemplo, `DocsLayout.astro` podría definir el encabezado, pie de página y la barra lateral para todas tus páginas de documentación.
  - **`pages/`**: Cada archivo `.astro`, `.md`, o `.mdx` en este directorio se convierte en una página en tu sitio. También puedes crear rutas dinámicas. ClarifyJS podría usar una ruta dinámica como `src/pages/docs/[...slug].astro` para renderizar tus archivos Markdown.
  - **`styles/`**: Archivos CSS globales o con ámbito.
- **`astro.config.mjs`**: El archivo de configuración principal para tu proyecto Astro. Aquí es donde configuras integraciones (como ClarifyJS), opciones de construcción, etc.
- **`package.json`**: Define las dependencias de tu proyecto y los scripts npm.
- **`tsconfig.json`**: Configuración de TypeScript si estás usando TypeScript en tu proyecto.

## Estructura Específica de ClarifyJS

ClarifyJS, al ser una capa sobre Astro, se adherirá a esta estructura pero podría introducir convenciones específicas:

- **Ubicación de los Documentos:** Como se mencionó, tus archivos `.md` o `.mdx` probablemente vivirán en `src/content/docs/` o una carpeta similar configurada.
- **Componentes Personalizados:** Puedes tener componentes específicos de ClarifyJS en `src/components/clarifyjs/` o similar para elementos de interfaz de usuario de la documentación (ej. callouts, pestañas de código).
- **Plantillas (Layouts):** ClarifyJS proporcionará o esperará que uses ciertas plantillas (layouts) para renderizar la documentación de manera consistente, incluyendo la barra lateral, la navegación, etc.

Consulta la documentación específica de ClarifyJS para cualquier convención de estructura de proyecto que pueda tener.
