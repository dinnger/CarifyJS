# Referencia de la API de Astro (Relevante para ClarifyJS)

ClarifyJS está construido sobre Astro, por lo que entender las APIs clave de Astro es crucial para personalizar y extender tu documentación. Esta no es una referencia exhaustiva de la API de Astro, sino una guía de las partes más relevantes cuando se trabaja con un sistema de documentación como ClarifyJS.

Para la referencia completa, visita siempre la [documentación oficial de Astro](https://docs.astro.build/).

## 1. `Astro` Global

El objeto global `Astro` está disponible en todos los archivos `.astro` dentro del script del "frontmatter" (entre `---`). Proporciona información y utilidades relacionadas con la página actual.

- **`Astro.props`**:

  - **Uso:** Accede a las props pasadas a un componente. Fundamental para hacer componentes reutilizables.
  - **Ejemplo:**
    ```astro
    ---
    export interface Props { message: string; }
    const { message } = Astro.props;
    ---
    <p>{message}</p>
    ```

- **`Astro.request`**:

  - **Uso:** Un objeto [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) estándar. Contiene información sobre la solicitud entrante, como la URL, encabezados, etc.
  - **Ejemplo:** `const currentPath = Astro.request.url;`

- **`Astro.url`**:

  - **Uso:** Un objeto [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) que representa la URL de la página actual.
  - **Ejemplo:** `Astro.url.pathname` te da la ruta de la página.

- **`Astro.slots`**:

  - **Uso:** Proporciona métodos para comprobar la existencia (`Astro.slots.has('nombre-slot')`) y renderizar (`Astro.slots.render('nombre-slot')`) [slots con nombre](https://docs.astro.build/es/core-concepts/astro-components/#slots-con-nombre) pasados a un componente.

- **`Astro.glob()`**:

  - **Uso:** Para importar múltiples archivos en tu proyecto usando patrones glob. Extremadamente útil para cargar colecciones de contenido como archivos Markdown para la documentación. ClarifyJS lo usará internamente para encontrar tus archivos de documentación.
  - **Ejemplo (cómo ClarifyJS podría usarlo):**
    ```astro
    ---
    // Carga todos los archivos .md de la carpeta de guías
    const guias = await Astro.glob('../content/docs/guides/*.md');
    ---
    <ul>
      {guias.map(guia => (
        <li><a href={guia.url}>{guia.frontmatter.title}</a></li>
      ))}
    </ul>
    ```
  - Cada elemento en el array devuelto contiene información sobre el archivo, incluyendo `frontmatter`, `url`, y una función `Content` para renderizar el componente.

- **`Astro.redirect()`**:
  - **Uso:** Para redirigir a los usuarios a otra página.
  - **Ejemplo:** `return Astro.redirect('/nueva-pagina');`

## 2. Configuración de Astro (`astro.config.mjs`)

Este archivo es donde configuras tu proyecto Astro, incluyendo integraciones como ClarifyJS.

- **`defineConfig`**: Función helper para definir tu configuración con autocompletado y validación de tipos.
- **`integrations`**: Un array donde añades integraciones de Astro. ClarifyJS probablemente se añadiría aquí.

  ```javascript
  import { defineConfig } from "astro/config";
  import clarify from "astro-clarifyjs"; // Nombre de ejemplo

  export default defineConfig({
    integrations: [
      clarify({
        /* opciones de ClarifyJS */
      }),
    ],
  });
  ```

- **`site`**: La URL base de tu sitio desplegado. Importante para generar sitemaps correctos y URLs canónicas.
- **`base`**: Si tu sitio se despliega en un subdirectorio (ej. `example.com/docs/`), esta opción debe configurarse (ej. `base: '/docs'`).
- **`markdown`**: Opciones para configurar cómo se procesa Markdown, incluyendo plugins de [Remark](https://github.com/remarkjs/remark) y [Rehype](https://github.com/rehypejs/rehype) para extender la funcionalidad. ClarifyJS podría configurar esto por ti o permitirte personalizarlo.
- **`vite`**: Opciones para personalizar la configuración de Vite subyacente.

## 3. Componentes de Astro (`.astro`)

- **Frontmatter (Script `---`):** Donde se ejecuta tu JavaScript/TypeScript del lado del servidor. Puedes importar otros componentes, buscar datos, definir props.
- **Plantilla (HTML-like):** La estructura de tu componente. Puede incluir expresiones de JavaScript entre llaves `{}`.
- **`<slot />`**: Marcador de posición para contenido hijo.
- **Directivas `client:*`**: Para hidratar componentes de UI framework en el cliente (ej. `client:load`, `client:idle`, `client:visible`).
  ```astro
  <InteractiveComponent client:visible />
  ```

## 4. Content Collections (Colecciones de Contenido)

Astro Content Collections es una forma de organizar y validar tu contenido local (como archivos Markdown o JSON) con esquemas definidos por Zod. ClarifyJS probablemente usará Content Collections para gestionar tus archivos de documentación.

- **Definición de Esquemas (`src/content/config.ts` o `.js`):**

  ```typescript
  // src/content/config.ts
  import { defineCollection, z } from "astro:content";

  const docsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      publishDate: z.date().optional(),
      tags: z.array(z.string()).optional(),
      // ...otras props del frontmatter
    }),
  });

  export const collections = {
    docs: docsCollection, // 'docs' es el nombre del directorio en src/content/docs
  };
  ```

- **Consultando Colecciones (`getCollection`, `getEntryBySlug`):**

  ```astro
  ---
  import { getCollection, getEntryBySlug } from 'astro:content';

  // Obtener todas las entradas de la colección 'docs'
  const todasLasDocs = await getCollection('docs');

  // Obtener una entrada específica por slug
  const unaGuia = await getEntryBySlug('docs', 'mi-guia-slug');
  ---
  ```

  El `slug` generalmente se deriva de la ruta del archivo dentro del directorio de la colección.

## 5. Endpoints (Rutas de API)

Puedes crear endpoints de API en tu proyecto Astro colocando archivos `.js` o `.ts` en el directorio `src/pages/`. Estos pueden usarse para servir datos JSON, manejar envíos de formularios, etc.

- **Ejemplo (`src/pages/api/saludo.ts`):**

  ```typescript
  import type { APIRoute } from "astro";

  export const GET: APIRoute = ({ params, request }) => {
    return new Response(JSON.stringify({ message: "Hola desde la API" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };
  ```

  Esto crearía un endpoint en `/api/saludo`.

Entender estas áreas clave de la API de Astro te dará una base sólida para trabajar efectivamente con ClarifyJS y personalizar tu sitio de documentación. Recuerda consultar siempre la documentación oficial de Astro para obtener la información más actualizada y detallada.
