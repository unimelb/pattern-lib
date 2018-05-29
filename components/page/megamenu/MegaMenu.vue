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
      <div ref="blanket" class="megamenu__blanket" @click="dismissMobileMenuIfBlanket" @keypress.27="dismissMobileMenu">
        <nav class="megamenu" ref="rootmenu">
          <div role="button" aria-label="Close" class="menu__back-btn" @click="dismissMobileMenu">Close</div>
          <PageSearchForm />
          <ul class="menu__section">
            <li
              class="menu__item"
              v-for="(rootitem, rootindex) in items"
              :key="`rootitem-${rootindex}`"
              @mouseover="activateDesktopMenu(rootindex)"
              @mouseout="dismissDesktopMenu"
              @keydown="handleKey"
              :tabindex="isSelected(rootindex)"
              ref="rootitems"
            >
              <a
                :role="rootitem.items ? 'button' : 'menuitem'"
                :href="rootitem.href"
                :class="linkClasses(rootindex, rootitem)"
                @click="openInner"
              >
                {{ rootitem.title }}
              </a>
              <div
                class="inner"
                v-if="rootitem.items"
                ref="panels"
              >
                <div rol="button" @click="closeInner" class="menu__back-btn">Back</div>
                <div class="menu__aside">
                  <a :href="rootitem.href" class="menu__nested-parent">{{ rootitem.title }}</a>
                  <component
                    class="menu__campaign"
                    v-if="rootitem.feature"
                    :is="rootitem.feature.link ? 'a' : 'div'"
                    :href="rootitem.feature.link"
                    :style="rootitem.feature.img ? `background-image:url(${rootitem.feature.img})` : null"
                  >
                    <p class="menu__campaign-text" v-if="rootitem.feature.text || rootitem.feature.title">
                      <strong class="menu__campaign-title" v-if="rootitem.feature.title">{{ rootitem.feature.title }}</strong>
                      <span v-if="rootitem.feature.text" v-html="rootitem.feature.text"></span>
                    </p>
                  </component>
                </div>
                <ul class="menu__section">
                  <li class="menu__item" v-for="(menuitem, menuindex) in rootitem.items" :key="`menuitem-${menuindex}`">
                    <a tabindex="0" class="menu__link" :href="menuitem.href" role="menuitem">{{ menuitem.title }}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <PageSearch />
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
          @keydown.13="activeMobileMenu"
          :tabindex="isMobile ? -1 : 0"
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
// mega-menu-activate-desktop-menu
// mega-menu-dismiss-desktop-menu
// mega-menu-activate-mobile-menu
// mega-menu-dismiss-mobile-menu

import Blanket from '../search/blanket';
import PageSearch from '../search/PageSearch.vue';
import PageSearchForm from '../search/PageSearchForm.vue';

export default {
  components: { PageSearch, PageSearchForm },
  props: {
    items: Array,
  },
  data() {
    return {
      isMobileOpen: false,
      isDesktopOpen: false,
      current: 0,
    };
  },
  computed: {
    isMobile() {
      return (this.$refs.headerroot ? this.$refs.headerroot.offsetWidth < 768 : false);
    },
  },
  mounted() {
    this.blanket = new Blanket();
    window.addEventListener('resize', this.closeMobileIfDesktop.bind(this));
  },
  methods: {
    linkClasses(rootindex, rootitem) {
      if (rootindex === 0) {
        return 'menu__nested-parent';
      } else if (rootitem.items) {
        return 'menu__link menu__link--nested';
      }
      return 'menu__link';
    },
    activateDesktopMenu(rootindex) {
      if (rootindex !== -1 && this.items[rootindex].items !== undefined && !this.isMobileOpen && !this.isMobile) {
        this.activateBlanket(this.dismissDesktopMenu.bind(this));
        this.$refs.rootitems[rootindex].classList.add('menu__item--over');
        this.isDesktopOpen = true;
        this.$emit('mega-menu-activate-desktop-menu');
      }
    },
    dismissDesktopMenu(props = {}) {
      if ((this.isDesktopOpen && !this.isMobileOpen && !this.isMobile) || props.force) {
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
      if (this.$refs.headerroot ? this.$refs.headerroot.offsetWidth < 768 : false) {
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

      switch (e.keyCode) {
        // esc
        case 27:
          this.current = 0;
          this.dismissAllDesktopChildren();
          this.dismissBlanket();
          break;
        // enter / space
        case 13:
        case 32:
          e.target.querySelector('.menu__link').click();
          break;
        // left
        case 37:
          this.current = this.current > 0 ? this.current - 1 : this.items.length - 1;
          this.dismissAllDesktopChildren();
          this.$refs.rootitems[this.current].focus();
          if (this.items[this.current].items) {
            this.activateBlanket(this.dismissDesktopMenu.bind(this));
          } else {
            this.dismissBlanket();
          }
          break;
        // right
        case 39:
          this.current = this.current < this.items.length - 1 ? this.current + 1 : 0;
          this.dismissAllDesktopChildren();
          this.$refs.rootitems[this.current].focus();
          if (this.items[this.current].items) {
            this.activateBlanket(this.dismissDesktopMenu.bind(this));
          } else {
            this.dismissBlanket();
          }
          break;
        // up
        case 38:
          break;
        // down
        case 40:
          break;
        default:
          break;
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
