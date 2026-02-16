<script setup lang="ts">
import PublicNavbar from '../components/PublicNavbar.vue';
import PublicFooter from '../components/PublicFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <!-- Top Bar -->
    <PublicNavbar />

    <!-- Content -->
    <main class="pt-32 pb-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          <i18n-t keypath="features.title" scope="global">
            <template #span>
              <span class="text-indigo-500">ThreadStocks</span>
            </template>
          </i18n-t>
        </h1>
        
        <div class="space-y-12">
          <!-- Feature 1: Inventory -->
          <section class="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold">{{ $t('features.item1.title') }}</h2>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('features.item1.desc') }}
            </p>
            <ul class="list-disc list-inside text-gray-400 space-y-2">
              <li v-for="(item, index) in $tm('features.item1.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </section>

          <!-- Feature 2: Updates -->
          <section class="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold">{{ $t('features.item2.title') }}</h2>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('features.item2.desc') }}
            </p>
            <ul class="list-disc list-inside text-gray-400 space-y-2">
              <li v-for="(item, index) in $tm('features.item2.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </section>

          <!-- Feature 3: Mobility -->
          <section class="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold">{{ $t('features.item3.title') }}</h2>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('features.item3.desc') }}
            </p>
            <ul class="list-disc list-inside text-gray-400 space-y-2">
              <li v-for="(item, index) in $tm('features.item3.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </section>
        </div>

        <div class="mt-16 text-center">
          <router-link
            to="/register"
            class="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-xl inline-block"
          >
            {{ $t('features.ready') }}
          </router-link>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <PublicFooter />
  </div>
</template>