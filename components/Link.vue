<template>
  <a :class="{ active: isActive }">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
import { computed, useAttrs } from "vue";

const pageContext = usePageContext();
const { href } = useAttrs();
const isActive = computed(() => {
  const { urlPathname } = pageContext;
  return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
});
</script>

<style scoped>
a {
  padding: 5px 10px;
  margin-left: -10px;
  color: #4a5568;
  transition: color 0.2s ease;
  display: block;
}

a.active {
  color: #3182ce;
  font-weight: 600;
}

a:hover {
  color: #3182ce;
}
</style>
