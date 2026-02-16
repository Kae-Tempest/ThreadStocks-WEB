<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useFetch } from '../composable/useFetch';
import ConfirmModal from './ConfirmModal.vue';
import { useRouter } from 'vue-router';

type Props = {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const userStore = useUserStore();
const router = useRouter();

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const message = ref('');
const error = ref('');
const isConfirmDeleteOpen = ref(false);
const showOldPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
});

const updatePassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    error.value = "Passwords do not match.";
    message.value = "";
    return;
  }
  
  try {
    await useFetch("/users/update-password", {
      method: "PUT",
      json: {
        current_password: oldPassword.value,
        new_password: newPassword.value,
        confirm_new_password: confirmPassword.value
      }
    });
    message.value = "Password updated successfully.";
    error.value = "";
    oldPassword.value = "";
    newPassword.value = "";
    confirmPassword.value = "";
  } catch (e: any) {
    try {
        const err = JSON.parse(e.message);
        error.value = err.detail || "Error updating password.";
    } catch {
        error.value = "Error updating password.";
    }
    message.value = "";
  }
};

const deleteAccount = async () => {
  try {
    await useFetch("/users/delete", {
      method: "DELETE"
    });
    userStore.setUser(null);
    emit('close');
    await router.push("/login");
  } catch (e: any) {
    try {
        const err = JSON.parse(e.message);
        error.value = err.detail || "Error deleting account.";
    } catch {
        error.value = "Error deleting account.";
    }
  }
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm" @click.self="emit('close')">
    <div class="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 text-white overflow-y-auto max-h-[90vh]">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Account Settings</h2>
        <button @click="emit('close')" class="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="space-y-6">
        <!-- Informations -->
        <div>
          <h3 class="text-lg font-semibold mb-3 border-b border-gray-700 pb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Personal Information
          </h3>
          <div class="space-y-3">
            <div>
              <label class="text-xs font-medium text-gray-400 uppercase tracking-wider">Username</label>
              <p class="bg-gray-700/50 p-2 rounded border border-gray-700 mt-1">{{ userStore.user?.username }}</p>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</label>
              <p class="bg-gray-700/50 p-2 rounded border border-gray-700 mt-1">{{ userStore.user?.email }}</p>
            </div>
          </div>
        </div>

        <!-- Change Password -->
        <div>
          <h3 class="text-lg font-semibold mb-3 border-b border-gray-700 pb-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Change Password
          </h3>
          <form @submit.prevent="updatePassword" class="space-y-3">
            <input type="text" :value="userStore.user?.email" autocomplete="username" class="hidden" readonly />
            <div>
              <label for="current-password" class="text-xs font-medium text-gray-400 uppercase tracking-wider">Current Password</label>
              <div class="relative">
                <input id="current-password" v-model="oldPassword" :type="showOldPassword ? 'text' : 'password'" autocomplete="current-password" class="w-full bg-gray-700 border border-gray-600 rounded p-2 focus:ring-2 focus:ring-indigo-500 outline-none mt-1 pr-10" required />
                <button
                  type="button"
                  @click="showOldPassword = !showOldPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <svg v-if="!showOldPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label for="new-password" class="text-xs font-medium text-gray-400 uppercase tracking-wider">New Password</label>
              <div class="relative">
                <input id="new-password" v-model="newPassword" :type="showNewPassword ? 'text' : 'password'" autocomplete="new-password" class="w-full bg-gray-700 border border-gray-600 rounded p-2 focus:ring-2 focus:ring-indigo-500 outline-none mt-1 pr-10" required />
                <button
                  type="button"
                  @click="showNewPassword = !showNewPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <svg v-if="!showNewPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label for="confirm-password" class="text-xs font-medium text-gray-400 uppercase tracking-wider">Confirm New Password</label>
              <div class="relative">
                <input id="confirm-password" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" autocomplete="new-password" class="w-full bg-gray-700 border border-gray-600 rounded p-2 focus:ring-2 focus:ring-indigo-500 outline-none mt-1 pr-10" required />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>
            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition-colors shadow-md mt-2">
              Update Password
            </button>
          </form>
          <p v-if="message" class="mt-2 text-green-400 text-sm text-center font-medium">{{ message }}</p>
          <p v-if="error" class="mt-2 text-red-400 text-sm text-center font-medium">{{ error }}</p>
        </div>

        <!-- Danger Zone -->
        <div class="pt-6 border-t border-gray-700">
          <h3 class="text-lg font-semibold mb-3 text-red-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Danger Zone
          </h3>
          <p class="text-sm text-gray-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <button @click="isConfirmDeleteOpen = true" class="w-full bg-red-900/20 hover:bg-red-900/40 text-red-400 border border-red-800/50 font-medium py-2 rounded transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmation de suppression -->
    <ConfirmModal
      :is-open="isConfirmDeleteOpen"
      title="Delete Account"
      message="Are you sure you want to delete your account? This action is permanent and cannot be undone."
      @close="isConfirmDeleteOpen = false"
      @confirm="deleteAccount"
    />
  </div>
</template>