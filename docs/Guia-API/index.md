# Guía API

Esta sección proporciona documentación detallada sobre la API de ClarifyJS.

## Estructura principal

La API de ClarifyJS está organizada en varias categorías:

- Configuración
- Procesamiento de Markdown
- Generación de rutas
- Renderizado SSR

## Uso básico

Para utilizar la API de ClarifyJS, primero necesitas instanciar el generador:

```js
import { ClarifyJS } from "clarifyjs";

const generator = new ClarifyJS({
  source: "./docs",
  output: "./dist",
  theme: "minimal",
});

generator.build();
```
