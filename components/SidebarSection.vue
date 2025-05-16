<template>
  <div class="sidebar-section">
    <div class="sidebar-title">{{ title }}</div>
    <ul class="sidebar-menu">
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.href" :class="{ active: item.active }">
          <span v-if="item.icon" class="sidebar-icon">{{ item.icon }}</span>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  items: Array<{
    label: string;
    href: string;
    icon?: string;
    active?: boolean;
  }>;
}>();
</script>

<style scoped>
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
  display: flex;
  align-items: center;
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

.sidebar-icon {
  margin-right: 8px;
}
</style>
