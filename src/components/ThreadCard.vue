<script setup lang="ts">
import type { Thread } from '@interfaces/thread';
import { computed } from 'vue';

const props = defineProps<{
  thread: Thread
}>();

const emit = defineEmits<{
  (e: 'update:count', newCount: number): void;
  (e: 'delete'): void;
  (e: 'edit'): void;
}>();

const displayId = computed(() => {
  console.log(props.thread)
  let prefix = '';
  if (props.thread.is_c) prefix = 'C ';
  else if (props.thread.is_e) prefix = 'E ';
  console.log(props.thread.is_c, props.thread.is_e, props.thread.thread_id, prefix, 'prefix');
  return `${prefix}${props.thread.thread_id}`;
});

const increment = () => {
  emit('update:count', props.thread.count + 1);
};

const decrement = () => {
  if (props.thread.count > 0) {
    emit('update:count', props.thread.count - 1);
  }
};
</script>

<template>
  <div class="relative flex items-center group">

    <!-- Main Card -->
    <div class="w-40 bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden flex flex-col text-white transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/60 hover:border-indigo-500/50 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)]">
      <!-- Header: ID -->
      <div class="pt-5 pb-1 text-center">
        <span class="px-2 py-0.5 bg-indigo-500/10 rounded-full text-[10px] font-black text-indigo-300 tracking-[0.2em] border border-indigo-500/20 uppercase">
          {{ displayId || 'NO ID' }}
        </span>
      </div>

      <!-- Body: Count -->
      <div class="flex-grow flex items-center justify-center py-3 relative">
        <div class="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent opacity-50"></div>
        <span class="text-6xl font-black select-none tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {{ thread.count }}
        </span>
      </div>

      <!-- Actions: - / + -->
      <div class="flex px-3 pb-1 gap-2">
        <button 
          @click="decrement"
          class="h-10 flex-1 bg-white/5 hover:bg-white/10 active:scale-95 transition-all rounded-xl flex items-center justify-center text-xl font-light border border-white/5"
          title="Decrease count"
        >
          <span class="leading-none select-none">−</span>
        </button>
        <button 
          @click="increment"
          class="h-10 flex-1 bg-indigo-500/20 hover:bg-indigo-500/30 active:scale-95 transition-all rounded-xl flex items-center justify-center text-xl font-light text-indigo-300 border border-indigo-500/20"
          title="Increase count"
        >
          <span class="leading-none select-none">+</span>
        </button>
      </div>

      <!-- Footer: Brand -->
      <div class="pt-1 pb-5 text-center">
        <span class="text-[8px] font-black uppercase tracking-[0.5em] text-gray-500/80">
          {{ thread.brand }}
        </span>
      </div>
    </div>

    <!-- Side Squares (Unfold on hover) -->
    <div class="absolute left-full top-8 flex flex-col gap-2 ml-1 z-10">
      <!-- Edit Square -->
      <div 
        class="h-7 w-2 bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-start overflow-hidden transition-all duration-300 hover:w-28 cursor-pointer group/btn hover:border-indigo-500/50 hover:bg-indigo-600 shadow-lg"
        @click="emit('edit')"
      >
        <div class="min-w-[1.75rem] flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-300 group-hover/btn:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <span class="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 font-black text-white text-[9px] tracking-widest whitespace-nowrap pr-3">MODIFIER</span>
      </div>

      <!-- Delete Square -->
      <div 
        class="h-7 w-2 bg-rose-600/80 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-start overflow-hidden transition-all duration-300 hover:w-28 cursor-pointer group/btn hover:border-rose-500/50 hover:bg-rose-600 shadow-lg"
        @click="emit('delete')"
      >
        <div class="min-w-[1.75rem] flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 group-hover/btn:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        <span class="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 font-black text-white text-[9px] tracking-widest whitespace-nowrap pr-3">SUPPRIMER</span>
      </div>
    </div>
  </div>
</template>