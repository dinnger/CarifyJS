<template>
  <div id="sidebar" class="sidebar">
    <div class="sidebar-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(true);
</script>

<style scoped>
.sidebar {
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  border-right: 1px solid #e2e8f0;
  background-color: white;
  overflow-y: auto;
}

.sidebar-content {
  padding: 20px;
}

.sidebar-section {
  margin-bottom: 20px;
}

.sidebar-title {
  font-weight: bold;
  margin-bottom: 10px;
  color: #2d3748;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  margin-bottom: 5px;
}

.sidebar-menu a {
  display: block;
  padding: 5px 0;
  color: #4a5568;
  text-decoration: none;
  font-size: 0.9rem;
}

.sidebar-menu a:hover {
  color: #3182ce;
}

.sidebar-menu a.active {
  color: #3182ce;
  font-weight: 600;
}
</style>
