<script setup lang="ts">
import {onMounted, ref} from 'vue';
import SettingsModal from '../components/SettingsModal.vue';
import AddThreadModal from '../components/AddThreadModal.vue';
import ConfirmModal from '../components/ConfirmModal.vue';
import {useUserStore} from "../stores/userStore.ts";
import type {Thread} from "@interfaces/thread.ts";
import {useFetch} from "@composable/useFetch.ts";
import ThreadCard from "../components/ThreadCard.vue";

const isSettingsModalOpen = ref(false);
const isAddThreadModalOpen = ref(false);
const isConfirmModalOpen = ref(false);
const confirmModalConfig = ref({
  title: '',
  message: '',
  onConfirm: () => {}
});
const userStore = useUserStore();
const Threads = ref<Thread[]>([]);

onMounted(async () => {
  await userStore.getUserFromApi();
  await refreshThreads();
})

const refreshThreads = async () => {
  const res = await useFetch("/threads", {
    method: "GET"
  })
  Threads.value = res as Thread[];
}

const updateThreadCount = async (thread: Thread, newCount: number) => {
  // Optimistic update
  const oldCount = thread.thread_count;
  thread.thread_count = newCount;

  try {
    await useFetch(`/threads/update/${thread.ID}`, {
      method: "PUT",
      json: { thread_count: newCount }
    });
  } catch (e) {
    console.error(e);
    thread.thread_count = oldCount; // Rollback
  }
};

const deleteThread = (thread: Thread) => {
  confirmModalConfig.value = {
    title: 'Delete Thread',
    message: `Are you sure you want to delete thread ${thread.thread_id}?`,
    onConfirm: async () => {
      try {
        await useFetch(`/threads/delete/${thread.ID}`, {
          method: "DELETE"
        });
        await refreshThreads();
      } catch (e) {
        console.error(e);
      }
    }
  };
  isConfirmModalOpen.value = true;
};

const toggleSettingsModal = () => {
  isSettingsModalOpen.value = !isSettingsModalOpen.value;
};

const toggleAddThreadModal = () => {
  isAddThreadModalOpen.value = !isAddThreadModalOpen.value;
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
    />

    <!-- Confirm modal -->
    <ConfirmModal
      :is-open="isConfirmModalOpen"
      :title="confirmModalConfig.title"
      :message="confirmModalConfig.message"
      @close="isConfirmModalOpen = false"
      @confirm="async () => { isConfirmModalOpen = false; confirmModalConfig.onConfirm(); }"
    />
    
    <div v-if="Threads.length > 0" class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
      <ThreadCard
        v-for="thread in Threads"
        :key="thread.ID"
        :thread="thread"
        @update:count="(newCount) => updateThreadCount(thread, newCount)"
        @delete="deleteThread(thread)"
        @edit="console.log('Edit', thread)"
      />
    </div>

    <div v-else class="max-w-4xl mx-auto bg-gray-800/50 rounded-lg border border-gray-700 p-12 text-center text-gray-400 italic">
      <p v-if="userStore.user">No threads found. Click the + button to add one!</p>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>