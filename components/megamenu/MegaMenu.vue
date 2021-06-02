<template>
  <div
    ref="headerroot"
    :class="[isShowTopMenu && 'page-header__with-top-menu']"
    class="page-header page-header--l3 page-header--study">
    <div class="page-header__inner">
      <Logo
        class="megamenu__logo"
        size="md"
        no-padding />
      <MegaMenuTitle
        v-if="facultyName"
        :title="facultyName"
        :href="facultyLink"
        :width="facultyWidth" />
      <div
        ref="blanket"
        class="megamenu__blanket"
        @click="dismissMobileMenuIfBlanket"
        @keypress.esc="dismissMobileMenu">
        <MegaMenuTopNavigation
          v-if="isShowTopMenu && isMobileOpen === false"
          :items="topMenu"
          class="megamenu--show-on-desktop" />
        <nav
          id="sitemapmenu"
          ref="rootmenu"
          :class="['megamenu', isShowTopMenu && 'megamenu__with-top-menu']"
          aria-label="Site"
          @mouseleave="dismissMenu">
          <div
            role="button"
            aria-label="Close"
            class="menu__back-btn"
            @click="dismissMobileMenu">
            Close
          </div>
          <PageSearchForm
            v-if="isMobileOpen"
            aria-hidden="true" />
          <MegaMenuTitle
            v-if="facultyName && isMobileOpen"
            :title="facultyName"
            :href="facultyLink"
            :width="facultyWidth" />
          <ul
            class="menu__section"
            role="menu">
            <li
              v-for="(rootitem, rootindex) in items"
              ref="rootitems"
              :key="`rootitem-${rootindex}`"
              role="none"
              tabindex="0"
              class="menu__item"
              @mouseover="activateDesktopMenu(rootindex)"
              @mouseout="dismissDesktopMenu"
              @keydown="handleKey">
              <a
                role="menuitem"
                :href="rootitem.href"
                class="menu__link"
                @click="openInner">
                {{ rootitem.title }}
                <SvgIcon
                  v-if="!isMobileOpen && rootitem.items"
                  :name="'chevron-down'"
                  aria-hidden="true"
                  class="icon" />
                <SvgIcon
                  v-if="isMobileOpen"
                  :name="'chevron-right'"
                  aria-hidden="true"
                  class="icon" />
              </a>
              <div
                v-if="rootitem.items"
                class="inner inner--fade">
                <div
                  role="button"
                  class="menu__back-btn"
                  @click="closeInner">
                  Back
                </div>
                <div class="menu__block">
                  <div>
                    <a
                      :href="rootitem.href"
                      class="menu__nested-parent">{{ rootitem.title }}</a>
                  </div>
                  <ul
                    :class="isColColumns(rootindex)"
                    class="menu__section"
                    role="menu">
                    <li
                      v-for="(menuitem, menuindex) in rootitem.items"
                      :key="`menuitem-${menuindex}`"
                      role="none"
                      class="menu__item">
                      <a
                        :href="menuitem.href"
                        class="menu__link"
                        role="menuitem">
                        {{ menuitem.title }}
                        <SvgIcon
                          v-if="!isMobileOpen"
                          :name="'chevron-right'"
                          aria-hidden="true"
                          class="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="menu__aside">
                  <component
                    :is="rootitem.feature.link ? 'a' : 'div'"
                    v-if="rootitem.feature"
                    :href="rootitem.feature.link"
                    class="menu__campaign">
                    <img
                      v-if="rootitem.feature.img"
                      :src="rootitem.feature.img"
                      :alt="rootitem.feature.alt"
                      class="menu__campaign--img">
                  </component>
                  <div
                    v-if="rootitem.feature"
                    class="menu__aside-info">
                    <p
                      v-if="rootitem.feature.text"
                      class="menu__aside-info__text">
                      {{ rootitem.feature.text }}
                    </p>
                    <div
                      v-if="rootitem.feature.link"
                      class="menu__aside-info__link">
                      <a
                        :href="rootitem.feature.link"
                        class="link">
                        View more details
                        <SvgIcon
                          aria-hidden="true"
                          :name="'chevron-right'"
                          class="icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <MegaMenuTopNavigation
            v-if="isMobileOpen"
            :items="topMenu" />
        </nav>
      </div>
      <PageSearch />
      <div class="header-tools__menu">
        <button
          id="sitemapbutton"
          :tabindex="isMobile ? -1 : 0"
          aria-haspopup="true"
          aria-controls="sitemapmenu"
          href="#sitemapmenu"
          class="link-icon--vertical link-reset"
          @click.prevent="activateMobileMenu"
          @keydown.enter="activeMobileMenu">
          <svg
            class="link-icon__icon svg"
            focusable="false"
            aria-label="icon menu"
            viewBox="10 10 26 28">
            <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
          </svg>
          <span
            id="icon-menu-text"
            class="link-icon__text">Menu</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// mega-menu-activate-desktop-menu
// mega-menu-dismiss-desktop-menu
// mega-menu-activate-mobile-menu
// mega-menu-dismiss-mobile-menu

import SvgIcon from '../icons/SvgIcon.vue';
import Blanket from '../search/blanket';
import PageSearch from '../search/PageSearch.vue';
import PageSearchForm from '../search/PageSearchForm.vue';
import MegaMenuTitle from './MegaMenuTitle.vue';
import MegaMenuTopNavigation from './MegaMenuTopNavigation.vue';
import Logo from '../logo/Logo.vue';
import { WIDTH_900 } from '../../helpers/viewports';
import { TIMER_500 } from '../../constants/timers';
import isMobile from '../../helpers/isMobile';

import {
  KEYCODE_TAB,
  KEYCODE_ENTER,
  KEYCODE_ESC,
  KEYCODE_SPACE,
  KEYCODE_LEFT,
  KEYCODE_UP,
  KEYCODE_RIGHT,
  KEYCODE_DOWN,
} from '../../constants/keycodes';

export default {
  components: {
    SvgIcon,
    PageSearch,
    PageSearchForm,
    MegaMenuTitle,
    MegaMenuTopNavigation,
    Logo,
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
    topMenu: {
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
      lastIndex: null,
      isAnimate: true,
      isActive: false,
      timeOutHoverInID: null,
      timeOutHoverOutID: null,
    };
  },
  computed: {
    isMobile() {
      let functionIsMobile = false;
      if (typeof window !== 'undefined') {
        functionIsMobile = isMobile();
      }
      return functionIsMobile;
    },
    isShowTopMenu() {
      return this.topMenu.length;
    },
  },
  mounted() {
    this.blanket = new Blanket();
    window.addEventListener('resize', this.closeMobileIfDesktop.bind(this));
  },
  methods: {
    isColColumns(rootindex) {
      const oneColumnMaxLength = 5;

      if (this.isMobileOpen) {
        return '';
      }
      if (this.items[rootindex].items.length <= oneColumnMaxLength) {
        return 'cols-1';
      }
      return 'cols-2';
    },
    rootOrChildrenActive(rootitem) {
      if (!this.active) {
        return false;
      }

      let displayActive = false;

      if (this.active === rootitem.href) {
        displayActive = true;
      }
      if (rootitem.items) {
        rootitem.items.forEach((item) => {
          if (item.href === this.active) {
            displayActive = true;
          }
        });
      }

      return displayActive;
    },
    activateDesktopMenu(rootindex) {
      if (
        this.lastIndex !== null
        && this.items[this.lastIndex].items !== undefined
        && this.items[rootindex].items !== undefined
      ) {
        this.isAnimate = false;
        this.lastIndex = rootindex;
      } else {
        this.isAnimate = true;
        this.lastIndex = rootindex;
      }

      if (this.items[rootindex].items !== undefined && !this.isMobileOpen && !this.isMobile) {
        this.timeOutHoverInID = setTimeout(() => {
          this.activateBlanket(this.dismissDesktopMenu.bind(this));
          this.$refs.rootitems[rootindex].classList.add('menu__item--over');
          if (this.isAnimate) {
            this.$refs.rootitems[rootindex].lastChild.classList.add(
              'inner--fade'
            );
          }
          this.isDesktopOpen = true;
          this.$emit('mega-menu-activate-desktop-menu');
        }, TIMER_500);
      }
    },
    dismissDesktopMenu(props = {}) {
      clearTimeout(this.timeOutHoverInID);
      clearTimeout(this.timeOutHoverOutID);
      this.timeOutHoverOutID = setTimeout(() => {
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
      }, TIMER_500);
    },
    dismissMenu() {
      this.lastIndex = null;
    },
    dismissAllDesktopChildren() {
      this.$refs.rootitems.forEach((item) => item.classList.remove('menu__item--over'));

      this.$refs.rootitems.forEach((item) => {
        if (
          !this.isAnimate
          && item.lastChild.classList
          && item.lastChild.classList.contains('inner--fade') === true
        ) {
          item.lastChild.classList.remove('inner--fade');
        }
      });
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
      if (e.target !== this.$refs.blanket) {
        return;
      }

      this.dismissMobileMenu();
    },
    openInner(e) {
      if (
        this.$refs.headerroot
        && this.$refs.headerroot.offsetWidth < WIDTH_900
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
      if (this.isMobile) {
        return;
      }
      if (this.isMobileOpen) {
        this.dismissMobileMenu();
      }
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) {
        return;
      }

      // Return on mobile
      if (this.isMobile) {
        return;
      }

      // Allow tab to pass through
      if (e.keyCode !== KEYCODE_TAB) {
        e.preventDefault();
      }

      let cycle;
      if (e.keyCode === KEYCODE_UP || e.keyCode === KEYCODE_DOWN) {
        cycle = this.$refs.rootitems[this.current].querySelectorAll(
          '.menu__aside a,.menu__section a'
        );
      }

      switch (e.keyCode) {
        // esc
        case KEYCODE_ESC:
          this.pointer = 0;

          // Set current menu item focus.
          this.$refs.rootitems[this.current].focus();

          // TEMP REMOVE - turn back on when looking into menu a11y improvements.
          // this.dismissAllDesktopChildren();
          // this.dismissBlanket();
          break;
        // enter / space
        case KEYCODE_ENTER:
        case KEYCODE_SPACE:
          if (e.target.classList.contains('.menu__item')) {
            e.target.querySelector('.menu__link').click();
          } else {
            e.target.click();
          }
          break;
        // left
        case KEYCODE_LEFT:
          this.prevRootItem();
          break;
        // right
        case KEYCODE_RIGHT:
          this.nextRootItem();
          break;
        // up
        case KEYCODE_UP:
          if (cycle.length > 1) {
            this.pointer = this.pointer >= 1 ? this.pointer - 1 : cycle.length - 1;
            cycle[this.pointer].focus();
          } else {
            // this.prevRootItem();
          }
          break;
        // down
        case KEYCODE_DOWN: {
          const cycleStartIndex = 0;

          if (cycle.length > 1) {
            this.pointer = this.pointer < cycle.length - 1 ? this.pointer + 1 : cycleStartIndex;
            cycle[this.pointer].focus();
          } else {
            // this.nextRootItem();
          }
          break;
        }
        default:
          break;
      }
    },
    prevRootItem() {
      this.pointer = 0;
      this.current = this.current >= 1 ? this.current - 1 : this.items.length - 1;
      this.dismissAllDesktopChildren();
      this.$refs.rootitems[this.current].focus();
      if (this.items[this.current].items) {
        this.activateBlanket(this.dismissDesktopMenu.bind(this));
      } else {
        this.dismissBlanket();
      }
    },
    nextRootItem() {
      const itemsStartIndex = 0;

      this.pointer = 0;
      this.current = this.current < this.items.length - 1 ? this.current + 1 : itemsStartIndex;
      this.dismissAllDesktopChildren();
      this.$refs.rootitems[this.current].focus();
      if (this.items[this.current].items) {
        this.activateBlanket(this.dismissDesktopMenu.bind(this));
      } else {
        this.dismissBlanket();
      }
    },
  },
};
</script>
