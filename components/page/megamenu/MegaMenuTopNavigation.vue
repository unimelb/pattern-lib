<template>
  <div>
    <a
      v-for="(item, index) in topNavigationItems"
      :key="index"
      :href="item.href"
      class="menu-top__item"
    >{{ item.title }}</a>
  </div>
</template>

<script>
export default {
  name: 'MegaMenuTopNavigation',
  props: {
    topNavigationItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
