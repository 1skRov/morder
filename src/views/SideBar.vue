<template>
  <div class="sidebar">
    <n-layout has-sider>
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="handleCollapse"
          @expand="handleExpand"
          style="background: rgb(14 23 38/1);"
      >
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            @update:value="handleMenuClick"
            key-field="key"
            label-field="label"
            children-field="children"
        />
      </n-layout-sider>
    </n-layout>
  </div>
</template>

<script>
import { NLayout, NLayoutSider, NMenu } from "naive-ui";
import {h} from "vue";

export default {
  name: "SideBar",
  components: { NLayout, NLayoutSider, NMenu },
  data() {
    return {
      collapsed: true,
      menuOptions: [
        {
          label: "Главная",
          key: "main",
          icon: this.renderIcon("home-outline"),
        },
        {
          label: "Календарь",
          key: "calendar",
          icon: this.renderIcon("calendar-outline"),
          children: [
            {
              label: "События",
              key: "calendar",
            },
            {
              label: "Запланированное",
              key: "calendar",
            },
          ],
        },
        {
          label: "Сотрудники",
          key: "employees",
          icon: this.renderIcon("accessibility-outline"),
        },
        {
          label: "Вход",
          key: "login",
          icon: this.renderIcon("log-in-outline"),
        },
      ],
    };
  },
  methods: {
    renderIcon(iconName) {
      return () =>
          h("ion-icon", {
            name: iconName,
            style: "font-size: 22px",
          });
    },
    handleCollapse() {
      this.collapsed = true;
    },
    handleExpand() {
      this.collapsed = false;
    },
    handleMenuClick(key) {
      this.$router.push({ name: key });
    },
  },
};
</script>

<style scoped>
.sidebar {
  @apply h-full flex flex-col z-10;
}
</style>
