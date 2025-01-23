<template>
<!--  <div class="w-full h-full">-->
<!--    <button  v-if="isAuthenticated" @click="handleLogout">Выход</button>-->
<!--    <employees></employees>-->
<!--  </div>-->
  <div class="dashboard">
    <side-bar class="sidebar"></side-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import Employees from "@/pages/Employees/Employees.vue";
import SideBar from "@/views/SideBar.vue";

export default {
  components: {SideBar, Employees },
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
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$message.info('Вы вышли из системы.');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped>
.dashboard {
  @apply w-screen h-screen flex;
}

.sidebar {
  @apply h-full;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
