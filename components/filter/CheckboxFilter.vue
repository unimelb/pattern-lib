<template>
  <div class="checkbox-filter">
    <h3 class="checkbox-filter__title">{{ title }}</h3>
    <div
      v-for="(item, index) in data"
      :key="index">
      <input
        :value="item.value"
        v-model="userInputData"
        type="checkbox"
        class="checkbox-filter__box"
        @change="emitEvent"
      >
      <label class="checkbox-filter__label">{{ item.value }}</label>
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
      userInputData: [],
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(data => data.value.match(new RegExp(this.userInputData, 'i')));
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
