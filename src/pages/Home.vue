<template>
  <div class="home">
    <h1>Bienvenido a ClarifyJS</h1>
    <p>Contador: {{ counter.count }}</p>
    <button @click="counter.increment()">Incrementar</button>
    <p>Conteo doble: {{ counter.doubleCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '../stores/counter'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const counter = useCounterStore()
    return { counter }
  }
})
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
</style>
