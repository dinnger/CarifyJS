# Despliegue

Desplegar tu sitio de documentación ClarifyJS es similar a desplegar cualquier sitio Astro. Astro construye tu proyecto en activos estáticos (HTML, CSS, JavaScript) que pueden ser alojados en numerosas plataformas.

## 1. Construye tu Sitio

Primero, necesitas construir tu sitio. Ejecuta el siguiente comando en la raíz de tu proyecto:

```bash
npm run build
```

o si usas yarn:

```bash
yarn build
```

Esto generará una carpeta `dist/` (por defecto) que contiene todos los archivos estáticos de tu sitio. Este es el directorio que desplegarás.

## 2. Elige una Plataforma de Alojamiento

Puedes alojar tu sitio Astro/ClarifyJS en muchas plataformas. Aquí hay algunas populares:

### a. Netlify

Netlify es excelente para sitios estáticos y se integra bien con Git.

1.  Empuja tu código a un repositorio de GitHub, GitLab o Bitbucket.
2.  Conecta tu repositorio a Netlify.
3.  Configura los ajustes de compilación:
    - **Comando de compilación:** `npm run build` o `astro build`
    - **Directorio de publicación:** `dist`
4.  Netlify construirá y desplegará automáticamente tu sitio cuando empujes cambios.

### b. Vercel

Vercel (de los creadores de Next.js) también ofrece un excelente alojamiento para sitios Astro.

1.  Empuja tu código a un repositorio de GitHub, GitLab o Bitbucket.
2.  Importa tu proyecto en Vercel.
3.  Vercel generalmente detectará que es un proyecto Astro y configurará los ajustes de compilación automáticamente.
    - **Comando de compilación:** `astro build` o `npm run build`
    - **Directorio de salida:** `dist` (generalmente detectado)
4.  Vercel desplegará tu sitio.

### c. GitHub Pages

Puedes alojar tu sitio de forma gratuita en GitHub Pages.

1.  Asegúrate de que tu `astro.config.mjs` tenga la opción `site` configurada con la URL correcta de GitHub Pages (ej. `https://<TU_USUARIO>.github.io`) y `base` si es un repositorio de proyecto (ej. `base: '/<NOMBRE_REPO>/'`).

    ```javascript
    // astro.config.mjs
    import { defineConfig } from "astro/config";

    export default defineConfig({
      site: "https://<TU_USUARIO>.github.io",
      base: "/<NOMBRE_REPO>/", // Solo si no es un sitio de usuario/organización
      // ...
    });
    ```

2.  Construye tu sitio: `npm run build`.
3.  Empuja el contenido de la carpeta `dist/` a la rama `gh-pages` de tu repositorio. Puedes usar una herramienta como `gh-pages` para automatizar esto:
    ```bash
    npm install --save-dev gh-pages
    ```
    Añade un script a tu `package.json`:
    ```json
    {
      "scripts": {
        "deploy": "npm run build && gh-pages -d dist"
      }
    }
    ```
    Luego ejecuta `npm run deploy`.
4.  Configura tu repositorio de GitHub para servir desde la rama `gh-pages`.

### d. Otros Proveedores de Alojamiento Estático

Muchos otros proveedores pueden alojar sitios estáticos, como:

- Cloudflare Pages
- AWS S3 (con CloudFront)
- Google Firebase Hosting
- DigitalOcean App Platform
- Surge.sh

El proceso general es:

1.  Construye tu sitio (`npm run build`).
2.  Sube el contenido de la carpeta `dist/` a tu proveedor de alojamiento.

## Consideraciones Adicionales

- **Variables de Entorno:** Si tu compilación depende de variables de entorno, asegúrate de configurarlas en tu plataforma de alojamiento.
- **Dominio Personalizado:** La mayoría de las plataformas te permiten configurar un dominio personalizado para tu sitio desplegado.
- **Integración Continua / Despliegue Continuo (CI/CD):** Para un flujo de trabajo más automatizado, configura CI/CD para que tu sitio se construya y despliegue automáticamente cada vez que empujes cambios a tu repositorio Git. GitHub Actions, GitLab CI/CD y las funciones de CI/CD integradas de Netlify/Vercel son excelentes para esto.

Consulta la [guía de despliegue de Astro](https://docs.astro.build/en/guides/deploy/) para obtener instrucciones más detalladas y específicas de la plataforma.
