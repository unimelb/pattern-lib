<template>
  <header class="mega-menu-alt">
    <a
      href="#main"
      class="mega-menu-alt__skip-link screen-reader-jump-to__skippy screenreaders-only screenreaders-only-focusable btn--inverted btn btn--xsml">
      Skip to content
    </a>
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
import MegaMenuAltMobile from './MegaMenuAltMobile.vue';

export default {
  components: {
    Logo,
    MegaMenuAltMobile,
    PageSearchForm,
    Trap,
  },
  data() {
    return {
      isMobileOpen: false,
      isSearchOpen: false,
      primaryLinks: [
        { text: 'Home', href: '/home-page' },
        { text: 'Study at Melbourne', href: 'https://study.unimelb.edu.au/' },
        { text: 'Research and innovation', href: 'https://research.unimelb.edu.au/' },
        { text: 'About us', href: 'https://about.unimelb.edu.au/' },
        { text: 'Virtual Campus', href: 'https://study.unimelb.edu.au/discover/virtual-tour' },
      ],
      secondaryLinks: [
        { text: 'Current students', href: 'https://students.unimelb.edu.au/' },
        { text: 'Staff', href: 'https://staff.unimelb.edu.au/' },
        { text: 'Library', href: 'https://library.unimelb.edu.au/' },
      ],
    };
  },
  computed: {
    mobileMenuLinks() {
      return [
        ...this.primaryLinks,
        ...this.secondaryLinks,
        { text: 'Contact', href: 'https://www.unimelb.edu.au/contact' },
      ];
    },
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
