<script setup lang="ts">
import PublicNavbar from '../components/PublicNavbar.vue';
import PublicFooter from '../components/PublicFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <!-- Top Bar -->
    <PublicNavbar />

    <!-- Hero Section -->
    <header class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <i18n-t keypath="home.hero.title" scope="global">
            <template #span>
              <span class="text-indigo-500">{{ $t('home.hero.thread') }}</span>
            </template>
          </i18n-t>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/register"
            class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            {{ $t('home.hero.startFree') }}
          </router-link>
          <router-link
            to="/features"
            class="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold text-lg border border-gray-700 transition-all"
          >
            {{ $t('home.hero.learnMore') }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <main id="features" class="py-20 bg-gray-800/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('home.why.title') }}</h2>
          <div class="h-1 w-20 bg-indigo-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-colors group">
            <div class="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ $t('home.why.feature1.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('home.why.feature1.desc') }}
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-colors group">
            <div class="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ $t('home.why.feature2.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('home.why.feature2.desc') }}
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-colors group">
            <div class="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ $t('home.why.feature3.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('home.why.feature3.desc') }}
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <PublicFooter />
  </div>
</template>