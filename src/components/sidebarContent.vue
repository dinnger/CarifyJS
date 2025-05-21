<template>
  <div
    v-for="[key, item] of Object.entries(listDocs)"
    :key="key"
    class="ml-3 mb-1"
  >
    <div v-if="key === '__files__'">
      <div v-for="item in listDocs.__files__" :key="item.index">
        <a :href="'/' + item.index" class="hover:text-blue-500 text-[95%]">
          {{ item.name }}
        </a>
      </div>
    </div>
    <div v-else-if="!Array.isArray(item)">
      <a :href="'/' + key.split('::')[1]" class="hover:text-blue-500">
        {{ key.split("::")[0] }}
      </a>
      <sidebarContent :listDocs="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ISidebarFields {
  name: string;
  index: string;
  folder: { index: string[]; name: string };
  level: number;
}

export interface ISidebarListFiles {
  __files__: ISidebarFields[];
  [key: string]: ISidebarFields[] | ISidebarListFiles;
}
const props = defineProps<{ listDocs: ISidebarListFiles }>();
</script>
