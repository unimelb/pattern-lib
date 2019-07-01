<template>
  <nav class="header-tools">
    <PageNav
      v-if="items"
      :title="items[0].title">
      <PageSearchForm />
      <ul class="menu__section">
        <li
          v-for="(rootitem, rootindex) in items"
          v-if="rootindex != 0"
          :key="`rootitem-${rootindex}`"
          class="menu__item"
        >
          <a
            :href="rootitem.href"
            role="menuitem"
            class="menu__link">{{ rootitem.title }}</a>
          <div
            v-if="rootitem.items"
            class="inner"
          >
            <ul class="menu__section">
              <li
                v-for="(menuitem, menuindex) in rootitem.items"
                :key="`menuitem-${menuindex}`"
                class="menu__item">
                <a
                  :href="menuitem.href"
                  role="menuitem"
                  class="menu__link">{{ menuitem.title }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </PageNav>
  </nav>
</template>

<script>
import PageNav from './PageNav.vue';
import PageSearchForm from '../search/PageSearchForm.vue';

export default {
  name: 'SearchIntegratedNav',
  components: { PageNav, PageSearchForm },
  props: {
    title: {
      type: String,
      default: 'Navigation',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
