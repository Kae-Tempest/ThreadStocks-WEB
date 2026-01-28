<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-4">
    <h1 class="text-4xl font-bold text-white">Welcome to ThreadStocks</h1>
    <div class="space-x-4">
      <router-link
        to="/login"
        class="px-6 py-2 font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600 border border-gray-600 transition-colors"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="px-6 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Register
      </router-link>
    </div>
  </div>
</template>