<template>
  <div class="header-tools__search">
    <button
      class="link-icon--vertical link-reset"
      tabindex="0"
      @click.prevent="open"
      @keypress.13="open"
    >
      <SvgIcon
        class="link-icon__icon svg"
        name="search" />
      <span class="link-icon__text">Search</span>
    </button>
    <div
      ref="search"
      class="page-header-search">
      <PageSearchForm ref="form">
        <a
          class="page-header-icon link-icon--close"
          role="button"
          href="#"
          tabindex="0"
          @click.prevent="close"
        >
          <SvgIcon
            class="page-header-search__icon--close"
            name="close" />
          Close
        </a>
      </PageSearchForm>
    </div>
  </div>
</template>

<script>
// page-search-open
// page-search-close

import SvgIcon from '../../icons/SvgIcon.vue';
import Blanket from './blanket';
import PageSearchForm from './PageSearchForm.vue';

export default {
  name: 'PageSearch',
  components: { SvgIcon, PageSearchForm },
  domFriendly: true,
  mounted() {
    this.blanket = new Blanket();
    this.$refs.form.$refs.input.addEventListener('keyup', this.esc);
  },
  methods: {
    open() {
      this.$refs.search.classList.add('active');

      this.blanket.el.classList.add('white');
      this.blanket.el.addEventListener('click', this.close.bind(this));

      this.$refs.form.$refs.input.focus();
      this.$emit('page-search-open');
    },
    close() {
      this.blanket.el.classList.remove('white');
      this.$refs.search.classList.remove('active');
      this.$emit('page-search-close');
    },
    esc(e) {
      if (e.keyCode === 27) this.close();
    },
  },
};
</script>
