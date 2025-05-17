<template>
  <div class="p-4">
    <div class="pb-4">
      <h3 class="text-sm font-medium text-gray-500 uppercase">Filter</h3>
    </div>
    <div v-for="doc in listDocs" :key="doc.index">
      <a  :href="'/'+doc.url">
      {{doc.folder}}
      {{doc.name}}
    </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IListFiles } from '../server/files.ts';
const props = defineProps(['listDocs']);
const listDocs:IListFiles[] = props.listDocs;
</script>
