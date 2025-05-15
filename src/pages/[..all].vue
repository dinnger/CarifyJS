<template>
  <DefaultLayout :navigation="navigation" :current-section="currentSection" :sidebar-items="sidebarItems"
    :headings="headings">
    <template v-if="markdownContent">
      <MarkdownRenderer :content="markdownContent" @headings-extracted="onHeadingsExtracted" />
    </template>
    <template v-else>
      <div class="py-10 text-center">
        <h1 class="text-2xl font-bold mb-4">Página no encontrada</h1>
        <p>El contenido que buscas no existe o ha sido movido.</p>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import MarkdownRenderer from '../components/MarkdownRenderer.vue';

// Importar el servicio que seleccionará la implementación correcta
import * as markdownService from '../services/markdownService';

const route = useRoute();
const markdownContent = ref('');
const navigation = ref([]);
const sidebarItems = ref([]);
const headings = ref([]);

// Obtener la sección actual basada en la ruta
const currentSection = computed(() => {
  // Extraer el primer segmento de la ruta
  const path = route.path.split('/').filter(Boolean);
  return path.length > 0 ? path[0] : '';
});

// Cargar datos de navegación
const loadNavigation = async () => {
  navigation.value = await markdownService.generateNavigation();
};

// Cargar elementos de la barra lateral
const loadSidebar = async () => {
  if (currentSection.value) {
    sidebarItems.value = await markdownService.generateSidebar(currentSection.value);
  } else {
    sidebarItems.value = [];
  }
};

// Cargar contenido Markdown
const loadContent = async () => {
  try {
    // Obtener la ruta al archivo Markdown desde la URL actual
    const mdPath = await markdownService.getMarkdownPathFromUrl(route.path);
    console.log(route.path);
    if (mdPath) {
      // Leer el contenido del archivo
      const mdContent = await markdownService.readMarkdownFile(mdPath);
      // Renderizar Markdown a HTML
      markdownContent.value = await markdownService.renderMarkdown(mdContent);
    } else {
      markdownContent.value = '';
    }
  } catch (error) {
    console.error('Error al cargar el contenido:', error);
    markdownContent.value = '';
  }
};

// Manejar la extracción de encabezados del contenido Markdown
const onHeadingsExtracted = (extractedHeadings) => {
  headings.value = extractedHeadings;
};

// Cargar todo el contenido inicial
onMounted(async () => {
  await loadNavigation();
  await loadSidebar();
  await loadContent();
});

// Observar cambios en la ruta y actualizar contenido
watch(() => route.path, async () => {
  await loadSidebar();
  await loadContent();
}, { immediate: true });
</script>
