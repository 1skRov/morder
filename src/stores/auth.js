import { defineStore } from 'pinia';
import apiClient from '@/apiClient';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userId: null,
  }),
  actions: {
    async login({ username, password }) {
      try {
        const response = await apiClient.post('/auth/login', { username, password });
        if (response.data._success) {
          this.token = response.data.token;
          this.userId = response.data.user_id;
          localStorage.setItem('token', this.token);
          router.push('/dashboard');
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('Login error:', error.message);
      }
    },
    async logout() {
      try {
        await apiClient.post('/auth/logout');
        this.token = '';
        this.userId = null;
        localStorage.removeItem('token');
        router.push('/login');
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    },
  },
});
