# Instalación

Sigue estos pasos para instalar ClarifyJS en tu proyecto:

## Prerrequisitos

- Node.js (versión X.X.X o superior)
- npm o yarn

## Pasos de Instalación

1.  **Crea un nuevo proyecto Astro (si aún no tienes uno):**

    ```bash
    npm create astro@latest mi-docs-clarifyjs
    cd mi-docs-clarifyjs
    ```

2.  **Instala ClarifyJS (Ejemplo - ajusta según cómo se distribuya ClarifyJS):**
    Si ClarifyJS es un tema o una integración de Astro:

    ```bash
    npx astro add clarifyjs
    ```

    O si es un conjunto de componentes y plantillas, es posible que necesites copiar archivos o instalar un paquete npm específico.

3.  **Configura ClarifyJS:**
    Consulta la sección de `configuration.md` para más detalles.

## Inicia el servidor de desarrollo

```bash
npm run dev
```

Tu sitio de documentación debería estar ahora ejecutándose en `http://localhost:4321`.
