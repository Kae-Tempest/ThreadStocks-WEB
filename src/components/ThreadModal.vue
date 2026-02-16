<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, watch} from 'vue';
import {useFetch} from "@composable/useFetch.ts";
import type {Thread, ThreadDto} from "@interfaces/thread.ts";

type Props = {
  isOpen: boolean;
  thread?: Thread | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'refresh'): void;
}>();

const threadName = ref('');
const threadCount = ref<number>(0);
const brand = ref('');
const threadType = ref<'C' | 'E' | 'none'>('none');

const resetForm = () => {
  if (props.thread) {
    threadName.value = props.thread.thread_id;
    threadCount.value = props.thread.thread_count;
    brand.value = props.thread.brand;
    threadType.value = props.thread.is_c ? 'C' : (props.thread.is_e ? 'E' : 'none');
  } else {
    threadName.value = '';
    threadCount.value = 0;
    brand.value = '';
    threadType.value = 'none';
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    resetForm();
  }
});

const handleClose = () => {
  emit('close');
};

const handleSubmit = async () => {
  const threadDto: ThreadDto = {
    thread_id: threadName.value,
    thread_count: threadCount.value,
    brand: brand.value,
    is_c: threadType.value === 'C',
    is_e: threadType.value === 'E',
  };
  try {
    if (props.thread) {
      await useFetch(`/threads/update/${props.thread.ID}`, {
        method: "PUT",
        json: threadDto
      });
    } else {
      await useFetch("/threads/create", {
        method: "POST",
        json: threadDto
      });
    }
    emit('refresh')
  } catch (e) {
    console.log(e);
  }

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
      <h2 class="text-xl font-bold mb-6">{{ thread ? $t('modals.thread.editTitle') : $t('modals.thread.addTitle') }}</h2>

      <div class="space-y-4">
        <!-- Thread Name -->
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">{{ $t('modals.thread.name') }}</label>
          <input
              v-model="threadName"
              type="text"
              class="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ex: 310"
          />
        </div>

        <!-- Thread Number -->
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">{{ $t('modals.thread.count') }}</label>
          <input
              v-model.number="threadCount"
              type="number"
              min="0"
              class="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ex: 2"
          />
        </div>

        <!-- Brand -->
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">{{ $t('modals.thread.brand') }}</label>
          <input
              v-model="brand"
              type="text"
              class="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ex: DMC"
          />
        </div>

        <!-- Thread Type (Segmented Control) -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-400">{{ $t('modals.thread.type') }}</label>
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
              {{ $t('modals.thread.none') }}
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="pt-6 flex space-x-3">
          <button
              @click="handleClose"
              class="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-center font-medium"
          >
            {{ $t('modals.common.cancel') }}
          </button>
          <button
              @click="handleSubmit"
              class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded transition-colors text-center font-medium"
          >
            {{ thread ? $t('modals.common.save') : $t('modals.common.add') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>