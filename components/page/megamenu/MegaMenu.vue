<!-- eslint-disable -->
<template>
  <div
    ref="headerroot"
    class="page-header page-header--l3 page-header--study">
    <div class="page-header__inner">
      <a
        class="link-img link-reset"
        href="https://www.unimelb.edu.au/">
        <div class="logo-mask">
          <img
            class="page-header__logo"
            src="../../shared/logo.svg"
            width="117"
            height="117"
            alt="The University of Melbourne homepage"
          >
        </div>
      </a>
      <!-- <MegaMenuTitle
        v-if="facultyName"
        :title="facultyName"
        :href="facultyLink"
        :width="facultyWidth"
      /> -->
      <div ref="blanket" class="megamenu__blanket" @click="dismissMobileMenuIfBlanket" @keypress.27="dismissMobileMenu">
        <!-- <div
          role="button"
          aria-label="Close"
          class="menu__back-btn"
          @click="dismissMobileMenu">
          Close
        </div> -->
        <!-- <PageSearchForm
          v-if="isMobileOpen"
          aria-hidden="true"/> -->
        <!-- <MegaMenuTopNavigation
          v-if="topNavigationItems"
          :top-navigation-items="topNavigationItems"
          class="megamenu__top-navigation"
        /> -->
        <nav id="sitemapmenu" ref="rootmenu" aria-label="Site" class="megamenu">
          <MegaMenuMainNavigation 
            :items="items"
            :active="active"
            @activate-desktop-menu="activateDesktopMenu"
            @dismiss-desktop-menu="dismissDesktopMenu"
            @handle-key="handleKey"
            @open-inner="openInner"
          />
        </nav>      
      </div>      
      <!-- <PageSearch/>       -->
      <!-- <MegaMenuHeaderTools /> -->
    </div>
  </div>
</template>

<script>
// mega-menu-activate-desktop-menu
// mega-menu-dismiss-desktop-menu
// mega-menu-activate-mobile-menu
// mega-menu-dismiss-mobile-menu

import Blanket from '../search/blanket';
import PageSearch from '../search/PageSearch.vue';
import PageSearchForm from '../search/PageSearchForm.vue';
import MegaMenuTitle from './MegaMenuTitle.vue';
import MegaMenuTopNavigation from './MegaMenuTopNavigation.vue';
import MegaMenuMainNavigation from './MegaMenuMainNavigation.vue';
import MegaMenuHeaderTools from './MegaMenuHeaderTools.vue';

export default {
  components: {
    PageSearch,
    PageSearchForm,
    MegaMenuTitle,
    MegaMenuTopNavigation,
    MegaMenuMainNavigation,
    MegaMenuHeaderTools,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    active: {
      type: [String, Boolean],
      default: false,
    },
    facultyName: {
      type: [String],
      required: false,
      default: '',
    },
    facultyLink: {
      type: [String],
      required: false,
      default: '/',
    },
    facultyWidth: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
    topNavigationItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isMobileOpen: false,
      isDesktopOpen: false,
      current: 0,
      pointer: 0,
    };
  },
  computed: {
    isMobile() {
      return this.$refs.headerroot
        ? this.$refs.headerroot.offsetWidth < 768
        : false;
    },
  },
  mounted() {
    this.blanket = new Blanket();
    window.addEventListener('resize', this.closeMobileIfDesktop.bind(this));
  },
  methods: {
    activateDesktopMenu(rootindex) {
      /* eslint-disable */
     console.log('this.$children >>>',this.$children);
      if (
        rootindex !== -1
        && this.items[rootindex].items !== undefined
        && !this.isMobileOpen
        && !this.isMobile
      ) {
        this.activateBlanket(this.dismissDesktopMenu.bind(this));
       
        this.$refs.rootitems[rootindex].classList.add('menu__item--over');
        
        this.isDesktopOpen = true;
        this.$emit('mega-menu-activate-desktop-menu');
      }
    },
    dismissDesktopMenu(props = {}) {
      const { force } = props;
      if (
        (this.isDesktopOpen && !this.isMobileOpen && !this.isMobile)
        || force
      ) {
        this.dismissBlanket();
        this.dismissAllDesktopChildren();
        this.isDesktopOpen = false;
        this.$emit('mega-menu-dismiss-desktop-menu');
      }
    },
    dismissAllDesktopChildren() {
      this.$refs.rootitems.forEach(item => item.classList.remove('menu__item--over'));
    },
    activateMobileMenu() {
      if (!this.isMobileOpen) {
        this.activateBlanket(this.dismissMobileMenu.bind(this));
        this.$refs.rootmenu.classList.add('active');
        this.isMobileOpen = true;
        this.$emit('mega-menu-activate-mobile-menu');
      }
    },
    activateBlanket(callback) {
      this.blanket.show({ onClick: callback });
      this.$refs.headerroot.classList.add('active');
    },
    dismissBlanket() {
      this.blanket.hide();
      this.$refs.headerroot.classList.remove('active');
    },
    dismissMobileMenu() {
      if (this.isMobileOpen) {
        this.dismissBlanket();
        this.$refs.rootmenu.classList.remove('active');
        this.isMobileOpen = false;
        this.$emit('mega-menu-dismiss-mobile-menu');
      }
    },
    dismissMobileMenuIfBlanket(e) {
      if (e.target !== this.$refs.blanket) return;

      this.dismissMobileMenu();
    },

  openInner(e) {
    /* eslint-disable */
    console.log('openInner');
    
    if (
      this.$refs.headerroot
      && this.$refs.headerroot.offsetWidth < 768
      && e.target.nextElementSibling
    ) {
      e.preventDefault();
      e.target.nextElementSibling.classList.add('open');
    }
  },
  closeInner(e) {
    e.target.parentElement.classList.remove('open');
  },

    closeMobileIfDesktop() {
      if (this.isMobile) return;
      if (this.isMobileOpen) {
        this.dismissMobileMenu();
        this.$refs.panels.forEach((panel) => {
          panel.classList.remove('open');
        });
      }
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // Return on mobile
      if (this.isMobile) return;

      // Allow tab to pass through
      if (e.keyCode !== 9) e.preventDefault();

      let cycle;
      if (e.keyCode === 38 || e.keyCode === 40) {
        cycle = this.$refs.rootitems[this.current].querySelectorAll(
          '.menu__aside a,.menu__section a'
        );
      }

      switch (e.keyCode) {
        // esc
        case 27:
          this.pointer = 0;
          this.current = 0;
          this.dismissAllDesktopChildren();
          this.dismissBlanket();
          break;
        // enter / space
        case 13:
        case 32:
          if (e.target.classList.contains('.menu__item')) {
            e.target.querySelector('.menu__link').click();
          } else {
            e.target.click();
          }
          break;
        // left
        case 37:
          this.prevRootItem();
          break;
        // right
        case 39:
          this.nextRootItem();
          break;
        // up
        case 38:
          if (cycle.length > 1) {
            this.pointer = this.pointer > 0 ? this.pointer - 1 : cycle.length - 1;
            cycle[this.pointer].focus();
          } else {
            this.prevRootItem();
          }
          break;
        // down
        case 40:
          if (cycle.length > 1) {
            this.pointer = this.pointer < cycle.length - 1 ? this.pointer + 1 : 0;
            cycle[this.pointer].focus();
          } else {
            this.nextRootItem();
          }
          break;
        default:
          break;
      }
    },
    prevRootItem() {
      this.pointer = 0;
      this.current = this.current > 0 ? this.current - 1 : this.items.length - 1;
      this.dismissAllDesktopChildren();
      this.$refs.rootitems[this.current].focus();
      if (this.items[this.current].items) {
        this.activateBlanket(this.dismissDesktopMenu.bind(this));
      } else {
        this.dismissBlanket();
      }
    },
    nextRootItem() {
      this.pointer = 0;
      this.current = this.current < this.items.length - 1 ? this.current + 1 : 0;
      this.dismissAllDesktopChildren();
      this.$refs.rootitems[this.current].focus();
      if (this.items[this.current].items) {
        this.activateBlanket(this.dismissDesktopMenu.bind(this));
      } else {
        this.dismissBlanket();
      }
    },
    getCurrent(e) {
      let curr = -1;
      this.items.forEach((rootitem, rootindex) => {
        if (rootitem.title === e.target.innerText) {
          curr = rootindex;
        }
      }, this);
      this.current = curr;
    },
    isSelected(index) {
      return index === this.current ? 0 : -1;
    },
  },
};
</script>
