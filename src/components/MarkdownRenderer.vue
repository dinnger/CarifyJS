<template>
  <div class="markdown-content" v-html="htmlContent"></div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['headingsExtracted']);

const htmlContent = ref('');

// Función para procesar el Markdown y extraer los encabezados
const processMarkdown = (markdown) => {
  // Aquí usamos markdown-it desde el servicio de Markdown
  // Este es un placeholder que será implementado en el servicio real
  const html = markdown;
  htmlContent.value = html;

  // Extraer encabezados para la tabla de contenidos
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const headings = [];
  const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');

  headingElements.forEach((heading) => {
    const level = parseInt(heading.tagName.substring(1));
    const text = heading.textContent;
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');

    // Añadir ID al encabezado para poder enlazar a él
    heading.id = id;

    headings.push({
      id,
      text,
      level
    });
  });

  // Emitir los encabezados extraídos
  emit('headingsExtracted', headings);

  // Actualizar el HTML con los IDs añadidos
  htmlContent.value = tempDiv.innerHTML;
};

// Procesar el contenido Markdown inicial
onMounted(() => {
  processMarkdown(props.content);
});

// Observar cambios en el contenido
watch(() => props.content, (newContent) => {
  processMarkdown(newContent);
});
</script>

<style>
.markdown-content {
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.markdown-content h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.markdown-content h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-content h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.markdown-content h4 {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.markdown-content p {
  margin-bottom: 1rem;
}

.markdown-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-content ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-content li {
  margin-bottom: 0.25rem;
}

.markdown-content pre {
  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.markdown-content code {
  background-color: #f7f7f7;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

.markdown-content pre code {
  background-color: transparent;
  padding: 0;
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.markdown-content th {
  border: 1px solid #d4d4d4;
  padding: 0.5rem 1rem;
  text-align: left;
  background-color: #f7f7f7;
}

.markdown-content td {
  border: 1px solid #d4d4d4;
  padding: 0.5rem 1rem;
}

.markdown-content blockquote {
  border-left: 4px solid #d4d4d4;
  padding-left: 1rem;
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.markdown-content a {
  color: #000000;
  text-decoration: underline;
}

.markdown-content img {
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
