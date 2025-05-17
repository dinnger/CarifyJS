# Creando Páginas

Crear nuevas páginas de documentación en ClarifyJS es tan simple como crear nuevos archivos Markdown.

## Ubicación de los Archivos

Generalmente, tus páginas de documentación residirán en un directorio específico dentro de tu proyecto, como `src/content/docs/` o `docs/`. La ubicación exacta puede depender de la configuración de ClarifyJS.

## Formato de Archivo

ClarifyJS soporta archivos Markdown (`.md`). También podría soportar MDX (`.mdx`) si la integración de Astro subyacente lo permite, lo que te permitiría usar componentes de Astro/React/Vue/Svelte directamente en tu Markdown.

## Ejemplo de Página Simple

Crea un archivo llamado `mi-nueva-pagina.md` en tu directorio de documentación:

```markdown
---
title: Mi Nueva Página
description: Una breve descripción de mi nueva página.
---

# Contenido de Mi Nueva Página

Este es el contenido de mi nueva página de documentación. Puedes usar toda la sintaxis estándar de Markdown aquí.

## Subsección

Aquí hay una subsección.
```

### Frontmatter

El bloque entre `---` al principio del archivo se llama frontmatter. Se utiliza para definir metadatos para tu página, como:

- `title`: El título de la página (a menudo se usa en la etiqueta `<title>` y en la barra lateral).
- `description`: Una breve descripción (útil para SEO y vistas previas).
- `order` o `sidebar_position`: A veces se usa para controlar el orden de las páginas en la barra lateral.

Consulta la documentación específica de ClarifyJS para conocer todas las opciones de frontmatter disponibles.

## Anidando Páginas

Puedes crear subdirectorios dentro de tu carpeta de documentación para organizar tus páginas. Por ejemplo:

```
docs/
├── categoria-uno/
│   ├── pagina-a.md
│   └── pagina-b.md
└── categoria-dos/
    └── pagina-c.md
```

ClarifyJS generalmente generará automáticamente la navegación de la barra lateral basada en esta estructura de archivos.
