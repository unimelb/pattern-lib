<template>
  <SearchIntegratedNav title="Study Hub">
    <ul>
      <li
        v-for="(rootitem, rootindex) in items"
        :key="`rootitem-${rootindex}`"
      >
        <a :href="rootitem.href">{{ rootitem.title }}</a>
        <div
          class="inner"
          v-if="rootitem.items"
        >
          <ul>
            <li v-for="(menuitem, menuindex) in rootitem.items" :key="`menuitem-${menuindex}`">
              <a :href="menuitem.href">{{ menuitem.title }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </SearchIntegratedNav>
</template>

<script>
import SearchIntegratedNav from '../SearchIntegratedNav.vue';

export default {
  components: { SearchIntegratedNav },
  props: {
    items: Array,
  },
  readme: { html: true, source: false },
};
</script>
