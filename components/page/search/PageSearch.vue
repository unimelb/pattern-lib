<template>
  <div class="header-tools__search">
    <a class="link-icon--vertical link-reset" href="#search" @click.prevent="activateSearch">
      <SvgIcon class="link-icon__icon svg" name="search" />
      <span class="link-icon__text">Search</span>
    </a>
    <div ref="search" class="page-header-search">
      <form action="https://search.unimelb.edu.au" method="get">
        <input ref="input" class="page-header-search__input" name="q" type="search" placeholder="Search the University" aria-label="Search the University"><button class="page-header-search__submit" type="submit">
          <SvgIcon class="page-header-search__icon" name="search" />
          <span class="screenreaders-only">Go</span>
        </button>
        <a class="page-header-icon link-icon--close" href="#" @click.prevent="handleSearchClose">
          <SvgIcon class="page-header-search__icon--close" name="close" />
          Close
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../../icons/SvgIcon.vue';
import Blanket from './blanket';

export default {
  name: 'page-search',
  components: { SvgIcon },
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
