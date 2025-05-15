<template>
  <div class="prose p-4">
    <div v-if="content" v-html="renderedMarkdown"></div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const route = useRoute();
const content = ref(null);
const renderedMarkdown = ref('');
const md = new MarkdownIt();

async function fetchMarkdown(path) {
  try {
    // Construye la ruta al archivo .md
    // La ruta en `route.path` comenzará con '/', ej. '/getting-started/introduction'
    // Necesitamos mapear esto a `../docs/getting-started/introduction.md` o `../docs/index.md`
    let filePath = path === '/' ? '/index.md' : `${path}.md`;
    if (path.endsWith('/')) {
      filePath = `${path}index.md`;
    }

    const response = await fetch(`/docs${filePath}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    content.value = await response.text();
    renderedMarkdown.value = md.render(content.value);
  } catch (error) {
    console.error("Error fetching markdown:", error);
    renderedMarkdown.value = "<p>Error al cargar el contenido. Por favor, revisa la consola.</p>";
  }
}

watch(() => route.path, (newPath) => {
  fetchMarkdown(newPath);
}, { immediate: true });

onMounted(() => {
  // Carga inicial si no se dispara el watch inmediatamente (aunque debería con immediate: true)
  if (!content.value) {
    fetchMarkdown(route.path);
  }
});
</script>
