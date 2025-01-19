import { defineStore } from 'pinia';
import api from '@/apiClient.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        userId: localStorage.getItem('userId') || null,
        isAuthenticated: !!localStorage.getItem('token'),
        loginError: null,
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await api.post('/auth/login', { username, password });
                if (response.data._success) {
                    const { token, user_id: userId } = response.data;

                    localStorage.setItem('token', token);
                    localStorage.setItem('userId', userId);

                    this.token = token;
                    this.userId = userId;
                    this.isAuthenticated = true;
                    this.loginError = null;
                } else {
                    this.loginError = response.data.message;
                }
            } catch (error) {
                this.loginError = 'Ошибка подключения к серверу';
                console.error('Login error:', error);
            }
        },
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');

            this.token = null;
            this.userId = null;
            this.isAuthenticated = false;
            this.loginError = null;
        },
    },
});
