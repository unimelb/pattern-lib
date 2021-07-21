<template>
  <nav aria-label="Secondary navigation">
    <ul
      class="mega-top">
      <li
        v-for="(item, index) in items"
        :key="index">
        <a
          :href="item.href"
          class="menu-top__item">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
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
