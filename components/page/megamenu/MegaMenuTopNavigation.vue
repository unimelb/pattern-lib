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


<style scoped>
.menu-top__item {
  margin-left: 20px;
  color: #adcdf0;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: white;
    text-decoration: underline;
  }
}
</style>
