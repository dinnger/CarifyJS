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
  @apply max-w-3xl mx-auto py-8 px-4;
}

.markdown-content h1 {
  @apply text-3xl font-bold mb-6;
}

.markdown-content h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.markdown-content h3 {
  @apply text-xl font-bold mt-6 mb-3;
}

.markdown-content h4 {
  @apply text-lg font-bold mt-4 mb-2;
}

.markdown-content p {
  @apply mb-4;
}

.markdown-content ul {
  @apply list-disc pl-6 mb-4;
}

.markdown-content ol {
  @apply list-decimal pl-6 mb-4;
}

.markdown-content li {
  @apply mb-1;
}

.markdown-content pre {
  @apply bg-gray-100 p-4 rounded overflow-x-auto mb-4;
}

.markdown-content code {
  @apply bg-gray-100 px-1 py-0.5 rounded;
}

.markdown-content pre code {
  @apply bg-transparent p-0;
}

.markdown-content table {
  @apply w-full border-collapse mb-4;
}

.markdown-content th {
  @apply border border-gray-300 px-4 py-2 text-left bg-gray-100;
}

.markdown-content td {
  @apply border border-gray-300 px-4 py-2;
}

.markdown-content blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic my-4;
}

.markdown-content a {
  @apply text-black underline;
}

.markdown-content img {
  @apply max-w-full h-auto mx-auto my-4;
}
</style>
