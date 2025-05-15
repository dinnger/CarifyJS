<template>
  <div class="drawer lg:drawer-open min-h-screen">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col p-4">
      <div class="navbar bg-base-100 rounded-box shadow-sm mb-4">
        <div class="flex-none">
          <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-2xl">ClarifyJS</a>
        </div>
      </div>
      <router-view />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a class="hover:bg-base-300">Inicio</a></li>
        <li><a class="hover:bg-base-300">Documentación</a></li>
        <li>
          <details open>
            <summary>Guías</summary>
            <ul>
              <li><a class="hover:bg-base-300">Introducción</a></li>
              <li><a class="hover:bg-base-300">Guía Avanzada</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>



<script setup>
// Lógica del componente principal si es necesaria
</script>
