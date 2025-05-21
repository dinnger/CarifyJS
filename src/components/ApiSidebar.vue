<template>
  <div class="p-4">
    <div class="pb-4">
      <h3 class="text-sm font-medium text-gray-500 uppercase">Filter</h3>
    </div>
    <SidebarContent :listDocs="listDocs" />
  </div>
</template>

<script setup lang="ts">
import SidebarContent, {
  type ISidebarFields,
  type ISidebarListFiles,
} from "./sidebarContent.vue";

const props = defineProps(["listDocs", "folderInstance"]);
const listDocs: ISidebarListFiles = buildTree(props.listDocs);

function buildTree(items: ISidebarFields[]): ISidebarListFiles {
  const tree: ISidebarListFiles = { __files__: [] };
  for (const item of items) {
    let currentLevel = tree;
    // Create folders if they don't exist
    const folder = [];
    for (let folderName of item.folder.index) {
      folder.push(folderName);
      // name
      const existFolder = props.folderInstance[folder.join("/")];
      if (existFolder) {
        folderName = `${existFolder.name}::${folder.join("/")}`;
      }
      if (!currentLevel[folderName]) {
        currentLevel[folderName] = { __files__: [] }; // Initialize as ISidebarListFiles
      }
      currentLevel = currentLevel[folderName] as ISidebarListFiles;
    }
    if (!currentLevel.__files__) {
      currentLevel.__files__ = [];
    }
    currentLevel.__files__.push(item);
  }
  return tree;
}
</script>
