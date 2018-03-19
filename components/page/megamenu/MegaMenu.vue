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
      <div class="megamenu__blanket" @click="dismissMobileMenu">
        <nav class="megamenu" ref="rootmenu">
          <button aria-label="Close" type="button" class="menu__back-btn" @click="dismissMobileMenu">Close</button>
          <PageSearchForm />
          <ul class="menu__section">
            <li
              class="menu__item"
              v-for="(rootitem, rootindex) in items"
              :key="`rootitem-${rootindex}`"
              @mouseover="activateDesktopMenu(rootindex)"
              @mouseout="dismissDesktopMenu"
            >
              <a
                role="menuitem"
                :href="rootitem.href"
                :class="`${rootindex === 0 ? 'menu__nested-parent' : 'menu__link'}`"
              >
                {{ rootitem.title }}
              </a>
              <div
                class="inner"
                v-if="rootitem.items"
              >
                <a :href="rootitem.href" class="menu__nested-parent">{{ rootitem.title }}</a>
                <ul class="menu__section">
                  <li class="menu__item" v-for="(menuitem, menuindex) in rootitem.items" :key="`menuitem-${menuindex}`">
                    <a class="menu__link" :href="menuitem.href" role="menuitem">{{ menuitem.title }}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-tools__menu">
        <a
          role="button"
          aria-haspopup="true"
          aria-controls="sitemapmenu"
          href="#sitemap"
          id="sitemapbutton"
          class="link-icon--vertical link-reset"
          @click.prevent="activateMobileMenu"
        >
          <svg class="link-icon__icon svg" role="presentation" focusable="false" viewBox="10 10 26 28">
            <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
          </svg>
          <span class="link-icon__text">Menu</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Blanket from '../search/blanket';
import PageSearchForm from '../search/PageSearchForm.vue';

export default {
  components: { PageSearchForm },
  props: {
    items: Array,
  },
  data() {
    return {
      isActive: false,
      isOpen: false,
    };
  },
  computed: {
    isMobile() {
      return (this.$refs.headerroot.offsetWidth < 768);
    },
  },
  mounted() {
    this.blanket = new Blanket();
  },
  methods: {
    activateDesktopMenu(rootindex) {
      if (this.items[rootindex].items !== undefined && !this.isActive && !this.isMobile) {
        this.blanket.show({ onClick: this.dismissDesktopMenu.bind(this) });
        this.$refs.headerroot.classList.add('active');
        this.isOpen = true;
      }
    },
    dismissDesktopMenu() {
      if (this.isOpen && !this.isActive && !this.isMobile) {
        this.blanket.hide();
        this.$refs.headerroot.classList.remove('active');
        this.isOpen = false;
      }
    },
    activateMobileMenu() {
      if (!this.isActive) {
        this.blanket.show({ onClick: this.dismissMobileMenu.bind(this) });
        this.$refs.rootmenu.classList.add('active');
        this.$refs.headerroot.classList.add('active');
        this.isActive = true;
      }
    },
    dismissMobileMenu() {
      if (this.isActive) {
        this.blanket.hide();
        this.$refs.rootmenu.classList.remove('active');
        this.$refs.headerroot.classList.remove('active');
        this.isActive = false;
      }
    },
  },
};
</script>
