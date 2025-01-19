<script>
import "@/styles/auth-theme.css";
import { ref } from 'vue';
import apiClient from '@/apiClient.js';
import { useAuthStore } from '@/stores/auth';
import { useMessage } from 'naive-ui';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const loading = ref(false);

    const authStore = useAuthStore();
    const message = useMessage();

    const handleSubmit = async () => {
      loading.value = true;
      try {
        const { data } = await apiClient.post('/auth/login', {
          username: username.value,
          password: password.value,
        });

        if (data._success) {
          authStore.setAuthData(data.token, data.user_id);
          message.success('Login successful! Redirecting...');
          this.$router.push('/');
        } else {
          message.error(data.message || 'Login failed');
        }
      } catch (error) {
        message.error('An error occurred during login');
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      password,
      loading,
      handleSubmit,
    };
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
        <span></span>
      </div>
    </div>
    <div class="glass-wrapper">
      <n-form>
        <n-input v-model:value="username" placeholder="Username" />
        <n-input type="password" v-model:value="password" placeholder="Password" />
        <n-button type="primary" :loading="loading" native-type="submit" @click="handleSubmit">Login</n-button>
      </n-form>
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
