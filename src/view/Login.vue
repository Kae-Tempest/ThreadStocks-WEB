<script setup lang="ts">
import {ref} from 'vue';
import { useFetch} from "@composable/useFetch.ts";
import type {Login} from "@interfaces/auth.ts";
import {useRouter} from "vue-router";

const router = useRouter()

const payload = ref<Login>({
  email: "",
  password: "",
});

const showPassword = ref(false);


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

</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded shadow-md border border-gray-700">
      <h2 class="text-2xl font-bold text-center text-white">Login</h2>
      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
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
          <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
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
            Sign In
          </button>
        </div>
      </form>
      <p class="text-sm text-center text-gray-400">
        Don't have an account?
        <router-link to="/register" class="font-medium text-indigo-400 hover:text-indigo-300">Register</router-link>
      </p>
    </div>
  </div>
</template>