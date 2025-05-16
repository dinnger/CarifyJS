<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-doc360-purple text-white p-4 flex justify-between items-center">
      <div class="flex items-center">
        <Logo />
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:underline">Features</a>
        <a href="#" class="hover:underline">Pricing</a>
        <a href="#" class="hover:underline">Book a demo</a>
        <button class="bg-yellow-400 text-black px-4 py-2 rounded">Sign in</button>
        <button class="rounded-full bg-white text-doc360-purple w-8 h-8 flex items-center justify-center">
          <span class="sr-only">Profile</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </header>



    <!-- Main Content -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-64 border-r overflow-y-auto h-full">
        <ApiSidebar />
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto">
        <slot></slot>
      </main>

      <!-- API Testing Panel -->
      <aside class="w-96 border-l overflow-y-auto ">
        <ApiTestingPanel />
      </aside>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';
import ApiSidebar from './ApiSidebar.vue';
import ApiTestingPanel from './ApiTestingPanel.vue';

export default {
  name: 'Document360Layout',
  components: {
    Logo,
    ApiSidebar,
    ApiTestingPanel
  }
};
</script>

<style>
.bg-doc360-purple {
  background-color: var(--doc360-purple);
}

.text-doc360-purple {
  color: var(--doc360-purple);
}

.bg-doc360-light-purple {
  background-color: var(--doc360-light-purple);
}

.text-doc360-light-purple {
  color: var(--doc360-light-purple);
}
</style>
