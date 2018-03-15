<template>
  <header ref="headerroot" class="page-header page-header--l3 page-header--study">
    <div class="page-header__inner">
      <a class="link-img link-reset" href="https://www.unimelb.edu.au/">
        <img
          class="page-header__logo"
          src="../../shared/logo.svg"
          width="117" height="117"
          alt="The University of Melbourne homepage"
        >
      </a>
      <nav class="megamenu" ref="rootmenu">
        <ul class="menu__section">
          <li
            class="menu__item"
            v-for="(rootitem, rootindex) in items"
            :key="`rootitem-${rootindex}`"
            @mouseover="activateMenu(rootindex)"
            @mouseout="dismissMenu"
          >
            <a
              role="menuitem"
              :href="rootitem.href"
              class="menu__link"
            >
              {{ rootitem.title }}
            </a>
            <div
              class="inner"
              v-if="rootitem.items"
            >
              <a :href="rootitem.href" class="sitenav__nested-parent">{{ rootitem.title }}</a>
              <ul class="menu__section">
                <li class="menu__item" v-for="(menuitem, menuindex) in rootitem.items" :key="`menuitem-${menuindex}`">
                  <a class="menu__link" :href="menuitem.href">{{ menuitem.title }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <SearchIntegratedNav :items="items" class="elevated" />
    </div>
  </header>
</template>

<script>
import Blanket from '../search/blanket';
import SearchIntegratedNav from '../nav/SearchIntegratedNav.vue';

export default {
  components: { SearchIntegratedNav },
  props: {
    items: Array,
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.blanket = new Blanket();
  },
  methods: {
    activateMenu(rootindex) {
      if (this.items[rootindex].items !== undefined && !this.isActive) {
        this.blanket.show({ onClick: this.dismissMenu.bind(this) });
        this.$refs.headerroot.classList.add('active');
        this.isActive = true;
      }
    },

    dismissMenu() {
      if (this.isActive) {
        this.blanket.hide();
        this.$refs.headerroot.classList.remove('active');
        this.isActive = false;
      }
    },
  },
};
</script>
