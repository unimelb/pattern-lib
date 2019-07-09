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
  methods: {
    emitEvent() {
      this.$emit('event-data-input', { filterOn: this.data, value: this.userInputData });
    },
  },
};
</script>
