<template>
  <header class="border-b border-gray-200 bg-white">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="text-2xl font-bold">
        <router-link to="/" class="text-black no-underline hover:underline">ClarifyJS</router-link>
      </div>
      <div class="flex space-x-6">
        <router-link v-for="item in navigation" :key="item.path" :to="item.path"
          class="text-black no-underline hover:underline">
          {{ formatTitle(item.name) }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  navigation: {
    type: Array,
    required: true
  }
});

// Función para formatear el título desde el nombre de la carpeta
const formatTitle = (name) => {
  return name.replace(/-/g, ' ');
};
</script>

<style scoped>
/* Todos los estilos están manejados por Tailwind */
</style>
