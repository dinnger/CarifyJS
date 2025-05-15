<template>
  <aside class="w-64 border-r border-gray-200 h-screen overflow-y-auto p-4 bg-white">
    <div class="mb-6">
      <h2 class="text-lg font-semibold mb-2">{{ formatTitle(currentSection) }}</h2>
    </div>
    <nav>
      <ul class="space-y-1">
        <li v-for="item in sidebarItems" :key="item.path">
          <!-- Sección principal (subcarpeta o archivo) -->
          <router-link :to="item.path" class="block py-1 text-black no-underline hover:underline"
            :class="{ 'font-semibold': isActive(item.path) }">
            {{ formatTitle(item.name) }}
          </router-link>

          <!-- Elementos anidados (si los hay) -->
          <ul v-if="item.children && item.children.length" class="pl-4 mt-1 space-y-1">
            <li v-for="child in item.children" :key="child.path">
              <router-link :to="child.path" class="block py-1 text-black no-underline hover:underline"
                :class="{ 'font-semibold': isActive(child.path) }">
                {{ formatTitle(child.name) }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  currentSection: {
    type: String,
    required: true
  },
  sidebarItems: {
    type: Array,
    required: true
  }
});

// Función para formatear el título desde el nombre del archivo/carpeta
const formatTitle = (name) => {
  // Eliminar extensión .md si existe
  name = name.replace(/\.md$/, '');
  // Reemplazar guiones por espacios
  return name.replace(/-/g, ' ');
};

// Comprobar si la ruta actual coincide con la ruta del elemento
const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
/* Todos los estilos están manejados por Tailwind */
</style>
