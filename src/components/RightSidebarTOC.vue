<template>
  <aside class="w-64 p-4 h-screen overflow-y-auto bg-white">
    <div class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Tabla de Contenidos</h2>
    </div>
    <nav>
      <ul class="space-y-1">
        <li v-for="heading in headings" :key="heading.id"
          :class="{ 'pl-2': heading.level === 2, 'pl-4': heading.level === 3, 'pl-6': heading.level >= 4 }">
          <a :href="`#${heading.id}`" class="block py-1 text-black no-underline hover:underline text-sm"
            :class="{ 'font-semibold': heading.level === 1 }">
            {{ heading.text }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  headings: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
/* Todos los estilos están manejados por Tailwind */
</style>
