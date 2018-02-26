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
      <div v-if="categories && categories.length > 0" class="article-wrap__aside-box article-wrap__categories">
        <p class="article-wrap__categories-heading">Categories</p>
        <a
          v-for="category in categories"
          :key="`cat-${category}`"
          :href="`cat-${category}`">
          {{ category }}
        </a>
      </div>
      <div v-if="contact" class="article-wrap__aside-box">
        <ContactList class="article-wrap__contact-list" v-bind="contact" />
      </div>
      <div class="article-wrap__aside-box article-wrap__social">
        <p class="article-wrap__social-heading">Share</p>
        <SocialList />
      </div>
    </footer>
  </article>
</template>

<script>
import ContactList from '../contact-list/ContactList.vue';
import SocialList from '../social-list/SocialList.vue';

export default {
  components: { ContactList, SocialList },
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
    categories: {
      type: Array,
      validator: arr => arr.every(item => typeof item === 'string'),
    },
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
