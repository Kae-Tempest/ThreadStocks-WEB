<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}
</script>

<template>
  <button
    @click="toggleLanguage"
    class="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors border border-gray-600"
    :title="locale === 'en' ? 'Passer en Français' : 'Switch to English'"
  >
    <span class="text-sm font-bold uppercase">{{ locale }}</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.188 16.524 5.5 20" />
    </svg>
  </button>
</template>