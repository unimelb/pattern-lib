<template>
  <nav class="header-tools">
    <PageNav :title="items[0].title" v-if="items">
      <PageSearchForm />
      <ul class="menu__section">
        <li
          class="menu__item"
          v-for="(rootitem, rootindex) in items"
          :key="`rootitem-${rootindex}`"
          v-if="rootindex != 0"
        >
          <a role="menuitem" class="menu__link" :href="rootitem.href">{{ rootitem.title }}</a>
          <div
            class="inner"
            v-if="rootitem.items"
          >
            <ul class="menu__section">
              <li class="menu__item" v-for="(menuitem, menuindex) in rootitem.items" :key="`menuitem-${menuindex}`">
                <a role="menuitem" class="menu__link" :href="menuitem.href">{{ menuitem.title }}</a>
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
  name: 'search-integrated-nav',
  components: { PageNav, PageSearchForm },
  props: {
    title: {
      type: String,
      default: 'Navigation',
    },
    items: Array,
  },
};
</script>
