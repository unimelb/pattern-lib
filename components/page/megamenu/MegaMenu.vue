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
            >
              <component
                :role="rootitem.items ? 'button' : 'menuitem'"
                :href="rootitem.href"
                :class="linkClasses(rootindex, rootitem)"
                :is="rootitem.items ? 'div' : 'a'"
                @click="openInner"
              >
                {{ rootitem.title }}
              </component>
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
                    <a class="menu__link" :href="menuitem.href" role="menuitem">{{ menuitem.title }}</a>
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
import PageSearch from '../search/PageSearch.vue';
import PageSearchForm from '../search/PageSearchForm.vue';

export default {
  components: { PageSearch, PageSearchForm },
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
    dismissMobileMenuIfBlanket(e) {
      if (e.target !== this.$refs.blanket) return;

      this.dismissMobileMenu();
    },
    openInner(e) {
      e.target.nextElementSibling.classList.add('open');
    },
    closeInner(e) {
      e.target.parentElement.classList.remove('open');
    },
    closeMobileIfDesktop() {
      if (this.isMobile) return;
      if (this.isActive) {
        this.dismissMobileMenu();
        this.$refs.panels.forEach((panel) => {
          panel.classList.remove('open');
        });
      }
    },
  },
};
</script>
