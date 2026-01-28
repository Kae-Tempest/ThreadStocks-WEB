<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-4">
    <h1 class="text-6xl font-bold text-red-500">404</h1>
    <p class="text-xl text-white">Page Not Found</p>
    <router-link
      to="/"
      class="px-6 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
    >
      Go Home
    </router-link>
  </div>
</template>