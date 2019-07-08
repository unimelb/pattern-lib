<template>
  <div class="input-filter">
    <input
      v-model="userInputData"
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
      userInputData: '',
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(data => data.value.match(new RegExp(this.userInputData, 'i')));
    },
  },
  mounted() {
    this.$emit('event-data-input', this.data);
  },
  methods: {
    emitEvent() {
      this.$emit('event-data-input', {'filterOn': data.filterOn , 'value': this.userInputData});
    },
  },
};
</script>
