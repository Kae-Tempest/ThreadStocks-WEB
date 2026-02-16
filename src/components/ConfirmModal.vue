<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

type Props = {
  isOpen: boolean;
  title?: string;
  message: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'confirm'): void;
}>();

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm" @click.self="emit('close')">
    <div class="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-2xl max-w-sm w-full mx-4 text-white">
      <h2 class="text-xl font-bold mb-4">{{ title || $t('modals.common.confirm') }}</h2>
      <p class="text-gray-300 mb-8">{{ message }}</p>
      
      <div class="flex space-x-3">
        <button 
          @click="emit('close')"
          class="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-center font-medium"
        >
          {{ $t('modals.common.cancel') }}
        </button>
        <button 
          @click="emit('confirm')"
          class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors text-center font-medium"
        >
          {{ $t('modals.common.confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>