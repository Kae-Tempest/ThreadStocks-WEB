<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <!-- Top Bar -->
    <nav class="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md border-b border-gray-700 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              ThreadStocks
            </span>
          </div>
          <div class="flex space-x-4">
            <router-link
              to="/login"
              class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Login
            </router-link>
            <router-link
              to="/register"
              class="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors shadow-lg"
            >
              Sign In
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Manage your <span class="text-indigo-500">thread</span> inventory smartly
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          ThreadStocks helps you track your embroidery, sewing, or knitting thread stocks. Never run out of the perfect color for your projects again.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/register"
            class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Start for free
          </router-link>
          <router-link
            to="/features"
            class="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold text-lg border border-gray-700 transition-all"
          >
            Learn more
          </router-link>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <main id="features" class="py-20 bg-gray-800/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why use ThreadStocks?</h2>
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
            <h3 class="text-xl font-bold mb-4">Complete Inventory</h3>
            <p class="text-gray-400">
              List all your threads with their references, brands, and exact quantities.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-colors group">
            <div class="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Fast Updates</h3>
            <p class="text-gray-400">
              Adjust your stocks in one click after each creation session to keep your data up to date.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-colors group">
            <div class="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Access Anywhere</h3>
            <p class="text-gray-400">
              Check your stock from your mobile when you're at the store to avoid duplicates.
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>&copy; 2026 ThreadStocks. All rights reserved.</p>
    </footer>
  </div>
</template>