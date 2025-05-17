# Enrutamiento

El enrutamiento en ClarifyJS se maneja principalmente a través del sistema de enrutamiento basado en archivos de Astro.

## Enrutamiento Basado en Archivos

Astro utiliza un sistema de enrutamiento donde la estructura de tus archivos en el directorio `src/pages/` se mapea directamente a las rutas de tu sitio web.

- `src/pages/index.astro` -> `/`
- `src/pages/about.astro` -> `/about`
- `src/pages/blog/first-post.md` -> `/blog/first-post`

## Enrutamiento para la Documentación

Para un sitio de documentación como el que se construye con ClarifyJS, es común usar **rutas dinámicas** para renderizar el contenido de Markdown.

ClarifyJS probablemente configurará una ruta dinámica, por ejemplo, en `src/pages/docs/[...slug].astro`.

- El `[...slug]` le dice a Astro que capture todos los segmentos de la ruta después de `/docs/`.
- Este archivo `[...slug].astro` contendrá la lógica para:
  1.  Tomar el `slug` de la URL.
  2.  Encontrar el archivo Markdown correspondiente en tu directorio de contenido (ej. `src/content/docs/`).
  3.  Renderizar el contenido de Markdown usando una plantilla de ClarifyJS (un layout).

### Ejemplo de cómo funciona:

Si tienes un archivo en `src/content/docs/guides/my-guide.md`:

1.  El usuario navega a `/docs/guides/my-guide`.
2.  Astro hace coincidir esto con la ruta dinámica `src/pages/docs/[...slug].astro`.
3.  El parámetro `slug` será `guides/my-guide`.
4.  El archivo `[...slug].astro` usa este slug para leer `src/content/docs/guides/my-guide.md`.
5.  El contenido de Markdown se pasa a un layout de ClarifyJS (ej. `DocsLayout.astro`) que incluye la barra lateral, el encabezado, etc., y se renderiza la página.

## Generación de Enlaces

Cuando enlazas entre páginas de documentación, generalmente puedes usar rutas relativas basadas en la estructura de tus archivos Markdown. ClarifyJS o Astro se encargarán de resolver estas rutas correctamente.

```markdown
[Enlace a otra guía](./another-guide.md)
[Enlace a una página en un subdirectorio](../category/page.md)
```

## Configuración de la Ruta Base

Si tu sitio de documentación se sirve desde un subdirectorio (ej. `https://example.com/my-docs/`), necesitarás configurar la opción `base` en tu `astro.config.mjs`.

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/my-docs", // Asegúrate de que esto coincida con tu subdirectorio de despliegue
  // ...
});
```

ClarifyJS debería respetar esta configuración base para todos los enlaces y activos generados.

Consulta la documentación de Enrutamiento de Astro para una comprensión más profunda de sus capacidades.
