<template>
  <div class="mega-top">
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      role="menuitem"
      class="menu-top__item">
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'MegaMenuTopNavigation',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
