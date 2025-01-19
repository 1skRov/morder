<template>
  <n-config-provider :theme="currentTheme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent, computed, watch } from 'vue';
import { useThemeStore } from './stores/theme';
import { darkTheme, lightTheme } from 'naive-ui';

export default defineComponent({
  setup() {
    const themeStore = useThemeStore();
    const currentTheme = computed(() => {
      return themeStore.theme === 'dark' ? darkTheme : lightTheme;
    });
    watch(
        () => themeStore.theme,
        (newTheme) => {
          document.documentElement.setAttribute('data-theme', newTheme);
        },
        { immediate: true }
    );

    return { currentTheme };
  },
});
</script>

<style>
</style>
