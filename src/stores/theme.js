import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: localStorage.getItem('theme') || 'light', // Сохраняем тему в localStorage
    }),
    actions: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
        },
        setTheme(theme) {
            this.theme = theme;
            localStorage.setItem('theme', theme);
        },
    },
});