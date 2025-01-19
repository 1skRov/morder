<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100">
    <n-card title="Main Menu" class="w-96 text-center">
      <p>Welcome to the main menu!</p>
      <n-button @click="handleLogout">Logout</n-button>
      <n-button @click="toggleTheme">Переключить тему</n-button>
    </n-card>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme.js';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();

    const handleLogout = async () => {
      await authStore.logout();
      this.$router.push('/login');
    };
    const themeStore = useThemeStore();

    const toggleTheme = () => {
      themeStore.toggleTheme();
    };

    return { toggleTheme, handleLogout };
  },
});
</script>
