<template>
  <div class="p-4">
    <!-- Authentication Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary class="flex items-center p-2 bg-gray-900 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
          Authentication
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">Token*</label>
            <input type="text" value="fGJmJEkSGo6WsKZ40kfDIN0S8wr"
              class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white p-2 text-sm"
              readonly />
          </div>
        </div>
      </details>
    </div>

    <!-- URL Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary class="flex items-center p-2 bg-gray-900 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
          URL
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">Base URL</label>
            <input type="text" value="https://apihub.document360.io"
              class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm bg-gray-100"
              readonly />
          </div>
        </div>
      </details>
    </div>

    <!-- Parameters Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary class="flex items-center p-2 bg-gray-900 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
          Parameters
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">userId*</label>
            <input type="text" value="string"
              class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm" />
          </div>
          <button class="mt-2 bg-purple-600 text-white px-4 py-2 rounded text-sm">Try it!</button>
        </div>
      </details>
    </div>

    <!-- Response Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary class="flex items-center p-2 bg-gray-900 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
          Response
          <span class="ml-auto inline-block px-2 py-1 bg-green-500 text-white text-xs rounded">200</span>
        </summary>
        <div class="mt-2 p-2 border rounded">
          <div class="flex items-center mb-2">
            <p class="text-sm">to start a request and see the response here!</p>
            <button class="ml-auto inline-block px-2 py-1 bg-green-500 text-white text-xs rounded">200</button>
            <button class="ml-2 inline-block px-2 py-1 bg-red-500 text-white text-xs rounded">400</button>
          </div>
        </div>
      </details>
    </div>

    <!-- Code Samples Section -->
    <div class="mb-4">
      <details open class="mb-2">
        <summary class="flex items-center p-2 bg-gray-900 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
          Code Samples
          <div class="ml-auto inline-flex">
            <span class="px-2 py-1 bg-gray-500 text-white text-xs rounded">Shell</span>
          </div>
        </summary>
        <div class="mt-2 p-2 border rounded bg-gray-900 text-white font-mono text-sm">
          <div class="flex mb-2">
            <div class="text-gray-500 mr-2">1</div>
            <pre>curl --request GET \</pre>
          </div>
          <div class="flex mb-2">
            <div class="text-gray-500 mr-2">2</div>
            <pre>   --url https://apihub.document360.io/v2/Teams/{userId} \</pre>
          </div>
          <div class="flex mb-2">
            <div class="text-gray-500 mr-2">3</div>
            <pre>   --header 'api_token: YOUR_API_TOKEN'</pre>
          </div>
          <div class="relative mt-2">
            <div class="absolute right-0 top-0 flex space-x-2">
              <select class="bg-gray-700 text-white text-xs rounded px-2 py-1 border border-gray-600">
                <option>Shell</option>
                <option>Python</option>
                <option>Java</option>
                <option>JavaScript</option>
                <option>C#</option>
              </select>
            </div>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiTestingPanel'
};
</script>
