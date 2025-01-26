<template>
  <n-config-provider :theme="currentTheme" :themeOverrides="themeOverrides">
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

    return { currentTheme,
      themeOverrides: {
        common: {
          primaryColor: '#1e90ff',
          baseColor: 'rgb(14 23 38/1)',
          textColorBase: '#ffffff',
        },
        DataTable: {
          thColor: 'rgba(20, 30, 50, 1)',
          tdColor: 'rgb(14 23 38/1)',
          tdColorHover: "#2b394e",
          borderColor: '#374151',
        },
        Menu: {
          color: "rgba(14, 23, 38, 1)", // Фон меню
          itemColor: "rgba(20, 30, 50, 1)",
          itemColorHover: 'rgba(20, 30, 50)', // Фон элемента при наведении
          itemColorActive: 'rgba(20, 30, 50)', // Фон активного элемента
          itemTextColor: "#ffffff", // Цвет текста элементов
          itemTextColorHover: "#ffffff", // Цвет текста при наведении
          itemTextColorActive: "#ffffff", // Цвет текста активного элемента
          itemIconColor: "#ffffff", // Цвет иконок
          itemIconColorHover: "#ffffff", // Цвет иконок при наведении
          itemIconColorActive: "#ffffff", // Цвет иконок активного элемента
          dividerColor: "#374151", // Цвет разделителей
          borderRadius: "6px", // Радиус скругления элементов
        }
      },
    };
  },
});
</script>

<style>
</style>
