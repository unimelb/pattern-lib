<template>
  <div class="input-filter">
    <input
      v-model="query"
      type="search"
      placeholder="Search"
      class="input-filter__input">
    <button
      aria-label="Search"
      class="input-filter__search-button"
      @click="emitEvent">
      <SvgIcon
        class="input-filter__search-button--icon"
        name="search"/>
      <span class="input-filter__search-button--text">Search</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
  },

  data() {
    return {
      query: '',
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(data => data.value.match(new RegExp(this.query, 'i')));
    },
  },
  mounted() {
    this.$emit('event-data-filtered', this.filteredData);
  },
  methods: {
    emitEvent() {
      this.$emit('event-data-filtered', this.filteredData);
    },
  },
};
</script>
