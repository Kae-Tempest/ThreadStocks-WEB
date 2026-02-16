<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <!-- Top Bar -->
    <nav class="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md border-b border-gray-700 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              ThreadStocks
            </router-link>
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

    <!-- Content -->
    <main class="pt-32 pb-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          <span class="text-indigo-500">ThreadStocks</span> Features
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
              <h2 class="text-2xl font-bold">Precise Inventory Management</h2>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              Never lose track of your collection again. ThreadStocks allows you to list every skein, spool, or ball with surgical precision.
            </p>
            <ul class="list-disc list-inside text-gray-400 space-y-2">
              <li>Track by brand (DMC, Anchor, Sullivans, etc.)</li>
              <li>Identify by official color code</li>
              <li>Real-time quantity management</li>
              <li>Categorize by thread type (cotton, silk, wool)</li>
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
              <h2 class="text-2xl font-bold">Instant Updates</h2>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              The interface is designed to be as fast as your needle. Update your stocks in seconds after finishing a work session.
            </p>
            <ul class="list-disc list-inside text-gray-400 space-y-2">
              <li>Quick increment/decrement (+/-)</li>
              <li>Instant search in your inventory</li>
              <li>Optimized interface to limit clicks</li>
              <li>Immediate synchronization with the server</li>
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
              <h2 class="text-2xl font-bold">Shopping Companion</h2>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              Take your inventory everywhere with you. No more doubts at the craft store in front of the thread aisle.
            </p>
            <ul class="list-disc list-inside text-gray-400 space-y-2">
              <li>Consult on mobile while at the store</li>
              <li>Avoid unnecessary duplicate purchases</li>
              <li>Instantly check if you have the required color for a new project</li>
              <li>Smooth and responsive "Mobile-First" interface</li>
            </ul>
          </section>
        </div>

        <div class="mt-16 text-center">
          <router-link
            to="/register"
            class="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-xl inline-block"
          >
            Ready to organize your threads?
          </router-link>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>&copy; 2026 ThreadStocks. All rights reserved.</p>
    </footer>
  </div>
</template>