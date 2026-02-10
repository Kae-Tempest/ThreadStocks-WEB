<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

type Props = {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'add', thread: any): void;
}>();

const threadName = ref('');
const threadNumber = ref<number | null>(null);
const brand = ref('');
const threadType = ref<'C' | 'E' | 'none'>('none');

const resetForm = () => {
  threadName.value = '';
  threadNumber.value = null;
  brand.value = '';
  threadType.value = 'none';
};

const handleClose = () => {
  resetForm();
  emit('close');
};

const handleAdd = () => {
  const newThread = {
    name: threadName.value,
    number: threadNumber.value,
    brand: brand.value,
    type: threadType.value === 'none' ? null : threadType.value
  };
  console.log('Add a thread:', newThread);
  emit('add', newThread);
  handleClose();
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    handleClose();
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
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm" @click.self="handleClose">
    <div class="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 text-white">
      <h2 class="text-xl font-bold mb-6">Add a thread</h2>
      
      <div class="space-y-4">
        <!-- Thread Name -->
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Thread Name</label>
          <input 
            v-model="threadName"
            type="text" 
            class="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ex: Embroidery Floss"
          />
        </div>

        <!-- Thread Number -->
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Thread Number</label>
          <input 
            v-model="threadNumber"
            type="number" 
            class="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ex: 310"
          />
        </div>

        <!-- Brand -->
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Brand</label>
          <input 
            v-model="brand"
            type="text" 
            class="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ex: DMC"
          />
        </div>

        <!-- Thread Type (Segmented Control) -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-400">Thread type</label>
          <div class="grid grid-cols-3 gap-2">
            <button 
              type="button"
              @click="threadType = 'C'"
              :class="[
                'px-4 py-2 rounded-md border transition-all text-sm font-medium',
                threadType === 'C' 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                  : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
              ]"
            >
              C
            </button>
            <button 
              type="button"
              @click="threadType = 'E'"
              :class="[
                'px-4 py-2 rounded-md border transition-all text-sm font-medium',
                threadType === 'E' 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                  : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
              ]"
            >
              E
            </button>
            <button 
              type="button"
              @click="threadType = 'none'"
              :class="[
                'px-4 py-2 rounded-md border transition-all text-sm font-medium',
                threadType === 'none' 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                  : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
              ]"
            >
              None
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="pt-6 flex space-x-3">
          <button 
            @click="handleClose"
            class="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-center font-medium"
          >
            Cancel
          </button>
          <button 
            @click="handleAdd"
            class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded transition-colors text-center font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>