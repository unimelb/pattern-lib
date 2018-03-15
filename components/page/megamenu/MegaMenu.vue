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
              :href="rootitem.href ? rootitem.href : '#'"
              class="menu__link"
            >
              {{ rootitem.title }}
            </a>
            <div
              class="inner"
              v-if="rootitem.items"
            >
              <h3 class="menu__sectiontitle">{{ rootitem.title }}</h3>
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
  props: {
    items: Array,
  },
  components: { SearchIntegratedNav },
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
      if (this.$parent.$refs.headerroot && this.items[rootindex].items !== undefined && !this.isActive) {
        this.blanket.show({ onClick: this.dismissMenu.bind(this) });
        this.$parent.$refs.headerroot.classList.add('active');
        // this.$parent.$refs.headerroot.removeAttribute('aria-hidden');
        this.isActive = true;
      }
    },

    dismissMenu() {
      if (this.$parent.$refs.headerroot && this.isActive) {
        this.blanket.hide();
        this.$parent.$refs.headerroot.classList.remove('active');
        // this.$parent.$refs.headerroot.setAttribute('aria-hidden', true);
        this.isActive = false;
      }
    },
  },
};
</script>
