<template>
  <div class="checkbox-filter">
    <h3 class="checkbox-filter__title">{{ title }}</h3>
    <div
      v-for="(item, index) in data"
      :key="index">
      <input
        :value="item"
        v-model="query"
        type="checkbox"
        class="checkbox-filter__box"
        @change="emitEvent">
      <label class="checkbox-filter__label">{{ item }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      query: [],
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(
        data => data.match(new RegExp(this.query, 'i'))
      );
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
