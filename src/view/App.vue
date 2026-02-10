<script setup lang="ts">
import {onMounted, ref} from 'vue';
import SettingsModal from '../components/SettingsModal.vue';
import AddThreadModal from '../components/AddThreadModal.vue';
import {useUserStore} from "../stores/userStore.ts";

const isSettingsModalOpen = ref(false);
const isAddThreadModalOpen = ref(false);
const userStore = useUserStore();

onMounted(async () => {
  await userStore.getUserFromApi();
})

const toggleSettingsModal = () => {
  isSettingsModalOpen.value = !isSettingsModalOpen.value;
};

const toggleAddThreadModal = () => {
  isAddThreadModalOpen.value = !isAddThreadModalOpen.value;
};

const addThread = (threadData: any) => {
  console.log('New thread to add:', threadData);
  // Logic to add a thread to be implemented later (API)
};

</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white p-6">
    <div class="max-w-4xl mx-auto flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">My threads</h1>
      
      <div class="flex space-x-4">
        <!-- Add a thread button -->
        <button 
          @click="toggleAddThreadModal"
          class="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors shadow-lg"
          title="Add a thread"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <!-- Gear button -->
        <button 
          @click="toggleSettingsModal"
          class="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors shadow-lg"
          title="Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Settings modal -->
    <SettingsModal 
      :is-open="isSettingsModalOpen" 
      @close="toggleSettingsModal" 
    />

    <!-- Add thread modal -->
    <AddThreadModal
      :is-open="isAddThreadModalOpen"
      @close="toggleAddThreadModal"
      @add="addThread"
    />
    
    <div class="max-w-4xl mx-auto bg-gray-800/50 rounded-lg border border-gray-700 p-12 text-center">
      <p class="text-gray-400 italic">Application content coming soon...</p>
    </div>
  </div>
</template>