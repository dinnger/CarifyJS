<template>
  <div class="code-panel">
    <div class="code-header">
      <h3>{{ title }}</h3>
      <button class="expand-button">
        <span class="icon">⛶</span>
      </button>
    </div>
    <div class="language-tabs">
      <div v-for="(lang, index) in languages" :key="index" :class="['tab', { active: activeTab === index }]"
        @click="activeTab = index">
        {{ lang }}
      </div>
    </div>
    <div class="code-content">
      <slot :activeTab="activeTab"></slot>
    </div>
    <div class="code-footer">
      <button class="next-sample">NEXT SAMPLE</button>
      <div class="response-toggle">EXAMPLE JSON RESPONSE</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  title?: string;
  languages: string[];
}>();

const activeTab = ref(0);
</script>

<style scoped>
.code-panel {
  background-color: #1a202c;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #2d3748;
}

.code-header h3 {
  margin: 0;
  font-size: 16px;
}

.expand-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.language-tabs {
  display: flex;
  background-color: #2d3748;
  border-bottom: 1px solid #4a5568;
  overflow-x: auto;
}

.tab {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
}

.tab.active {
  border-bottom: 2px solid #38b2ac;
  background-color: #1a202c;
}

.code-content {
  flex-grow: 1;
  overflow: auto;
  padding: 15px;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  background-color: #1a202c;
}

.code-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #2d3748;
  font-size: 12px;
}

.next-sample {
  background: none;
  border: 1px solid #4a5568;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.response-toggle {
  cursor: pointer;
  color: #a0aec0;
}
</style>
