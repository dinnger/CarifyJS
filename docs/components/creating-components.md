# Creando Componentes

Crear tus propios componentes para ClarifyJS te permite extender y personalizar la apariencia y funcionalidad de tu documentación. Dado que ClarifyJS se basa en Astro, seguirás las convenciones de Astro para la creación de componentes.

## Creando Componentes de Astro (`.astro`)

Los componentes de Astro son la forma principal de construir interfaces de usuario en Astro.

1.  **Crea un archivo `.astro`:**
    En tu directorio `src/components/`, crea un nuevo archivo con la extensión `.astro`. Por ejemplo, `MiComponentePersonalizado.astro`.

2.  **Escribe la Plantilla (HTML):**
    La parte inferior del archivo `.astro` es la plantilla, que es similar a HTML.

3.  **Añade Lógica (JavaScript/TypeScript):**
    La parte superior del archivo, entre las vallas de código `---`, es donde escribes JavaScript o TypeScript que se ejecuta en el servidor durante la compilación. Puedes definir props, buscar datos, etc.

**Ejemplo: Un componente `Callout` simple**

`src/components/Callout.astro`:

```astro
---
// Definir las props que el componente acepta
export interface Props {
  type?: 'note' | 'warning' | 'tip';
  title: string;
}

const { type = 'note', title } = Astro.props;

// Lógica para determinar el estilo basado en el tipo
let bgColorClass = 'bg-blue-100 border-blue-500 text-blue-700'; // default a 'note'
if (type === 'warning') {
  bgColorClass = 'bg-yellow-100 border-yellow-500 text-yellow-700';
} else if (type === 'tip') {
  bgColorClass = 'bg-green-100 border-green-500 text-green-700';
}
---
<div class={`border-l-4 p-4 ${bgColorClass}`} role="alert">
  <p class="font-bold">{title}</p>
  <slot /> <!-- El contenido pasado al componente se renderizará aquí -->
</div>
```

**Cómo usarlo:**

En otra página o layout `.astro`:

```astro
---
import Callout from '../components/Callout.astro';
---
<Callout title="Nota Importante" type="note">
  <p>Este es el contenido de la nota.</p>
</Callout>

<Callout title="Advertencia" type="warning">
  <p>Ten mucho cuidado con esta acción.</p>
</Callout>
```

### Características Clave de los Componentes de Astro:

- **Props:** Los componentes pueden aceptar props para personalización. Define una interfaz `Props` y accede a ellas a través de `Astro.props`.
- **Slots (`<slot />`):** Permiten pasar contenido hijo al componente. Puedes tener slots con nombre para más flexibilidad.
- **Estilos con Ámbito (`<style>`):** Los estilos definidos en una etiqueta `<style>` dentro de un componente `.astro` tienen ámbito local para ese componente por defecto, evitando colisiones de CSS.
  ```astro
  <style>
    .mi-clase-unica { /* Solo se aplica a este componente */
      color: purple;
    }
  </style>
  ```
- **Scripts del Lado del Cliente (`<script>`):** Para añadir JavaScript interactivo que se ejecuta en el navegador, usa etiquetas `<script>` estándar. Puedes hacer que se procesen de diferentes maneras (ej. `is:inline`, `hoist`). Para interactividad más compleja, considera usar un componente de framework de UI.

## Creando Componentes de Frameworks de UI (Vue, React, Svelte, etc.)

Si necesitas interactividad compleja del lado del cliente, puedes crear componentes usando frameworks como Vue, React o Svelte, siempre que tengas la integración de Astro correspondiente instalada.

**Ejemplo: Un componente de Contador Simple en Vue**

1.  **Instala la integración de Vue:**

    ```bash
    npx astro add vue
    ```

2.  **Crea tu componente Vue:**
    `src/components/Counter.vue`:

    ```vue
    <template>
      <div>
        <p>Contador: {{ count }}</p>
        <button @click="increment">Incrementar</button>
      </div>
    </template>

    <script setup>
    import { ref } from "vue";

    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    </script>

    <style scoped>
    div {
      padding: 10px;
      border: 1px solid #ccc;
    }
    </style>
    ```

3.  **Úsalo en un archivo `.astro` con una directiva de cliente:**
    `src/pages/mi-pagina.astro`:
    ```astro
    ---
    import Counter from '../components/Counter.vue';
    ---
    <Layout>
      <h1>Página con Contador Interactivo</h1>
      <Counter client:load />
      {/* client:load asegura que el JS del componente se cargue e hidrate en el cliente */}
    </Layout>
    ```
    Otras directivas `client:*` (como `client:idle` o `client:visible`) te dan más control sobre cuándo se carga e hidrata el componente.

## Mejores Prácticas

- **Reutilización:** Diseña componentes para que sean lo más reutilizables posible.
- **Un Único Propósito:** Intenta que cada componente haga una cosa bien.
- **Claridad de Props:** Usa nombres de props claros y descriptivos.
- **Documentación (¡irónico!):** Si creas componentes complejos, considera añadir comentarios o una pequeña nota sobre cómo usarlos.

Al crear tus propios componentes, puedes adaptar ClarifyJS exactamente a las necesidades de tu proyecto de documentación.
