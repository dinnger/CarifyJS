<template>
  <div
    class="shadow-lg z-50 overflow-y-auto p-6 border-l border-gray-200 dark:border-gray-700 text-[14px]"
  >
    <ul>
      <li
        v-for="item in toc"
        :key="item.id"
        :class="[
          'pl-' + (item.level - 1) * 4,
          { 'text-doc360-purple': item.id === activeId },
        ]"
        :style="{ 'margin-left': (item.level - 1) * 10 + 'px' }"
      >
        <a
          :href="'#' + item.id"
          @click.prevent="scrollToHeading(item.id)"
          :class="{ 'text-doc360-purple': item.active }"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let interval = null;
const toc = ref([]);
const activeId = ref(null);

function getHeadings() {
  // Limpiar la lista actual
  toc.value = [];

  const headings = Array.from(
    document.querySelectorAll(
      ".markdown-viewer h1, .markdown-viewer h2, .markdown-viewer h3"
    )
  );

  const observer = new IntersectionObserver(
    (entries) => {
      for (const item of toc.value) {
        item.active = false;
      }
      if (entries.length === 0) return;

      // Encontrar la primera entrada visible
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        const id = visibleEntry.target.id;
        const item = toc.value.find((item) => item.id === id);
        if (item) {
          item.active = true;
          activeId.value = id;
        }
      }
    },
    {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    }
  );

  for (const section of headings) {
    // Asegurar que el encabezado tenga un ID
    if (!section.id) {
      section.id = section.textContent.replace(/\s+/g, "-").toLowerCase();
    }

    observer.observe(section);
    toc.value.push({
      id: section.id,
      text: section.textContent,
      level: Number.parseInt(section.tagName[1]),
      active: false,
    });
  }

  // Verificar si hay un hash en la URL y marcar ese elemento como activo
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const sanitizedId = decodeURIComponent(id).replace(/%20/g, " ");
    setTimeout(() => {
      const item = toc.value.find((item) => item.id === sanitizedId);
      if (item) {
        item.active = true;
        activeId.value = id;
      }
    }, 100);
  }
}

function scrollToHeading(id) {
  // Actualizar la URL con el fragmento (hash)
  history.pushState(null, null, `#${id}`);

  // Buscar el elemento por ID
  const element = document.getElementById(id);
  if (element) {
    // Desplazarse al elemento
    element.scrollIntoView({
      behavior: "auto",
      block: "start",
    });

    // Actualizar el ID activo
    activeId.value = id;

    // Actualizar el estado activo en la tabla de contenidos
    for (const item of toc.value) {
      item.active = item.id === id;
    }
  }
}

function visibleHeadings() {
  interval = setInterval(() => {
    getHeadings();
  }, 1000);
}

onMounted(() => {
  getHeadings();
});
onUnmounted(() => clearInterval(interval));
</script>

<style scoped>
.fixed {
  transition: background 0.2s;
}
li {
  transition: font-weight 0.2s, color 0.2s;
}
</style>
