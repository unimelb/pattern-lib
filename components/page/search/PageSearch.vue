<template>
  <div class="header-tools__search">
    <a
      class="link-icon--vertical link-reset"
      role="button"
      href="#search"
      @click.prevent="activateSearch"
      @keydown.13="activeSearch"
      tabindex="0"
    >
      <SvgIcon class="link-icon__icon svg" name="search" />
      <span class="link-icon__text">Search</span>
    </a>
    <div ref="search" class="page-header-search">
      <PageSearchForm>
        <a
          class="page-header-icon link-icon--close"
          role="button"
          href="#"
          @click.prevent="handleSearchClose"
          tabindex="0"
        >
          <SvgIcon class="page-header-search__icon--close" name="close" />
          Close
        </a>
      </PageSearchForm>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../../icons/SvgIcon.vue';
import Blanket from './blanket';
import PageSearchForm from './PageSearchForm.vue';

export default {
  name: 'page-search',
  components: { SvgIcon, PageSearchForm },
  domFriendly: true,
  mounted() {
    this.blanket = new Blanket();
  },
  methods: {
    activateSearch() {
      this.$refs.search.classList.add('active');

      this.blanket.el.classList.add('white');
      this.blanket.el.addEventListener('click', this.handleSearchClose.bind(this));

      this.$refs.input.focus();
    },
    handleSearchClose() {
      this.blanket.el.classList.remove('white');
      this.$refs.search.classList.remove('active');
    },
  },
};
</script>
