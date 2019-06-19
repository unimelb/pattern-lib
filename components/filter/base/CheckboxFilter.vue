<template>
  <div class="search">
    <div
      v-for="(item, index) in data"
      :key="index">
      <label>{{ item }}</label>
      <input
        :value="item"
        v-model="query"
        type="checkbox"
        @change="emitEvent">
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
