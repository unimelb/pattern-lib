<template>
  <div class="header-tools__menu">
    <a class="link-icon--vertical link-reset" href="#sitemap">
      <svg class="link-icon__icon svg" role="presentation" focusable="false" viewBox="10 10 26 28">
        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
      </svg>
      <span class="link-icon__text">Menu</span>
    </a>
    <div id="sitemap" role="navigation" :data-absolute-root="root">
      <h2 v-html="title"></h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Nav from './nav';

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
    this.actor = new Nav();
  },
};
</script>
