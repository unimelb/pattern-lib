<template>
  <nav>
    <ul
      class="mega-top"
      role="menu">
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        <a
          :href="item.href"
          role="menuitem"
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
