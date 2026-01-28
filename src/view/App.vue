<script setup lang="ts">
import { ref } from 'vue';

const isSettingsModalOpen = ref(false);

const toggleSettingsModal = () => {
  isSettingsModalOpen.value = !isSettingsModalOpen.value;
};

const addThread = () => {
  console.log('Ajouter un fil');
  // Logique pour ajouter un fil à implémenter plus tard
};
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white p-6">
    <div class="max-w-4xl mx-auto flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Mes fils</h1>
      
      <div class="flex space-x-4">
        <!-- Bouton Ajouter un fil -->
        <button 
          @click="addThread"
          class="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors shadow-lg"
          title="Ajouter un fil"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <!-- Bouton Engrenage -->
        <button 
          @click="toggleSettingsModal"
          class="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors shadow-lg"
          title="Paramètres"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal de paramètres -->
    <div v-if="isSettingsModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm">
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
              @click="toggleSettingsModal"
              class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-center font-medium"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-4xl mx-auto bg-gray-800/50 rounded-lg border border-gray-700 p-12 text-center">
      <p class="text-gray-400 italic">Contenu de l'application à venir...</p>
    </div>
  </div>
</template>