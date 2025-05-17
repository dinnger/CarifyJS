# Manejo de Activos Estáticos

Los activos estáticos son archivos como imágenes, fuentes, favicons, etc., que tu sitio de documentación necesita. Astro (y por lo tanto ClarifyJS) tiene una forma sencilla de manejarlos.

## El Directorio `public/`

El lugar principal para los activos estáticos en un proyecto Astro es el directorio `public/` en la raíz de tu proyecto.

- Cualquier archivo que coloques en `public/` se copiará a la raíz de tu directorio de salida de compilación (generalmente `dist/`) tal cual, sin procesamiento.
- Puedes hacer referencia a estos archivos en tu código HTML o Markdown usando una ruta absoluta desde la raíz del sitio.

### Ejemplo:

Si tienes una imagen en `public/images/logo.png`:

Puedes usarla en Markdown así:

```markdown
![Logo de la Compañía](/images/logo.png)
```

O en un componente de Astro (`.astro`):

```html
<img src="/images/logo.png" alt="Logo de la Compañía" />
```

**Importante:** Las rutas a los activos en `public/` siempre deben comenzar con una barra `/` para indicar que son relativas a la raíz del sitio.

## Activos en `src/` (Procesados)

También puedes colocar activos, como imágenes, dentro de tu directorio `src/` (por ejemplo, junto a tus componentes o páginas).

Cuando importas estos activos en tus archivos `.astro` o `.js`/`.ts`, Astro puede procesarlos y optimizarlos.

### Ejemplo de Imagen en `src/assets/`:

Si tienes una imagen en `src/assets/diagram.png`:

En un componente de Astro (`MyComponent.astro`):

```astro
---
import diagramImage from '../assets/diagram.png';
---
<img src={diagramImage.src} alt="Un diagrama útil" width={diagramImage.width} height={diagramImage.height} />
```

Astro procesará esta imagen (por ejemplo, optimizándola, dándole un nombre de archivo con hash para el almacenamiento en caché) y `diagramImage.src` contendrá la ruta correcta a la imagen procesada.

### ¿Cuándo usar `public/` vs `src/`?

- **Usa `public/` para:**
  - Archivos que deben tener un nombre de archivo específico (ej. `favicon.ico`, `robots.txt`).
  - Archivos que no necesitan ningún procesamiento o optimización.
  - Imágenes grandes o muchos archivos que ralentizarían el proceso de compilación si se importaran.
- **Usa `src/` para:**
  - Imágenes que quieres que Astro optimice (tamaño, formato).
  - Activos que están estrechamente ligados a componentes específicos.
  - Scripts o hojas de estilo que quieres que Astro agrupe y minifique.

Para la mayoría de las imágenes de documentación, colocarlas en `public/images/` y referenciarlas con rutas absolutas es el enfoque más sencillo y común.

## Fuentes Personalizadas

Para usar fuentes personalizadas:

1.  Coloca los archivos de fuentes (ej. `.woff2`) en `public/fonts/`.
2.  Define `@font-face` en tu CSS global (ej. `src/styles/global.css`):

```css
/* src/styles/global.css */
@font-face {
  font-family: "MiFuentePersonalizada";
  src: url("/fonts/mifuente-regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "MiFuentePersonalizada", sans-serif;
}
```

ClarifyJS puede venir con sus propias fuentes preconfiguradas, pero puedes anularlas o añadir las tuyas usando este método.
