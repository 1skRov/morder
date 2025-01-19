<script>
export default {
  name: "Sidebar",
  data() {
    return {
      collapsed: true,
      menuOptions: [
        {
          label: "Hear the Wind Sing",
          key: "hear-the-wind-sing",
          href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
        },
        {
          label: "Pinball 1973",
          key: "pinball-1973",
          disabled: true,
          children: [
            {
              label: "Rat",
              key: "rat",
            },
          ],
        },
        {
          label: "A Wild Sheep Chase",
          key: "a-wild-sheep-chase",
          disabled: true,
        },
        {
          label: "Dance Dance Dance",
          key: "Dance Dance Dance",
          children: [
            {
              type: "group",
              label: "People",
              key: "people",
              children: [
                {
                  label: "Narrator",
                  key: "narrator",
                },
                {
                  label: "Sheep Man",
                  key: "sheep-man",
                },
              ],
            },
            {
              label: "Beverage",
              key: "beverage",
              children: [
                {
                  label: "Whisky",
                  key: "whisky",
                  href: "https://en.wikipedia.org/wiki/Whisky",
                },
              ],
            },
            {
              label: "Food",
              key: "food",
              children: [
                {
                  label: "Sandwich",
                  key: "sandwich",
                },
              ],
            },
            {
              label: "The past increases. The future recedes.",
              key: "the-past-increases-the-future-recedes",
            },
          ],
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
      >
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <span>Content</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped>

</style>