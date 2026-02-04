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
              required
              class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400"
              placeholder="you@example.com"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
          <input
              id="password"
              v-model="payload.password"
              type="password"
              required
              class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400"
              placeholder="••••••••"
          />
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