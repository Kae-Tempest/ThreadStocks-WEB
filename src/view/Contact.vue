<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from "@composable/useFetch.ts";
import PublicNavbar from '../components/PublicNavbar.vue';
import PublicFooter from '../components/PublicFooter.vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitted = ref(false);
const error = ref(false);
const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  error.value = false;
  submitted.value = false;
  
  try {
    await useFetch('/contact', {
      method: "POST",
      body: JSON.stringify(form.value),
    });
    
    submitted.value = true;
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    setTimeout(() => {
      submitted.value = false;
    }, 5000);
  } catch (err) {
    console.error('Contact failed:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <!-- Top Bar -->
    <PublicNavbar />

    <!-- Contact Section -->
    <main class="pt-32 pb-16 px-4">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{{ $t('contact.title') }}</h1>
          <p class="text-xl text-gray-400">
            {{ $t('contact.subtitle') }}
          </p>
        </div>

        <div class="bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-xl">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div v-if="submitted" class="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center">
              {{ $t('contact.success') }}
            </div>
            <div v-if="error" class="p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-center">
              {{ $t('contact.error') }}
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-400 mb-2">{{ $t('contact.name') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  required
                  class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-400 mb-2">{{ $t('contact.email') }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  required
                  class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-400 mb-2">{{ $t('contact.subject') }}</label>
              <input
                v-model="form.subject"
                type="text"
                id="subject"
                required
                class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-400 mb-2">{{ $t('contact.message') }}</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="6"
                required
                class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading">{{ $t('contact.sending') }}</span>
              <span v-else>{{ $t('contact.send') }}</span>
            </button>
          </form>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <PublicFooter />
  </div>
</template>