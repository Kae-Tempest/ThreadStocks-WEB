<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<template>
  <nav class="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md border-b border-gray-700 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ThreadStocks
          </router-link>
        </div>
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <router-link
            to="/contact"
            class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {{ $t('nav.contact') }}
          </router-link>
          <router-link
            to="/login"
            class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {{ $t('nav.login') }}
          </router-link>
          <router-link
            to="/register"
            class="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors shadow-lg"
          >
            {{ $t('nav.signin') }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>