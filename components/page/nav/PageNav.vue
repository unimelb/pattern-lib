<template>
  <div class="header-tools__menu">
    <a class="link-icon--vertical link-reset" href="#sitemap" @click.prevent="activateMenu">
      <svg class="link-icon__icon svg" role="presentation" focusable="false" viewBox="10 10 26 28">
        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
      </svg>
      <span class="link-icon__text">Menu</span>
    </a>
    <div ref="sitemap" id="sitemap" role="navigation" :data-absolute-root="root">
      <h2 v-html="title"></h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Blanket from '../search/blanket';
import SiteNav from './site-nav';

export default {
  name: 'page-nav',
  props: {
    title: {
      type: String,
      default: 'Site Navigation',
    },
    root: {
      type: String,
    },
  },
  mounted() {
    this.blanket = new Blanket();

    this.menu = new SiteNav(this.$refs.sitemap, {
      root: document.body,
      closeSiteNav: this.dismissMenu.bind(this),
    });
    this.$refs.sitemap.setAttribute('aria-hidden', true);
  },
  methods: {
    activateMenu() {
      this.blanket.show({ onClick: this.dismissMenu.bind(this) });
      this.$refs.sitemap.classList.add('active');
      this.$refs.sitemap.removeAttribute('aria-hidden');
    },
    dismissMenu() {
      this.blanket.hide();
      this.$refs.sitemap.classList.remove('active');
      this.$refs.sitemap.setAttribute('aria-hidden', true);
    },
  },
};
</script>
