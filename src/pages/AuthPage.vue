<script>
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    loginError() {
      const authStore = useAuthStore();
      return authStore.loginError;
    },
  },
  methods: {
    async handleLogin() {
      const authStore = useAuthStore();
      await authStore.login(this.username, this.password);

      if (!authStore.loginError) {
        this.$router.push({ name: 'main' });
      }
    },
  },
};
</script>

<template>
  <div class="relative w-full h-screen">
    <div class="theme">
      <div class="background_background__3Oeal">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="glass-wrapper">
      <n-input v-model:value="username" placeholder="Username"/>
      <n-input type="password" v-model:value="password" placeholder="Password"/>
      <n-button type="primary" secondary native-type="submit" class="w-full" @click="handleLogin">Login</n-button>
    </div>
  </div>
</template>

<style scoped>
.glass-wrapper {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  @apply flex flex-col items-center gap-4 p-8;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
