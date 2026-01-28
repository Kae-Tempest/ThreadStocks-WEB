<script setup lang="ts">

type Props = {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm">
    <div class="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-2xl max-w-sm w-full mx-4">
      <h2 class="text-xl font-bold mb-6">Paramètres</h2>
      
      <div class="space-y-4">
        <button class="w-full text-left px-4 py-2 hover:bg-gray-700 rounded transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Compte
        </button>
        
        <button class="w-full text-left px-4 py-2 hover:bg-gray-700 rounded transition-colors flex items-center text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Se déconnecter
        </button>
        
        <div class="pt-4 border-t border-gray-700">
          <button 
            @click="emit('close')"
            class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-center font-medium"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>