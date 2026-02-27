<script setup lang="ts">
import {ref} from 'vue';
import { useFetch} from "@composable/useFetch.ts";
import type {Login} from "@interfaces/auth.ts";
import {useRouter} from "vue-router";
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '../components/LanguageSwitcher.vue';

const router = useRouter()
const { t } = useI18n();

const payload = ref<Login>({
  email: "",
  password: "",
});

const showPassword = ref(false);
const showForgotModal = ref(false);
const forgotEmail = ref("");
const forgotLoading = ref(false);
const forgotMessage = ref("");
const forgotError = ref("");


const handleLogin = async () => {
  try {
    await useFetch<Login>('/login',
        {
          method: "POST",
          body: JSON.stringify(payload.value),
        })
    await router.push("/app");
  } catch (error) {
    console.error('Login failed:', error);
  }
}

const handleForgotPassword = async () => {
  forgotLoading.value = true;
  forgotError.value = "";
  forgotMessage.value = "";
  try {
    await useFetch('/forgot-password', {
      method: "POST",
      body: JSON.stringify({ email: forgotEmail.value }),
    });
    forgotMessage.value = t('auth.forgotPassword.success');
    setTimeout(() => {
      if (!forgotError.value) {
        showForgotModal.value = false;
        forgotMessage.value = "";
        forgotEmail.value = "";
      }
    }, 5000);
  } catch (err) {
    forgotError.value = t('auth.forgotPassword.error');
  } finally {
    forgotLoading.value = false;
  }
};

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="mb-6">
      <LanguageSwitcher />
    </div>
    <div class="w-full max-w-md p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded shadow-md border border-gray-700">
      <h2 class="text-2xl font-bold text-center text-white">{{ $t('auth.login.title') }}</h2>
      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300">{{ $t('auth.login.email') }}</label>
          <input
              id="email"
              v-model="payload.email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400"
              placeholder="you@example.com"
          />
        </div>
        <div class="relative">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium text-gray-300">{{ $t('auth.login.password') }}</label>
            <button type="button" @click="showForgotModal = true" class="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              {{ $t('auth.login.forgotPassword') }}
            </button>
          </div>
          <div class="relative">
            <input
                id="password"
                v-model="payload.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400 pr-10"
                placeholder="••••••••"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <button
              type="submit"
              class="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500/50 transition-colors"
          >
            {{ $t('auth.login.submit') }}
          </button>
        </div>
      </form>
      <p class="text-sm text-center text-gray-400">
        {{ $t('auth.login.noAccount') }}
        <router-link to="/register" class="font-medium text-indigo-400 hover:text-indigo-300">{{ $t('auth.login.register') }}</router-link>
      </p>
    </div>

    <!-- Forgot Password Modal -->
    <div v-if="showForgotModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 animate-in fade-in zoom-in duration-200">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-white">{{ $t('auth.forgotPassword.title') }}</h3>
          <button @click="showForgotModal = false" class="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p class="text-gray-400 text-sm">
          {{ $t('auth.forgotPassword.desc') }}
        </p>

        <form @submit.prevent="handleForgotPassword" class="space-y-4">
          <div v-if="forgotMessage" class="p-3 text-sm text-green-400 bg-green-500/10 border border-green-500/50 rounded-lg">
            {{ forgotMessage }}
          </div>
          <div v-if="forgotError" class="p-3 text-sm text-red-400 bg-red-500/10 border border-red-500/50 rounded-lg">
            {{ forgotError }}
          </div>

          <div>
            <label for="forgot-email" class="block text-sm font-medium text-gray-300">{{ $t('auth.forgotPassword.email') }}</label>
            <input
              id="forgot-email"
              v-model="forgotEmail"
              type="email"
              required
              class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            :disabled="forgotLoading"
            class="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="forgotLoading">{{ $t('auth.forgotPassword.sending') }}</span>
            <span v-else>{{ $t('auth.forgotPassword.send') }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>