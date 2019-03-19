<template>
  <div class="mega-top">
    <a
      v-for="(item, index) in topNavigationItems"
      :key="index"
      :href="item.href"
      class="menu-top__item">
      {{ item.title }}
    </a>
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

<style scoped>
.mega-top {
  display: flex;
  justify-content: flex-end;
  padding: 0 1.2rem;
}

.menu-top__item {
  margin-left: 20px;
  color: #adcdf0;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
}

.menu-top__item:hover,
.menu-top__item:focus {
  color: white;
  text-decoration: underline;
}
</style>
