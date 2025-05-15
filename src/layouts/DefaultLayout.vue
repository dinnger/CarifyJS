<template>
  <div class="min-h-screen flex flex-col bg-white text-black">
    <!-- Barra de navegación superior -->
    <Navbar :navigation="navigation" />

    <div class="flex flex-1 overflow-hidden">
      <!-- Barra lateral izquierda (navegación secundaria) -->
      <LeftSidebar v-if="currentSection" :current-section="currentSection" :sidebar-items="sidebarItems" />

      <!-- Contenido principal -->
      <main class="flex-1 overflow-y-auto">
        <div class="max-w-5xl mx-auto py-8 px-4">
          <slot></slot>
        </div>
      </main>

      <!-- Barra lateral derecha (tabla de contenidos) -->
      <RightSidebarTOC v-if="headings.length > 0" :headings="headings" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Navbar from '../components/Navbar.vue';
import LeftSidebar from '../components/LeftSidebar.vue';
import RightSidebarTOC from '../components/RightSidebarTOC.vue';

// Propiedades y eventos recibidos del componente padre
const props = defineProps({
  navigation: {
    type: Array,
    required: true
  },
  currentSection: {
    type: String,
    default: ''
  },
  sidebarItems: {
    type: Array,
    default: () => []
  },
  headings: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
/* Todos los estilos están manejados por Tailwind */
</style>
