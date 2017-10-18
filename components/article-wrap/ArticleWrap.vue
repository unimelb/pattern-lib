<template>
  <article
    class="article-wrap max"
    :class="useColumnLayout ? ['article-wrap--column', 'max--sml'] : []"
  >
    <h1 class="article-wrap__header">{{ title }}</h1>
    <div class="article-wrap__main">
      <slot></slot>
    </div>
    <footer
      v-if="hasMetadata"
      class="article-wrap__aside"
      role="contentinfo"
    >
      <div class="article-wrap__aside-box">
        <time :datetime="date[0]">{{ date[1] }}</time> | <span class="article-wrap__type">{{ type }}</span>
      </div>
      <div v-if="contact" class="article-wrap__aside-box">
        <ContactList class="article-wrap__contact-list" v-bind="contact" />
      </div>
      <div class="article-wrap__aside-box article-wrap__social">
        <p class="article-wrap__social-heading">Share</p>
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
    date: {
      type: Array, // e.g. ['1970-01-01', '1 Jan. 1970']
      validator: arr => (
        arr.length === 2
        && arr.every(item => typeof item === 'string')
      ),
    },
    type: String,
    columnLayout: Boolean,
  },
  computed: {
    hasMetadata() {
      return this.date || this.postType || this.contact;
    },
    useColumnLayout() {
      return this.columnLayout || !this.hasMetadata;
    },
  },
};
</script>
