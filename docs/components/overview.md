# Visión General de Componentes

ClarifyJS, al estar construido sobre Astro, aprovecha el potente sistema de componentes de Astro. Esto te permite construir tu documentación con piezas de interfaz de usuario reutilizables y modulares.

## ¿Qué son los Componentes?

Los componentes son bloques de construcción de tu interfaz de usuario. Pueden ser tan simples como un botón o tan complejos como una barra lateral de navegación completa. En Astro, los componentes se escriben típicamente en archivos `.astro`, pero también puedes usar componentes de otros frameworks de UI populares.

## Tipos de Componentes en un Proyecto ClarifyJS

1.  **Componentes de Astro (`.astro`):**

    - Estos son el tipo de componente principal en Astro.
    - Usan una sintaxis similar a HTML para las plantillas, con una sección de script de "code fence" (---) para la lógica de JavaScript/TypeScript.
    - Son renderizados en el servidor a HTML estático por defecto, lo que significa que no hay JavaScript del lado del cliente a menos que optes explícitamente por ello (usando directivas `client:*`).
    - Ideales para la estructura del sitio, elementos de diseño y contenido que no requiere interactividad del lado del cliente.

2.  **Componentes de Frameworks de UI (Vue, React, Svelte, etc.):**

    - Astro tiene integraciones oficiales para frameworks de UI populares. Si ClarifyJS o tu proyecto los usan, puedes tener componentes escritos en Vue (`.vue`), React (`.jsx`/`.tsx`), Svelte (`.svelte`), etc.
    - Estos componentes pueden ser hidratados en el cliente para interactividad, usando directivas `client:*` de Astro.
    - Útiles para elementos de interfaz de usuario interactivos dentro de tu documentación, como selectores de pestañas, ejemplos de código interactivos, etc.

3.  **Componentes Específicos de ClarifyJS:**
    - ClarifyJS puede proporcionar un conjunto de componentes preconstruidos diseñados para la documentación. Estos podrían incluir:
      - `Callout` o `Admonition` (para notas, advertencias, consejos)
      - `CodeBlock` (con resaltado de sintaxis, opción de copiar)
      - `Tabs` (para mostrar contenido alternativo)
      - Componentes de navegación (si no son manejados puramente por layouts)

## ¿Dónde Encontrar Componentes?

- **`src/components/`**: Este es el directorio convencional para almacenar tus componentes reutilizables.
- **Integración de ClarifyJS**: Si ClarifyJS se instala como una integración de Astro o un paquete npm, sus componentes podrían estar dentro de `node_modules/` y los importarías desde allí.

## Usando Componentes

Puedes importar y usar componentes en tus archivos `.astro` (layouts o páginas) y, si usas MDX, directamente en tus archivos Markdown.

**Ejemplo en un archivo `.astro`:**

```astro
---
import MiBoton from '../components/MiBoton.astro';
import Callout from 'clarifyjs/components/Callout.astro'; // Asumiendo que ClarifyJS los exporta así
---
<Layout>
  <h1>Mi Página de Documentación</h1>
  <Callout type="info" title="Nota Importante">
    Este es un punto importante a recordar.
  </Callout>
  <MiBoton label="Haz Clic Aquí" />
</Layout>
```

**Ejemplo en MDX (si está soportado):**

```mdx
---
title: Mi Página con Componentes
---

import Callout from "clarifyjs/components/Callout.astro";

# Título de la Página

<Callout type="warning">Ten cuidado con esto.</Callout>

Más contenido aquí...
```

Entender cómo usar y crear componentes es fundamental para personalizar y extender tu sitio de documentación ClarifyJS.
