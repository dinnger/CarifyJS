# Componentes Incorporados

ClarifyJS, como solución de documentación construida sobre Astro, probablemente vendrá con un conjunto de componentes incorporados o recomendará el uso de ciertos componentes de Astro o de la comunidad para ayudarte a estructurar y enriquecer tu contenido.

Dado que ClarifyJS es un proyecto hipotético en este contexto, describiremos los tipos de componentes incorporados que _podrías_ esperar encontrar en un sistema de documentación moderno como este. Deberás consultar la documentación real de ClarifyJS para obtener una lista definitiva.

## Tipos Comunes de Componentes Incorporados en Sitios de Documentación

### 1. Componentes de Formato de Contenido

- **`Callout` / `Admonition` / `Note` / `Warning` / `Tip`:**

  - **Propósito:** Para resaltar información importante, advertencias, consejos o notas.
  - **Ejemplo de Uso (MDX o Astro):**
    ```jsx
    <Callout type="warning" title="Precaución">
      Este es un paso crítico. Asegúrate de seguir las instrucciones
      cuidadosamente.
    </Callout>
    ```
  - **Características:** Diferentes tipos (info, éxito, advertencia, error), títulos personalizables, iconos.

- **`CodeBlock` / `CodePanel`:**

  - **Propósito:** Para mostrar bloques de código con resaltado de sintaxis, números de línea opcionales y un botón de "copiar código".
  - **Ejemplo de Uso:**
    ```jsx
    <CodeBlock lang="javascript" title="Ejemplo de API">
      {`async function fetchData() {
        const response = await fetch('/api/data');
        return await response.json();
      }`}
    </CodeBlock>
    ```
  - **Características:** Soporte para múltiples lenguajes, resaltado de líneas, títulos.

- **`Tabs` / `TabPanel`:**
  - **Propósito:** Para mostrar diferentes fragmentos de contenido en un espacio limitado, permitiendo al usuario cambiar entre ellos (ej. ejemplos de código en diferentes lenguajes, instrucciones para diferentes SO).
  - **Ejemplo de Uso:**
    ```jsx
    <Tabs>
      <TabPanel label="JavaScript">
        <CodeBlock lang="javascript">{`console.log('Hola JS');`}</CodeBlock>
      </TabPanel>
      <TabPanel label="Python">
        <CodeBlock lang="python">{`print('Hola Python')`}</CodeBlock>
      </TabPanel>
    </Tabs>
    ```

### 2. Componentes de Navegación y Estructura

- **`Sidebar` / `ApiSidebar`:**

  - **Propósito:** Aunque a menudo forman parte de un layout, podría haber componentes para generar o personalizar secciones de la barra lateral.
  - **Características:** Generación automática a partir de la estructura de archivos, enlaces colapsables, resaltado de la página activa.

- **`Header` / `Navbar`:**

  - **Propósito:** Similar a la barra lateral, el encabezado es usualmente parte del layout, pero podría haber componentes para añadir elementos personalizados.
  - **Características:** Logo, título del sitio, enlaces de navegación, buscador.

- **`TableOfContents` (TOC):**
  - **Propósito:** Para generar automáticamente una tabla de contenidos para la página actual basada en sus encabezados (h2, h3, etc.).
  - **Características:** Enlaces clicables, resaltado de la sección visible.

### 3. Componentes de Medios

- **`Image` (Optimizado):**
  - **Propósito:** Un componente para mostrar imágenes que podría incluir optimización automática (usando las capacidades de Astro), lazy loading y otras características.
  - **Ejemplo de Uso:**
    ```jsx
    <Image
      src="/images/mi-diagrama.png"
      alt="Un diagrama importante"
      caption="Figura 1: Diagrama del sistema."
    />
    ```

### 4. Componentes de Interfaz de Usuario Específicos

- **`Button`:**
  - **Propósito:** Un componente de botón estilizado para consistencia.
- **`Link`:**
  - **Propósito:** Un componente de enlace que podría manejar inteligentemente enlaces internos vs. externos.

## Cómo Descubrir y Usar Componentes Incorporados

1.  **Documentación de ClarifyJS:** Esta es la fuente principal. Debería listar todos los componentes disponibles, sus props y ejemplos de uso.
2.  **Importaciones:** Cuando usas ClarifyJS, es probable que importes estos componentes desde el paquete de ClarifyJS o una ruta designada.
    ```astro
    ---
    // Ejemplo de cómo podrías importar componentes de ClarifyJS
    import { Callout, CodeBlock } from 'astro-clarifyjs/components';
    // o si están en tu proyecto directamente
    import Callout from '../../components/clarifyjs/Callout.astro';
    ---
    ```
3.  **Autocompletado del Editor:** Si tu editor está configurado correctamente para Astro y TypeScript, podrías obtener sugerencias de autocompletado para los componentes disponibles y sus props.

Al aprovechar los componentes incorporados, puedes construir rápidamente documentación rica y funcional sin tener que reinventar la rueda para elementos comunes de la interfaz de usuario.
