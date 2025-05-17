# Referencia de la API de ClarifyJS

**Nota:** Dado que ClarifyJS es un proyecto hipotético para esta interacción, esta página describirá los _tipos_ de APIs y puntos de configuración que un sistema como ClarifyJS _podría_ exponer. Deberás consultar la documentación real de ClarifyJS una vez que esté disponible.

ClarifyJS, como un generador de sitios de documentación construido sobre Astro, probablemente expondría su API a través de varios mecanismos:

1.  **Configuración de la Integración de Astro:** Opciones pasadas al configurar ClarifyJS en `astro.config.mjs`.
2.  **Componentes Exportados:** Componentes de Astro o de frameworks de UI (Vue, React, etc.) que puedes importar y usar.
3.  **Helpers o Utilidades:** Funciones JavaScript/TypeScript que puedes importar para tareas específicas.
4.  **Convenciones de Frontmatter:** Campos especiales que puedes usar en el frontmatter de tus archivos Markdown para controlar el comportamiento.
5.  **Variables CSS Personalizadas:** Para facilitar la tematización.

## 1. Configuración de la Integración (`astro.config.mjs`)

Cuando añades ClarifyJS a tu proyecto Astro, probablemente lo harás a través de una integración, que puede aceptar un objeto de opciones.

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import clarify // Asumiendo que se importa así

export default defineConfig({
  integrations: [
    clarify({
      // --- Opciones Potenciales de ClarifyJS ---

      // **General**
      // siteTitle: 'Título de Mi Documentación', // Título global del sitio
      // logo: '/assets/logo.svg', // Ruta al logo del sitio
      // favicon: '/favicon.ico', // Ruta al favicon

      // **Navegación**
      // headerNavLinks: [ // Enlaces en el encabezado
      //   { text: 'Guías', href: '/guides' },
      //   { text: 'API', href: '/api-reference' },
      //   { text: 'GitHub', href: 'https://github.com/user/repo', external: true },
      // ],
      // sidebar: { // Configuración de la barra lateral
      //   // autoGenerateFrom: 'src/content/docs', // Generar automáticamente desde esta carpeta
      //   // order: ['introduction', 'getting-started', 'guides', 'components'], // Orden personalizado
      //   // collapsedByDefault: true, // Si las secciones están colapsadas
      //   // customItems: [ // Añadir elementos personalizados a la barra lateral
      //   //   { type: 'category', label: 'Recursos Externos', items: [
      //   //     { text: 'Astro Docs', href: 'https://docs.astro.build', external: true }
      //   //   ]}
      //   // ]
      // },
      // footerNavLinks: [ // Enlaces en el pie de página
      //   { text: 'Comunidad', href: '/community' },
      // ],

      // **Contenido y Características**
      // contentDir: 'src/content/docs', // Directorio donde residen los archivos .md/.mdx
      // tableOfContents: { // Configuración de la Tabla de Contenidos en la página
      //   minHeadingLevel: 2,
      //   maxHeadingLevel: 4,
      // },
      // search: { // Configuración de búsqueda (si se integra con Algolia, Pagefind, etc.)
      //   // provider: 'pagefind', // 'algolia', 'local', etc.
      //   // apiKey: 'ALGOLIA_API_KEY',
      //   // indexName: 'ALGOLIA_INDEX_NAME',
      // },
      // editLink: { // Enlace "Editar esta página"
      //   baseUrl: 'https://github.com/user/repo/edit/main/docs/', // Base URL para el enlace de edición
      //   text: 'Editar esta página en GitHub',
      // },

      // **Tematización**
      // theme: 'default', // Nombre del tema o un objeto de configuración de tema
      // customCss: ['/src/styles/custom-clarifyjs.css'], // Rutas a archivos CSS personalizados
      // darkMode: true, // Habilitar/deshabilitar el modo oscuro (o 'auto')

      // **Internacionalización (i18n)**
      // defaultLocale: 'en',
      // locales: {
      //   en: { label: 'English', lang: 'en' },
      //   es: { label: 'Español', lang: 'es', basePath: 'es' },
      // },

      // **Plugins o Extensiones**
      // remarkPlugins: [/* ... */], // Plugins de Remark para Markdown
      // rehypePlugins: [/* ... */], // Plugins de Rehype para HTML (post-Markdown)
    })
  ]
});
```

## 2. Componentes Exportados

ClarifyJS podría exportar componentes que puedes usar directamente en tus archivos `.astro` o `.mdx`.

**Posibles importaciones:**

```astro
---
// En un archivo .astro o .mdx
import {
  Callout,
  CodeBlock,
  Tabs,
  TabPanel,
  YouTubeEmbed,
  // ...otros componentes
} from 'astro-clarifyjs/components'; // La ruta de importación puede variar
---

<Callout type="tip" title="Buen Consejo">
  Usa componentes para mantener tu contenido modular.
</Callout>

<Tabs>
  <TabPanel label="Opción 1">Contenido para la opción 1.</TabPanel>
  <TabPanel label="Opción 2">Contenido para la opción 2.</TabPanel>
</Tabs>
```

Consulta `components/built-in-components.md` para más ideas sobre qué componentes podrían estar disponibles.

## 3. Helpers o Utilidades

Podría haber funciones helper exportadas para tareas comunes.

**Ejemplo hipotético:**

```javascript
import { getCurrentPageToc } from "astro-clarifyjs/utils"; // Ruta de importación hipotética

// En un layout o componente de Astro
const tocItems = await getCurrentPageToc(Astro);
```

## 4. Convenciones de Frontmatter

Campos especiales en el frontmatter de tus archivos Markdown que ClarifyJS reconoce.

```markdown
---
title: Mi Página Increíble
description: Una descripción para SEO y vistas previas.
# --- Posibles campos de frontmatter de ClarifyJS ---
# layout: ../../layouts/CustomDocsLayout.astro # Anular el layout por defecto
# sidebar_label: 'Inicio Rápido' # Etiqueta personalizada para la barra lateral
# sidebar_position: 1 # Orden en la barra lateral
# toc: false # Deshabilitar la tabla de contenidos para esta página
# full_width: true # Usar un layout de ancho completo para esta página
# draft: true # Marcar como borrador, no incluir en producción
# tags: ['guia', 'principiante']
# author: 'Nombre del Autor'
# lastUpdated: true # Mostrar la fecha de última actualización
# editUrl: 'https://custom.edit.url/path' # Anular el enlace de edición
---

Contenido de la página...
```

## 5. Variables CSS Personalizadas

Para facilitar la tematización, ClarifyJS podría usar variables CSS para colores, fuentes, espaciado, etc. Podrías anular estas variables en tu propio archivo CSS.

**Ejemplo:**

```css
/* En tu archivo CSS personalizado (ej. src/styles/custom-clarifyjs.css) */
:root {
  --clarify-color-primary: #5a4fcf; /* Un morado diferente */
  --clarify-font-body: "MiFuentePersonalizada", sans-serif;
  --clarify-sidebar-width: 280px;
}
```

**Importante:** La API real de ClarifyJS dependerá de sus desarrolladores. La información anterior es una suposición educada basada en cómo funcionan sistemas similares. Siempre consulta la documentación oficial de ClarifyJS para obtener detalles precisos y actualizados.
