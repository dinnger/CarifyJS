<template>
  <div class="flex flex-col h-full">
    <DocContentBreadcrumbs />
    <div class="markdown-viewer flex-1">
      <slot></slot>
      <div class="mt-10 grid grid-cols-2 gap-10">
        <div
          class="border-1 flex justify-start p-4 rounded-xl border-gray-300/30 text-[20px]"
        >
          Conceptos
        </div>
        <div
          class="border-1 flex justify-end p-4 rounded-xl border-gray-300/30 text-[20px]"
        >
          Conceptos
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DocContentBreadcrumbs from "./DocContentBreadcrumbs.vue";
</script>

<style>
.markdown-viewer {
  padding: 10px 30px;
  overflow: auto;
  line-height: 28px;
}

.markdown-viewer .mermaid {
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.markdown-viewer .astro-code {
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.markdown-viewer code {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0 4px;
}

/* Except when inside pre */
.markdown-viewer pre code {
  background-color: unset;
  border-radius: unset;
  padding: unset;
}

.markdown-viewer ul li {
  margin-left: 15px;
}

.markdown-viewer ul li:before {
  content: "•";
  color: #ccc;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* .markdown-viewer ul li p {
  display: inline-block;
} */
.markdown-viewer p {
  display: inline-block;
}

.markdown-viewer > p,
.markdown-viewer > ol,
.markdown-viewer > ul {
  padding-left: 20px;
}

.markdown-viewer h1 {
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.markdown-viewer h2 {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.markdown-viewer h3 {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.markdown-viewer h4 {
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
