<template>
  <header class="mega-menu-alt">
    <ScreenReaderJumpTo
      text="Skip to content"
      to-element="#main" />
    <div class="mega-menu-alt__inner bg-inverted">
      <Logo size="md" />
      <div class="mega-menu-alt__menu">
        <div class="mega-menu-alt__menu-top">
          <nav aria-label="Quick links">
            <ul class="mega-menu-alt__secondary-links list-reset">
              <li
                v-for="(link, index) in secondaryLinks"
                :key="index">
                <a
                  :href="link.href"
                  class="link-reset">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </nav>
          <ul class="mega-menu-alt__actions list-reset">
            <li class="mega-menu-alt__contact">
              <a
                href="https://www.unimelb.edu.au/contact"
                class="link-reset">
                Contact
              </a>
            </li>
            <li class="mega-menu-alt__search">
              <button
                ref="searchBtn"
                :aria-expanded="String(isSearchOpen)"
                class="link-reset"
                @click="openSearch">
                Search
                <svg
                  focusable="false"
                  role="presentation">
                  <use xlink:href="#icon-search" />
                </svg>
              </button>
            </li>
            <li class="mega-menu-alt__mobile-menu">
              <button
                ref="menuBtn"
                :aria-expanded="String(isMobileOpen)"
                class="link-reset"
                @click="openMobileMenu">
                Menu
                <svg
                  focusable="false"
                  aria-label="icon menu"
                  viewBox="10 10 26 28">
                  <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <nav aria-label="Site">
          <ul class="mega-menu-alt__primary-links list-reset">
            <li
              v-for="(link, index) in primaryLinks"
              :key="index">
              <a
                :href="link.href"
                class="link-reset">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>
        <MegaMenuAltMobile
          v-model="isMobileOpen"
          :primary-links="primaryLinks"
          :secondary-links="secondaryLinks"
          @close="closeMobileMenu" />
        <div
          class="page-header-search"
          :class="{ active: isSearchOpen }"
          @keydown.esc="closeSearch">
          <Trap :disabled="!isSearchOpen">
            <PageSearchForm>
              <a
                href="#"
                aria-haspopup="true"
                class="page-header-search__close link-reset"
                @click.prevent="closeSearch">
                <svg
                  focusable="false"
                  role="presentation">
                  <use xlink:href="#icon-close" />
                </svg>
                Close
              </a>
            </PageSearchForm>
          </Trap>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Trap from 'vue-focus-lock';
import PageSearchForm from 'components/search/PageSearchForm.vue';
import Logo from 'components/logo/Logo.vue';
import ScreenReaderJumpTo from 'components/screen-reader-jump-to/ScreenReaderJumpTo.vue';
import MegaMenuAltMobile from './MegaMenuAltMobile.vue';

export default {
  components: {
    Logo,
    MegaMenuAltMobile,
    PageSearchForm,
    Trap,
    ScreenReaderJumpTo,
  },
  props: {
    primaryLinks: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    secondaryLinks: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isMobileOpen: false,
      isSearchOpen: false,
    };
  },
  methods: {
    openMobileMenu() {
      this.isMobileOpen = true;
    },
    openSearch() {
      this.isSearchOpen = true;
    },
    closeMobileMenu() {
      this.isMobileOpen = false;
      this.$nextTick(() => {
        this.$refs.menuBtn.focus();
      });
    },
    closeSearch() {
      this.isSearchOpen = false;
      this.$nextTick(() => {
        this.$refs.searchBtn.focus();
      });
    },
  },
};
</script>
