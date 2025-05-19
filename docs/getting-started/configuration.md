# Configuración

Configurar ClarifyJS es sencillo. Principalmente, implicará modificar tu archivo `astro.config.mjs`.

## Configuración Básica

Un ejemplo de cómo podría verse tu `astro.config.mjs`:

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";
// Asumiendo que ClarifyJS es una integración de Astro
import clarify from "astro-clarifyjs"; // El nombre real puede variar

export default defineConfig({
  integrations: [
    // Ejemplo de cómo se podría añadir la integración de ClarifyJS
    // clarify({
    //   // Opciones de configuración aquí
    //   siteTitle: 'Mi Documentación ClarifyJS',
    //   logo: '/logo.svg',
    //   // ... más opciones
    // })
  ],
  // ...otras configuraciones de Astro
});
```

## Opciones de Configuración Comunes

- `siteTitle`: El título de tu sitio de documentación.
- `logo`: Ruta al archivo de tu logo.
- `nav`: Configuración para los enlaces de navegación del encabezado.
- `sidebar`: Configuración para la barra lateral de navegación.
- `footer`: Configuración para el pie de página.

Consulta la documentación específica de la integración o tema de ClarifyJS para una lista completa de opciones disponibles.

## Estructura de Archivos de Documentación

Por defecto, ClarifyJS esperará que tus archivos Markdown (`.md` o `.mdx`) estén en un directorio específico, comúnmente `src/content/docs/` o `docs/`. Asegúrate de que tus archivos de documentación estén organizados de una manera que ClarifyJS pueda descubrir y procesar.
