<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFetch } from "@composable/useFetch.ts";
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '../components/LanguageSwitcher.vue';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const payload = ref({
  token: "",
  new_password: "",
  confirm_password: "",
});

const loading = ref(false);
const error = ref("");
const success = ref(false);
const showPassword = ref(false);

onMounted(() => {
  const token = route.query.token as string;
  if (!token) {
    error.value = t('auth.resetPassword.tokenMissing');
  } else {
    payload.value.token = token;
  }
});

const handleReset = async () => {
  if (payload.value.new_password !== payload.value.confirm_password) {
    error.value = t('auth.resetPassword.mismatch');
    return;
  }

  loading.value = true;
  error.value = "";
  try {
    await useFetch('/reset-password', {
      method: "POST",
      body: JSON.stringify(payload.value),
    });
    success.value = true;
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  } catch (err) {
    error.value = t('auth.resetPassword.error');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="mb-6">
      <LanguageSwitcher />
    </div>
    <div class="w-full max-w-md p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded shadow-md border border-gray-700">
      <h2 class="text-2xl font-bold text-center text-white">{{ $t('auth.resetPassword.title') }}</h2>
      
      <div v-if="success" class="p-4 text-sm text-green-400 bg-green-500/10 border border-green-500/50 rounded-lg text-center">
        {{ $t('auth.resetPassword.success') }}
      </div>

      <form v-else class="space-y-4" @submit.prevent="handleReset">
        <div v-if="error" class="p-3 text-sm text-red-400 bg-red-500/10 border border-red-500/50 rounded-lg">
          {{ error }}
        </div>

        <div>
          <label for="new-password" class="block text-sm font-medium text-gray-300">{{ $t('auth.resetPassword.newPassword') }}</label>
          <input
              id="new-password"
              v-model="payload.new_password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400"
              placeholder="••••••••"
          />
        </div>

        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-300">{{ $t('auth.resetPassword.confirmPassword') }}</label>
          <input
              id="confirm-password"
              v-model="payload.confirm_password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring focus:ring-indigo-500/50 placeholder-gray-400"
              placeholder="••••••••"
          />
        </div>

        <div class="flex items-center">
          <input
            id="show-password"
            v-model="showPassword"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
          />
          <label for="show-password" class="ml-2 block text-sm text-gray-300">{{ $t('auth.resetPassword.showPassword') }}</label>
        </div>

        <div>
          <button
              type="submit"
              :disabled="loading || !payload.token"
              class="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading">{{ $t('auth.resetPassword.submitting') }}</span>
            <span v-else>{{ $t('auth.resetPassword.submit') }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>