<template>
  <div class="p-8">
    <!-- Header -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-2">
        <h1 class="text-3xl font-bold">Get complete user details by id</h1>
        <div class="flex items-center space-x-4">
          <button class="flex items-center text-gray-500 hover:text-gray-700">
            <span class="mr-1">Open In Portal</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center text-sm text-gray-500">
        <span>Updated: On 06 Feb 2023 •</span>
        <span class="mx-1">2 Minutes To Read •</span>
        <span>Contributors: </span>
        <span class="flex items-center ml-1">
          <span class="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs">D</span>
        </span>
      </div>
      <div class="flex mt-4 space-x-4">
        <button class="text-gray-500 hover:text-gray-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-6 8v4h6v-4H7z"
              clip-rule="evenodd" />
          </svg>
          Print
        </button>
        <button class="text-gray-500 hover:text-gray-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          Share
        </button>
        <button class="text-gray-500 hover:text-gray-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          Dark
        </button>
      </div>
    </div>

    <!-- Endpoint -->
    <div class="mb-8">
      <div class="inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded">GET</div>
      <code class="ml-2 text-gray-700 text-lg">/v2/Teams/{userId}</code>
    </div>

    <!-- Security -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Security</h2>
      <div class="mb-4">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1H6v-1l1-1 1-1H6V9l1-1 1-1H6V6l1-1 1-1H6V3a1 1 0 011-1h5a1 1 0 011 1v4l-1 1-1 1h4z"
              clip-rule="evenodd" />
          </svg>
          <span class="font-medium">API Key</span>
        </div>
        <div class="mt-2">
          <div class="flex">
            <div class="w-1/3 p-2 border border-r-0 bg-gray-50">
              <span class="text-sm font-medium">Header parameter name</span>
            </div>
            <div class="w-2/3 p-2 border">
              <code class="text-red-500">api_token</code>
            </div>
          </div>
          <div class="mt-1 p-2 text-sm text-gray-600 border">
            Enter REST API key. To generate a key, go to Settings → Knowledge base portal → API tokens
          </div>
        </div>
      </div>
    </div>

    <!-- Path Parameters -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Path parameters</h2>
      <div class="mb-4">
        <div class="flex">
          <div class="w-1/4 p-3 border border-r-0 font-medium">
            userId <span class="text-xs text-gray-500">string</span> <span class="text-xs text-red-500">Required</span>
          </div>
          <div class="w-3/4 p-3 border">
            <p>The ID of the team account</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Responses -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Responses</h2>
      <div class="border rounded-t">
        <div class="bg-green-100 p-3 flex items-center rounded-t">
          <div class="w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center text-xs mr-2">
            200
          </div>
          <span class="font-medium">Success</span>
          <button class="ml-auto text-gray-500 hover:text-gray-700">
            Example
          </button>
        </div>
        <div class="p-4">
          <div class="mb-2">
            <span class="text-sm font-medium">object</span>
          </div>
          <div class="pl-4 border-l-2 border-gray-200">
            <div class="mb-2">
              <span class="text-sm font-medium">result</span> <span class="text-xs text-gray-500">Array of object</span>
            </div>
            <div class="pl-4 mb-2 text-sm text-gray-600">
              Customer Api response data
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiDocContent'
};
</script>
