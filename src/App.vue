<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <router-link to="/">Inicio</router-link> |
        <router-link to="/about">Acerca de</router-link>
      </nav>
      <div class="logos">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  margin-bottom: 2rem;
  text-align: center;
}

nav {
  margin-bottom: 1rem;
}

nav a {
  margin: 0 0.5rem;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-active {
  color: #42b883;
  font-weight: bold;
}

.logos {
  display: flex;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

main {
  width: 100%;
  max-width: 1200px;
}
</style>
