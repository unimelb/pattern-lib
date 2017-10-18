<template>
  <article
    class="article-wrap max"
    :class="hasSidebar ? [] : ['article-wrap--no-sidebar', 'max--sml']"
  >
    <h1 class="article-wrap__header">{{ title }}</h1>
    <div class="article-wrap__main">
      <slot></slot>
    </div>
    <footer
      v-if="hasSidebar"
      class="article-wrap__aside"
      role="contentinfo"
    >
      <div class="article-wrap__meta">
        <time :datetime="date">{{ date }}</time> | <span class="article-wrap__type">{{ postType }}</span>
      </div>
      <div v-if="contact" class="article-wrap__contact">
        <ContactList class="article-wrap__contact-list" v-bind="contact" />
      </div>
      <div class="article-wrap__social">
        <p class="article-wrap__social-heading">SHARE</p>
        <ul class="list-social">
          <li class="list-social--twitter"><a href="https://twitter.com/unimelb"><SvgIcon name="twitter" width="25" height="25" /></a></li>
          <li class="list-social--facebook"><a href="https://facebook.com/unimelb"><SvgIcon name="facebook" width="25" height="25" /></a></li>
          <li class="list-social--linkedin"><a href="https://www.linkedin.com/in/the-university-of-melbourne-21543061"><SvgIcon name="linkedin" width="25" height="25" /></a></li>
        </ul>
      </div>
    </footer>
  </article>
</template>

<script>
import ContactList from '../contact-list/ContactList.vue';

export default {
  components: { ContactList },
  props: {
    title: {
      type: String,
      required: true,
    },
    contact: Object,
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    date: {
      type: String,
    },
    postType: {
      type: String,
    },
  },
  computed: {
    hasSidebar() {
      return this.date || this.postType || this.contact || this.phone || this.email;
    },
  },
};
</script>
