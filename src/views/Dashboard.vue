<template>
  <div class="w-full h-full">
    <n-button @click="toggleTheme">Переключить тему</n-button>
    <button  v-if="isAuthenticated" @click="handleLogout">Выход</button>
    <employees></employees>
  </div>
</template>

<script>
import { useThemeStore } from '@/stores/theme.js';
import { useAuthStore } from '@/stores/auth';
import Employees from "@/pages/Employees.vue";

export default {
  components: { Employees },
  data() {
    return {};
  },
  computed: {
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
  methods: {
    toggleTheme() {
      const themeStore = useThemeStore();
      themeStore.toggleTheme();
    },
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();

      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped>
</style>
