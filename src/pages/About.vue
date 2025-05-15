<template>
  <div class="about">
    <h1>Acerca de ClarifyJS</h1>
    <p>Esta es una aplicación de ejemplo con Vue 3, TypeScript, Vue Router y Pinia.</p>
    <router-link to="/">Volver a la página principal</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage'
})
</script>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}
</style>
