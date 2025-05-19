<template>
  <aside
    class="w-120 shadow-2xl shadow-black overflow-y-auto p-8"
    v-if="isOpen"
  >
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
          >{{ curl }}</pre
        >
      </details>
    </div>

    <!-- Request Details -->
    <div class="mb-4">
      <h3 class="text-lg font-bold mb-2">Request Details</h3>

      <!-- Method and URL -->
      <div class="mb-4 flex">
        <select
          v-model="requestData.method"
          class="input mr-2 w-24 bg-gray-800 text-white"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
          <option value="PATCH">PATCH</option>
        </select>
        <input
          v-model="requestData.url"
          type="text"
          placeholder="URL"
          class="input flex-1"
        />
      </div>

      <!-- Headers -->
      <details class="mb-4 bg-gray-800 rounded">
        <summary class="p-2 cursor-pointer text-white">Headers</summary>
        <div class="p-3 border-t border-gray-700">
          <div
            v-for="(value, key) in requestData.headers"
            :key="key"
            class="mb-2 flex"
          >
            <input
              v-model="headerKeys[key]"
              type="text"
              placeholder="Header name"
              class="input mr-2 w-1/3"
              @change="updateHeaderKey(key, headerKeys[key])"
            />
            <input
              v-model="requestData.headers[key]"
              type="text"
              placeholder="Value"
              class="input flex-1"
            />
            <button
              @click="removeHeader(key)"
              class="ml-2 px-2 bg-red-500 text-white rounded"
            >
              ×
            </button>
          </div>
          <button
            @click="addHeader"
            class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            Add Header
          </button>
        </div>
      </details>

      <!-- Body -->
      <details class="mb-4 bg-gray-800 rounded" v-if="showBody">
        <summary class="p-2 cursor-pointer text-white">Body</summary>
        <div class="p-3 border-t border-gray-700">
          <textarea
            v-model="bodyText"
            rows="5"
            class="input w-full"
            placeholder="Request body"
          ></textarea>
        </div>
      </details>

      <button
        @click="executeRequest"
        class="w-full bg-purple-600 text-white px-4 py-2 rounded text-sm"
      >
        Try it!
      </button>
    </div>

    <!-- Response Section -->
    <div class="mb-4" v-if="response">
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
            :class="`ml-auto inline-block px-2 py-1 ${getStatusColor(
              response.status
            )} text-white text-xs rounded`"
          >
            {{ response.status }}
          </span>
        </summary>
        <div class="mt-2 p-2 border rounded">
          <!-- Tabs -->
          <div class="flex border-b mb-2">
            <button
              @click="responseTab = 'body'"
              :class="`px-3 py-1 ${
                responseTab === 'body'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-600'
              } rounded-t`"
            >
              Body
            </button>
            <button
              @click="responseTab = 'headers'"
              :class="`px-3 py-1 ml-1 ${
                responseTab === 'headers'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-600'
              } rounded-t`"
            >
              Headers
            </button>
          </div>

          <!-- Response Content -->
          <div v-if="responseTab === 'body'" class="overflow-auto">
            <pre class="text-sm">{{ formatJSON(response.data) }}</pre>
          </div>
          <div v-if="responseTab === 'headers'" class="overflow-auto">
            <table class="w-full text-sm">
              <tr v-for="(value, key) in response.headers" :key="key">
                <td class="border px-2 py-1 font-semibold">{{ key }}</td>
                <td class="border px-2 py-1">{{ value }}</td>
              </tr>
            </table>
          </div>
        </div>
      </details>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import axios from "axios";

const isOpen = ref(false);
const curl = ref("");
const responseTab = ref("body");
const headerKeys = reactive<Record<string, string>>({});

// Almacena los datos de la solicitud
const requestData = reactive({
  method: "GET",
  url: "",
  headers: {} as Record<string, string>,
  body: null as any,
});

// Para la edición del cuerpo como texto
const bodyText = ref("");

// Almacena la respuesta
const response = ref(null as any);

// Determina si se debe mostrar el campo de cuerpo
const showBody = computed(() => {
  return ["POST", "PUT", "PATCH"].includes(requestData.method);
});

// Actualiza el bodyText cuando cambia requestData.body
watch(
  () => requestData.body,
  (newVal) => {
    if (newVal !== null) {
      try {
        bodyText.value =
          typeof newVal === "object"
            ? JSON.stringify(newVal, null, 2)
            : String(newVal);
      } catch (e) {
        bodyText.value = String(newVal);
      }
    } else {
      bodyText.value = "";
    }
  },
  { immediate: true }
);

// Actualiza requestData.body cuando cambia bodyText
watch(bodyText, (newVal) => {
  if (newVal.trim()) {
    try {
      // Intenta parsear como JSON si parece ser JSON válido
      if (newVal.trim().startsWith("{") || newVal.trim().startsWith("[")) {
        requestData.body = JSON.parse(newVal);
      } else {
        requestData.body = newVal;
      }
    } catch (e) {
      requestData.body = newVal;
    }
  } else {
    requestData.body = null;
  }
});

// Función para actualizar el panel con el nuevo comando
function updateCodeSamplePanel(curlCommand: string) {
  curl.value = curlCommand.trim();
  const components = extractCurlComponents(curlCommand);

  // Actualiza los datos de la solicitud con los componentes extraídos
  requestData.method = components.method;
  requestData.url = components.url;
  requestData.headers = { ...components.headers };
  requestData.body = components.body;

  // Actualiza las claves de los encabezados para la UI
  Object.keys(components.headers).forEach((key) => {
    headerKeys[key] = key;
  });
}

interface CurlComponents {
  method: string;
  url: string;
  headers: Record<string, string>;
  body: string | null;
}

function extractCurlComponents(curlCommand: string): CurlComponents {
  const components: CurlComponents = {
    method: "GET",
    url: "",
    headers: {},
    body: null,
  };

  // Normalizar el comando: unir líneas continuadas y colapsar múltiples espacios
  const command = curlCommand.replace(/\\\n/g, " ").replace(/\s+/g, " ");

  // 1. Extraer URL
  // Intenta coincidir con URLs entre comillas o sin comillas.
  const urlPattern = /(?:['"])(https?:\/\/[^'"]+)(?:['"])|(https?:\/\/[^\s]+)/;
  const urlMatch = command.match(urlPattern);
  if (urlMatch) {
    // urlMatch[1] es para URL entre comillas, urlMatch[2] para URL sin comillas.
    components.url = urlMatch[1] || urlMatch[2];
  }

  // 2. Extraer método HTTP
  const methodMatch = command.match(/(?:-X|--request)\s+([A-Z]+)/i);
  if (methodMatch) {
    components.method = methodMatch[1].toUpperCase();
  } else {
    // Si no se especifica -X, cURL infiere POST si hay datos, sino GET.
    const hasData = /(-d|--data|--data-raw)\s+(['"])/.test(command);
    if (hasData) {
      components.method = "POST";
    }
  }

  // 3. Extraer cabeceras
  // La regex busca -H seguido de una cadena entre comillas (simples o dobles).
  // Reconoce tanto -H como --header
  const headerRegex = /(?:-H|--header)\s*(['"])([^'"]+)\1/g;
  let headerMatch: string[];
  while ((headerMatch = headerRegex.exec(command)) !== null) {
    // headerMatch[2] contiene el par "Nombre: Valor" de la cabecera.
    const headerLine = headerMatch[2];
    const separatorIndex = headerLine.indexOf(":");
    if (separatorIndex > 0) {
      const name = headerLine.substring(0, separatorIndex).trim();
      const value = headerLine.substring(separatorIndex + 1).trim();
      if (name && value) {
        components.headers[name] = value;
      }
    }
  }

  // 4. Extraer cuerpo de la solicitud
  // Se buscan varios flags de datos (-d, --data, --data-raw).
  // La regex captura el contenido entre comillas (simples o dobles).
  const dataPatterns = [
    /--data-raw\s*(['"])(.*?)\1/,
    /--data-binary\s*(['"])(.*?)\1/,
    /--data\s*(['"])(.*?)\1/,
    /-d\s*(['"])(.*?)\1/,
  ];

  for (const pattern of dataPatterns) {
    const dataMatch = command.match(pattern);
    if (dataMatch && dataMatch[2] !== undefined) {
      // dataMatch[2] es el contenido del cuerpo de la solicitud.
      try {
        components.body = JSON.parse(dataMatch[2]);
      } catch (error) {
        components.body = dataMatch[2];
      }
      break; // Tomar la primera coincidencia encontrada.
    }
  }

  return components;
}

// Funciones para manejar los encabezados
function addHeader() {
  const newKey = `header${Object.keys(requestData.headers).length + 1}`;
  requestData.headers[newKey] = "";
  headerKeys[newKey] = "";
}

function removeHeader(key: string) {
  delete requestData.headers[key];
  delete headerKeys[key];
}

function updateHeaderKey(oldKey: string, newKey: string) {
  if (oldKey === newKey || !newKey) return;

  const value = requestData.headers[oldKey];
  delete requestData.headers[oldKey];
  requestData.headers[newKey] = value;
  delete headerKeys[oldKey];
  headerKeys[newKey] = newKey;
}

// Ejecutar la solicitud con Axios
async function executeRequest() {
  try {
    const config = {
      method: requestData.method,
      url: requestData.url,
      headers: requestData.headers,
      data: requestData.body,
    };

    const res = await axios(config);
    response.value = {
      status: res.status,
      headers: res.headers,
      data: res.data,
    };
  } catch (error: any) {
    response.value = {
      status: error.response?.status || 500,
      headers: error.response?.headers || {},
      data: error.response?.data || { error: error.message },
    };
  }
}

// Utilidad para formatear JSON
function formatJSON(data: any) {
  try {
    return JSON.stringify(data, null, 2);
  } catch (e) {
    return String(data);
  }
}

// Utilidad para obtener el color según el código de estado
function getStatusColor(status: number) {
  if (status >= 200 && status < 300) return "bg-green-500";
  if (status >= 400 && status < 500) return "bg-yellow-500";
  if (status >= 500) return "bg-red-500";
  return "bg-gray-500";
}

// Escuchar el evento personalizado
document.addEventListener("execute-curl", (event) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { command, language } = (event as any).detail;

  // Actualizar el panel con el comando
  updateCodeSamplePanel(command);

  isOpen.value = true;
});
</script>
