<template>
  <aside class="w-96 shadow-2xl shadow-black overflow-y-auto p-8" v-if="isOpen">
    <!-- Code Samples Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary
          class="flex items-center p-2 bg-gray-900 rounded cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Code Samples
          <div class="ml-auto inline-flex">
            <span class="px-2 py-1 bg-gray-500 text-white text-xs rounded"
              >Shell</span
            >
          </div>
        </summary>
        <pre
          class="mt-2 p-2 border rounded bg-gray-900 text-white font-mono text-sm overflow-auto min-h-24"
          id="code-sample-container"
        >
          {{ curl }}
        </pre>
      </details>
    </div>

    <!-- URL Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary
          class="flex items-center p-2 bg-gray-900 rounded cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          URL
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700"
              >Base URL</label
            >
            <input
              type="text"
              value="https://apihub.document360.io"
              class="input"
            />
          </div>
        </div>
      </details>
    </div>

    <!-- Authentication Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary
          class="flex items-center p-2 bg-gray-900 rounded cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Authentication
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700"
              >Token*</label
            >
            <input
              type="text"
              value="fGJmJEkSGo6WsKZ40kfDIN0S8wr"
              class="input"
            />
          </div>
        </div>
      </details>
    </div>

    <!-- Parameters Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary
          class="flex items-center p-2 bg-gray-900 rounded cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Parameters
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700"
              >userId*</label
            >
            <input
              type="text"
              value="string"
              class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm"
            />
          </div>
          <button
            class="mt-2 bg-purple-600 text-white px-4 py-2 rounded text-sm"
          >
            Try it!
          </button>
        </div>
      </details>
    </div>

    <!-- Response Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary
          class="flex items-center p-2 bg-gray-900 rounded cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Response
          <span
            class="ml-auto inline-block px-2 py-1 bg-green-500 text-white text-xs rounded"
            >200</span
          >
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="flex items-center mb-2">
            <p class="text-sm">to start a request and see the response here!</p>
            <button
              class="ml-auto inline-block px-2 py-1 bg-green-500 text-white text-xs rounded"
            >
              200
            </button>
            <button
              class="ml-2 inline-block px-2 py-1 bg-red-500 text-white text-xs rounded"
            >
              400
            </button>
          </div>
        </div>
      </details>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const curl = ref("");

function formatCurlCommand(command) {
  // Limpiar el comando y dividirlo en líneas
  const lines = command.trim().split(/\s*\\\s*|\n/);
  const formattedLines = [];

  // Procesar cada línea del comando
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Agregar la línea al arreglo formateado
    formattedLines.push(line);
  }

  return formattedLines;
}
// Función para actualizar el panel con el nuevo comando
function updateCodeSamplePanel(curlCommand) {
  curl.value = formatCurlCommand(curlCommand).join("\n");
  // // Formatear el comando curl
  // const formattedLines = formatCurlCommand(curlCommand);

  // // Crear elementos para cada línea
  // formattedLines.forEach((line, index) => {
  //   const lineDiv = document.createElement("div");
  //   lineDiv.className = "flex mb-2";

  //   const lineNumber = document.createElement("div");
  //   lineNumber.className = "text-gray-500 mr-2";
  //   lineNumber.textContent = (index + 1).toString();

  //   const lineContent = document.createElement("pre");
  //   lineContent.textContent = index === 0 ? line : "   " + line;

  //   lineDiv.appendChild(lineNumber);
  //   lineDiv.appendChild(lineContent);
  //   container.appendChild(lineDiv);
  // });

  // Crear el selector de lenguaje
  // const langContainer = document.createElement("div");
  // langContainer.className = "relative mt-2";

  // const langSelector = document.createElement("div");
  // langSelector.className = "absolute right-0 top-0 flex space-x-2";

  // langContainer.appendChild(langSelector);
  // container.appendChild(langContainer);
  // }
}

// Escuchar el evento personalizado
document.addEventListener("execute-curl", (event) => {
  const { command, language } = event.detail;

  // Actualizar el panel con el comando
  updateCodeSamplePanel(command);

  isOpen.value = true;
});
</script>
