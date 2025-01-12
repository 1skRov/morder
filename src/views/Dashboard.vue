<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100">
    <n-card title="Main Menu" class="w-96 text-center">
      <p>Welcome to the main menu!</p>
      <n-button block type="error" class="mt-4" @click="logout">Logout</n-button>
    </n-card>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
};
</script>
